import { PopupNotificationService } from './../../services/popup-notification.service';
import { DataStoreService } from './../../services/data-store.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';

import { Color, GameState } from 'src/app/types/types';
import { Roles, GuessedWord, Point, Line, RoundInfo } from './../../types/types';
import { GameService } from './../../services/game.service';
import { DbService } from './../../services/db.service';
import { CanvasService } from './../../services/canvas.service';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, OnDestroy {

  private p5;
  private sw = 4;
  private canvasWidth = 200;
  canvasHeight = 200;
  public innerWidth: any;
  private colorWheel;
  private colorWheelSize;
  private colorPicked: Color;
  isEditable = false;
  isModerator = false;
  isPlaying = false;
  guessInput = new FormControl('');
  hint = '';
  displayedColumns = ['by', 'word'];
  playerRole = 'guesser';
  playerName = '';
  message = '';
  gameOver = false;
  guessedWords: GuessedWord[] = [];
  gamePaused = false;
  p: any;
  private distances = [];
  private maxDistance;
  private spacer;
  constructor(
    private canvasService: CanvasService,
    private db: DbService,
    private gameService: GameService,
    private dStoreS: DataStoreService,
    private popup: PopupNotificationService,
    private auth: AuthService
  ) {
    window.onresize = this.onWindowResize;
    this.dStoreS.colorPicked$.subscribe(color => {
      this.colorPicked = color;
    });
    this.dStoreS.message$.subscribe(m => this.message = m);
    this.dStoreS.player$.subscribe(player => {
      this.isEditable = player.type === Roles.artist;
      this.playerRole = (this.isEditable) ? 'artist' : 'guesser';
      this.isModerator = player.isModerator;
      this.playerName = player.name;
      this.isPlaying = player.isPlaying;
    });
    this.dStoreS.gameState$.subscribe(gameState => {
      this.setGameOverState(gameState);
    });
    this.dStoreS.guessedWords$.subscribe(words => this.guessedWords = words.reverse());
    this.dStoreS.roundInfo$.subscribe(
      (roundInfo) => this.gamePaused = roundInfo.paused,
      (err) => this.auth.analyzeError(err)
    );
  }

  resetGame() {
    this.gameService.resetGame();
  }

  newGuess() {
    // console.log('new guess:', this.guessInput.value);
    this.canvasService.newGuess(this.guessInput.value);
    this.guessInput.setValue('');
  }

  clearCanvas() {
    this.canvasService.clearCanvas();
  }

  pauseGame(pause: boolean) {
    this.gameService.pauseGame(pause);
    this.gamePaused = pause;
  }
  fullscreen() {
    const fs = this.p.fullscreen();
    this.p.fullscreen(!fs);
    this.dStoreS.fullScreen$.next(!fs);
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setGameOverState(this.dStoreS.gameInfo.gameState);
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }
  private setGameOverState(gameState: GameState) {
    this.gameOver = (gameState === GameState._4_end);
  }
  private onWindowResize = (e) => {
    this.popup.notify('Refresh your page to resize the canvas');
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  }

  private destroyCanvas = () => {
    this.p5.noCanvas();
  }

  private drawing = (p: any) => {
    this.p = p;
    p.preload = () => {
      this.colorWheel = p.loadImage('assets/colorwheel.png');
    };
    // f5 setup
    p.setup = () => {
      this.canvasWidth = p.windowWidth * 2 / 3;
      this.canvasHeight = p.windowWidth * 1 / 3;
      this.colorWheelSize = (this.canvasWidth > 700) ? 150 : this.canvasWidth / 5;
      this.colorWheel.resize(this.colorWheelSize, this.colorWheelSize);
      if (this.isEditable) {
        this.dStoreS.canvas.canvasWidth = this.canvasWidth;
        this.db.updateCanvas();
      }
      p.createCanvas(this.canvasWidth, this.canvasHeight).parent('canvas-container');
      p.background(0);
      p.strokeWeight(this.sw);


      p.rect(0, 0, p.width, p.height);

      p.stroke([this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]);
      p.noStroke();
      this.maxDistance = p.dist(p.width / 2, p.height / 2, p.width, p.height);
      for (let x = 0; x < p.width; x++) {
        this.distances[x] = []; // create nested array
        for (let y = 0; y < p.height; y++) {
          const distance = p.dist(p.width / 2, p.height / 2, x, y);
          this.distances[x][y] = (distance / this.maxDistance) * 255;
        }
      }
      this.spacer = 12;
    };
    p.center = { x: 0, y: 0 };
    // f5 draw
    p.draw = () => {
      p.background(0);
      if (this.isEditable) {
        p.image(this.colorWheel, 5, 5);
      }
      if (p.mouseIsPressed) {
        if (p.mouseButton === p.LEFT) {
          if (this.dStoreS.isDrawing) {
            let point: Point = null;
            if (!(p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height) && this.isEditable) {
              point = {
                x: p.map(p.mouseX, 0, this.canvasWidth, 0, 100),
                y: p.map(p.mouseY, 0, this.canvasWidth, 0, 100)
              };
            }
            if (point) {
              this.dStoreS.currentPath.push(point);
            }
          }
        }
      }
      p.strokeWeight(4);
      p.noFill();
      if (this.dStoreS.canvasDrawing && this.dStoreS.canvasDrawing.lines.length > 0) {
        const keys = Object.keys(this.dStoreS.canvasDrawing.lines);
        for (let i = 0; i < this.dStoreS.canvasDrawing.lines.length; i++) {
          const line: Line = this.dStoreS.canvasDrawing.lines[keys[i]];
          if (line) {
            p.beginShape();
            for (const point of line.points) {
              const col = line.color;
              p.stroke([col.r, col.g, col.b, col.a]);
              let mapX = p.map(point.x, 0, 100, 0, this.canvasWidth);
              let mapY = p.map(point.y, 0, 100, 0, this.canvasWidth);
              p.vertex(mapX, mapY);
            }
            p.endShape();
          }
        }
      }
      if (this.isEditable) {
        p.push();
        p.stroke(this.colorPicked.r, this.colorPicked.g, this.colorPicked.b, 255);
        p.fill(this.colorPicked.r, this.colorPicked.g, this.colorPicked.b, 175);
        p.ellipse(this.colorWheelSize / 2 + 5, this.colorWheelSize + 15, 15, 15);
        p.pop();
      }
      if (this.gameOver) {
        p.push();
        p.noStroke();
        p.fill(255);
        for (let x = 0; x < p.width; x += this.spacer) {
          for (let y = 0; y < p.height; y += this.spacer) {
            p.stroke(this.distances[x][y] / 4);
            p.point(x + this.spacer / 2, y + this.spacer / 2);
          }
        }
        p.textSize(20);
        p.textFont('Redressed');
        const sP = this.dStoreS.sortedPlayersByScore;
        p.fill(42, 247, 236);
        p.text('Rank', 20, 30);
        p.text('Score', 80, 30);
        p.text('Player', 140, 30);
        p.textSize(22);
        for (let i = 0; i < sP.length; i++) {
          p.text(i + 1, 35, 60 + i * 30);
          p.text(sP[i].score, 95, 60 + i * 30);
          p.text(sP[i].name, 145, 60 + i * 30);
        }
        p.pop();
        p.noLoop();
      }
    };
    p.mousePressed = () => {
      if (!(p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height)
        && this.isEditable && (p.mouseX < this.canvasWidth && p.mouseY < this.canvasHeight)
        && this.dStoreS.gameState === GameState._3_playing) {
        this.canvasService.startDrawing();
      } else {
        if (p.mouseX < this.colorWheelSize && p.mouseY < this.colorWheelSize && this.isEditable) {
          this.newColorPicked(this.colorWheel.get(p.mouseX, p.mouseY));
        }
      }
    }
    p.mouseReleased = () => {
      if (this.isEditable && this.dStoreS.isDrawing && this.dStoreS.gameState === GameState._3_playing) {
        this.canvasService.endDrawing();
      }
    };

    p.keyPressed = () => {

    };
  }

  private newColorPicked = (newColor: number[]) => {
    if (this.colorPicked.r !== newColor[0] ||
      this.colorPicked.g !== newColor[1] ||
      this.colorPicked.b !== newColor[2] ||
      this.colorPicked.a !== newColor[3]) {
      this.dStoreS.colorPicked$.next({ r: newColor[0], g: newColor[1], b: newColor[2], a: newColor[3] });
      // console.log(`color is now ${[this.colorPicked.r, this.colorPicked.g, this.colorPicked.b, this.colorPicked.a]}`);
    }
  }


}
