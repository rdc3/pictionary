import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';

import { ColorPicked } from 'src/app/types/types';
import { Roles, GuessedWord } from './../../types/types';
import { GameService } from './../../services/game.service';
import { DbService } from './../../services/db.service';
import { CanvasService } from './../../services/canvas.service';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';

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
  private colorPicked: ColorPicked;
  private isEditable = false;
  guessInput = new FormControl('');
  hint = '';
  guessedWords: GuessedWord[] = [];
  displayedColumns = ['by', 'word'];
  constructor(private canvasService: CanvasService,
              private db: DbService,
              private gameService: GameService,
              private snackBar: MatSnackBar
  ) {
    window.onresize = this.onWindowResize;
    this.canvasService.colorPicked$.subscribe(color => {
      this.colorPicked = color;
    });
    this.canvasService.guessedWords$.subscribe(words => {
      words.forEach(gW => {
        const player = this.db.gameInfo.players.find(p => p.id === gW.by);
        gW.by = (player) ? player.name : gW.by;
      });
      console.log('words:', words);
      this.guessedWords = words;
      });
    this.gameService.player$.subscribe(player => this.isEditable = player.type === Roles.artist);
  }

  newGuess() {
    console.log('data:', this.guessInput.value);
    this.canvasService.newGuess(this.guessInput.value);
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
    console.log('gear-destroy');
  }
  private onWindowResize = (e) => {
    this.snackBar.open('Refresh your page to resize the canvas', 'OK', {
      duration: 5000,
    });
  }
  private createCanvas = () => {
    console.log('creating canvas');
    this.p5 = new p5(this.drawing);
  }

  private destroyCanvas = () => {
    console.log('destroying canvas');
    this.p5.noCanvas();
  }

  private drawing = (p: any) => {
    p.preload = () => {
      this.colorWheel = p.loadImage('assets/colorwheel.png');
    }
    // f5 setup
    p.setup = () => {
      this.canvasWidth = p.windowWidth * 2 / 3;
      this.canvasHeight = p.windowWidth * 1 / 3;
      const colorWheelSize = (this.canvasWidth > 700) ? 150 : this.canvasWidth / 5;
      this.colorWheel.resize(colorWheelSize, colorWheelSize);
      if (this.isEditable) {
        this.db.canvas.canvasWidth = this.canvasWidth;
        this.db.updateCanvas();
      }
      p.createCanvas(this.canvasWidth, this.canvasHeight).parent('canvas-container');
      p.background(0);
      p.strokeWeight(this.sw);


      p.rect(0, 0, p.width, p.height);

      p.stroke([this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]);
    };
    p.center = { x: 0, y: 0 };
    // f5 draw
    p.draw = () => {
      // p.background(0);
      if (this.isEditable) {
        p.image(this.colorWheel, 5, 5);
      }
      if (p.mouseIsPressed) {
        if (p.mouseButton === p.LEFT) {

          // p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
          if (this.canvasService.isDrawing) {
            let point = null;
            if (!(p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height) && this.isEditable) {
              point = {
                x: p.mouseX,
                y: p.mouseY,
                color: this.colorPicked
              };
            }
            if (point) {
              this.canvasService.currentPath.push(point);
            }
          }
          p.strokeWeight(4);
          p.noFill();
          if (this.canvasService.canvasDrawing.length > 0) {
            const keys = Object.keys(this.canvasService.canvasDrawing);
            for (let i = 0; i < this.canvasService.canvasDrawing.length; i++) {
              const paths = this.canvasService.canvasDrawing[keys[i]];
              if (paths) {
                p.beginShape();
                for (const path of paths) {
                  const col = path.color;
                  p.stroke([col.r, col.g, col.b, col.a]);
                  const mapX = p.map(path.x, 0, this.canvasService.artistCanvasWidth, 0, p.windowWidth);
                  const mapY = p.map(path.y, 0, this.canvasService.artistCanvasWidth, 0, p.windowWidth);
                  p.vertex(mapX, mapY);
                }
                p.endShape();
              }
            }
          }
        }
      }
    }
    p.mousePressed = () => {
      if (!(p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height) && this.isEditable) {
        this.canvasService.startDrawing();
      } else {
        if (p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height && this.isEditable) {
          this.newColorPicked(this.colorWheel.get(p.mouseX, p.mouseY));
        }
      }
    }
    p.mouseReleased = () => {
      this.canvasService.endDrawing();
      // modulo math forces the color to swap through the array provided
      // p.stroke([this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]);
    };

    p.keyPressed = () => {
      if (p.key === 'c') {
        // window.location.reload();
      }
    };
  }

  private newColorPicked = (newColor: number[]) => {
    if (this.colorPicked.r !== newColor[0] &&
      this.colorPicked.b !== newColor[1] &&
      this.colorPicked.g !== newColor[2] &&
      this.colorPicked.a !== newColor[3]) {
      this.canvasService.colorPicked$.next({ r: newColor[0], b: newColor[1], g: newColor[2], a: newColor[3] });
      console.log(`color is now ${[this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]}`);
    }
  }

}
