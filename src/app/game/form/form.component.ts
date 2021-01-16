import { WordsService } from './../../services/words.service';
import { GameInfo } from './../../types/types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/Operators';

import { GameService } from './../../services/game.service';
import { AuthService } from './../../services/auth.service';
import { DbService } from './../../services/db.service';
import { GameState } from './../../types/types';
import { DataStoreService } from 'src/app/services/data-store.service';

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
  maxPlayersControl = new FormControl(2, [Validators.required, Validators.max(10), Validators.min(2)]);
  maxRoundsControl = new FormControl(1, [Validators.required, Validators.max(10), Validators.min(1)]);
  maxTimeControl = new FormControl(1, [Validators.required, Validators.max(10), Validators.min(1)]);
  genreControl = new FormControl(this.dStoreS.wordsGenre[0], [Validators.required]);
  joinProgress = 0;
  gameInfo: GameInfo;
  store: DataStoreService;
  constructor(
    private gameService: GameService,
    private fb: FormBuilder,
    private dStoreS: DataStoreService,
    private auth: AuthService
  ) {
    this.store = dStoreS;
    this.dStoreS.gameInfo$.subscribe(
      (val) => this.gameInfo = val,
      (err) => this.auth.analyzeError(err)
    );
    this.playerSetup = this.fb.group({
      nickName: this.nickNameControl,
      maxPlayers: this.maxPlayersControl,
      maxRounds: this.maxRoundsControl,
      maxTime: this.maxTimeControl,
      genre: this.genreControl
    });
    this.dStoreS.user$.pipe(map(user => { this.displayName = this.displayName ?? user.displayName; })).subscribe();
    this.dStoreS.player$.subscribe(player => {
      this.displayName = player.name;
      this.waitingOthersToJoin =
        (this.dStoreS.gameState === GameState._2_joining && player.isPlaying);
    }
    );
    this.dStoreS.attendance$.subscribe(attendance => this.joinProgress = attendance);
    this.dStoreS.gameState$.subscribe(gameState => this.gameInitialized = gameState > GameState._1_init);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.waitingOthersToJoin = true;
    this.gameService.joinGame(this.playerSetup.value);
  }

  useDisplayNameAsNickName(checked: boolean) {
    this.nickNameControl.setValue((checked) ? this.displayName : '');
  }

}
