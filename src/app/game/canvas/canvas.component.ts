import { CanvasService, ColorPicked } from './../../services/canvas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, OnDestroy {

  private p5;
  private sw = 4;
  private canvasWidth = 200;
  private canvasHeight = 200;
  private colorWheel;
  private colorPicked: ColorPicked;

  constructor(private canvasService: CanvasService) {
    window.onresize = this.onWindowResize;
    this.canvasService.colorPicked$.subscribe(color => {
        this.colorPicked = color;
    });
  }

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
    console.log('gear-destroy');
  }
  private onWindowResize = (e) => {
    // this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
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
      this.colorWheel = p.loadImage("assets/colorwheel.png");
    }
    // f5 setup
    p.setup = () => {
      this.canvasWidth = p.windowWidth * 3 / 4
      this.canvasHeight = p.windowWidth * 1 / 3
      p.createCanvas(this.canvasWidth, this.canvasHeight).parent('sketch-holder');
      p.background(0);
      p.strokeWeight(this.sw);


      p.rect(0, 0, p.width, p.height);

      p.stroke([this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]);
    };
    p.center = { x: 0, y: 0 };
    // f5 draw
    p.draw = () => {
      // p.background(0);
      p.image(this.colorWheel, 5, 5);
      if (p.mouseIsPressed) {
        if (p.mouseButton === p.LEFT) {
          if (p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height) {
            this.newColorPicked(this.colorWheel.get(p.mouseX, p.mouseY));
            console.log(`color is now ${this.colorWheel.get(p.mouseX, p.mouseY)},${[this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]}`);
          }
          p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
      }
    }
    p.mouseReleased = () => {
      
      // modulo math forces the color to swap through the array provided
      p.stroke([this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]);
    };
   
    p.keyPressed = () => {
      if (p.key === 'c') {
        window.location.reload();
      }
    };
  }

  private newColorPicked = (newColor: number[]) => {
    if (this.colorPicked.r !== newColor[0] &&
      this.colorPicked.b !== newColor[1] &&
      this.colorPicked.g !== newColor[2] &&
      this.colorPicked.a !== newColor[3]) {
      this.canvasService.colorPicked$.next({r:newColor[0],b:newColor[1],g:newColor[2],a:newColor[3]});
    }
    
  }

}
