import { GameInfo } from './../../types/types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/Operators';

import { GameService } from './../../services/game.service';
import { AuthService } from './../../services/auth.service';
import { DbService } from './../../services/db.service';
import { GameState } from './../../types/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  displayName = '';
  playerSetup: FormGroup;
  waitingOthersToJoin = false;
  gameInitialized = false;
  nickNameControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  maxPlayersControl = new FormControl('2', [Validators.required, Validators.max(10), Validators.min(2)]);
  maxRoundsControl = new FormControl('1', [Validators.required, Validators.max(10), Validators.min(1)]);
  joinProgress = 0;
  gameInfo: GameInfo;
  constructor(private authService: AuthService,
              private gameService: GameService,
              private fb: FormBuilder,
              private dbService: DbService
  ) {
    this.dbService.gameInfo$.subscribe( val => this.gameInfo = val);
    this.playerSetup = this.fb.group({
      nickName: this.nickNameControl,
      maxPlayers: this.maxPlayersControl,
      maxRounds: this.maxRoundsControl
    });
    this.authService.user$.pipe(map(user => { this.displayName = user.displayName; })).subscribe();
    console.log(this.gameService);
    this.gameService.player$.subscribe(player => this.waitingOthersToJoin =
      (this.gameService.gameState === GameState._2_joining && player.isPlaying));
    this.gameService.attendance$.subscribe(attendance => this.joinProgress = attendance);
    this.gameService.gameState$.subscribe(gameState => this.gameInitialized = gameState > GameState._1_init);
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
