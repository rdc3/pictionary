import { GameService } from './../../services/game.service';
import { AuthService } from 'src/app/services/auth.service';
import { GameInfo, GameState } from './../../types/types';
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/Operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  displayForm = true;
  displayName = '';
  playerSetup: FormGroup;
  nickNameControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  maxPlayersControl = new FormControl('2', [Validators.required, Validators.max(10), Validators.min(2)]);
  maxRoundsControl = new FormControl('1', [Validators.required, Validators.max(10), Validators.min(1)]);
  constructor(private dbService: DbService, private authService: AuthService, private gameService: GameService, private fb: FormBuilder) {
    this.playerSetup = fb.group({
      nickName: this.nickNameControl,
      maxPlayers: this.maxPlayersControl,
      maxRounds: this.maxRoundsControl
    });

    this.dbService.gameInfoDoc.valueChanges().subscribe((gameInfo: GameInfo) => {
      if (gameInfo.gameState > GameState._2_joining) {
        this.displayForm = false;
      }
    });
    this.authService.user$.pipe(map(user => { this.displayName = user.displayName; })).subscribe();
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('form submit', this.playerSetup.value);
    this.gameService.joinGame(this.playerSetup.value);
  }
  useDisplayNameAsNickName(checked: boolean) {

    this.nickNameControl.setValue((checked) ? this.displayName : '');
  }
}
