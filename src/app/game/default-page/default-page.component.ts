import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { GameInfo, GameState } from 'src/app/types/types';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  displayForm = true;
  constructor(private dbService: DbService) {
    this.dbService.gameInfoDoc.valueChanges().subscribe((gameInfo: GameInfo) => {
      this.displayForm = (gameInfo.gameState < GameState._3_playing);
      console.log('display form:', this.displayForm, gameInfo.gameState, GameState._2_joining);
    });
  }
  ngOnInit() {
  }
}
