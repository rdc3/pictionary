import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Canvas, Color, Drawing, GameInfo, GameState, GuessedWord, Player, Point, Roles, RoundInfo, WordsCollection } from '../types/types';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  // FROM FIRESTORE
  canvasDoc: AngularFirestoreDocument<Canvas>;
  canvas$: Observable<Canvas>;
  canvas: Canvas;
  gameInfoDoc: AngularFirestoreDocument<GameInfo>;
  gameInfo$: Observable<GameInfo>;
  gameInfo: GameInfo;
  roundInfoDoc: AngularFirestoreDocument<RoundInfo>;
  roundInfo$: Observable<RoundInfo>;
  roundInfo: RoundInfo;
  wordsDoc: AngularFirestoreDocument<WordsCollection>;
  words$: Observable<WordsCollection>;
  words: WordsCollection;

  // FROM FIREBASE AUTH
  user: firebase.User;
  user$: Observable<firebase.User>;

  // TIME
  roundStartTime$: BehaviorSubject<number> = new BehaviorSubject(new Date().getTime());
  timeElapsed$: BehaviorSubject<number> = new BehaviorSubject(0);
  timeElapsed = 0;
  clientOffsetTime = 0;

  // GAME
  player: Player = this.defaultPlayer;
  player$: BehaviorSubject<Player> = new BehaviorSubject(this.defaultPlayer);  // to notify the change in player to other components
  gameState$: Subject<GameState> = new Subject();
  gameState: GameState = GameState._1_init;
  attendance$: BehaviorSubject<number> = new BehaviorSubject(0);
  message$: BehaviorSubject<string> = new BehaviorSubject('');
  word$: BehaviorSubject<string> = new BehaviorSubject('');

  // CANVAS
  colorPicked$: BehaviorSubject<Color> = new BehaviorSubject({ r: 255, b: 255, g: 255, a: 255 });
  guessedWords$: BehaviorSubject<GuessedWord[]> = new BehaviorSubject([]);
  isDrawing = false;
  currentPath: Point[] = [];
  canvasDrawing: Drawing;
  fullScreen$: Subject<boolean> = new Subject();

  // HARDCODED DATA
  get defaultPlayer() {
    return {
      id: '0',
      isModerator: false,
      isPlaying: false,
      name: '',
      rank: 0,
      score: 0,
      type: Roles.guesser
    };
  }
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
  get sortedPlayersByScore() {
    return this.gameInfo.players.sort(
      (a, b) => b.score - a.score);
  }
  get canvasDbPath() {
    return 'Pictionary/canvas';
  }
  get gameInfoDbPath() {
    return 'Pictionary/gameInfo';
  }
  get roundInfoDbPath() {
    return 'Pictionary/roundInfo';
  }
  get defaultWordsDbPath() {
    return 'Pictionary/words';
  }
  get serverTimeOffset() {
    return 'Pictionary/serverTimeOffset';
  }
  get defaultCanvas(): Canvas {
    return { artist: '', canvasWidth: 9600, drawing: null, word: '', guessedWords: [] };
  }
  get defaultDrawing(): Drawing {
    return { lines: [] };
  }
  get defaultGameInfo(): GameInfo {
    return { gameState: GameState._1_init, maxPlayers: 2, maxRounds: 1, playerCount: 0, players: [], maxTime: 3 };
  }
  get defaultRoundInfo(): RoundInfo {
    return { notYetArtist: [], roundNumber: 0, paused: false, startedAt: (new Date().getTime()) };
  }
  get wordsGenre() { return ['Random', 'Places', 'Movies', 'Sports', 'UserDefined']; }
  get defaultWords() {
    return {
      Random: this.random,
      Places: this.places,
      Movies: this.movies,
      Sports: this.sports,
      UserDefined: []
    };
  }
  get places() {
    return ['Himalayas', 'India', 'USA', 'Australia', 'Italy', 'London', 'Africa', 'Antarctica', 'Sri Lanka', 'Russia'];
  }
  get movies() {
    return ['Rambo', 'Terminator', 'Mr Bean', 'Predator', 'Titanic', 'Jumanji', 'Maleficent', 'Rocky',
      'Twilight', 'Avengers', 'Superman', 'Batman', 'Hobbit', 'Jurassic Park'];
  }
  get sports() {
    return ['cricket', 'football', 'badminton', 'tennis', 'hockey', 'pool', 'ludo', 'scrabble', 'carrom', 'chess',
      'pole vault', 'basketball', 'baseball'];
  }
  get random() {
    return [...this.places, ...this.movies, ...this.sports];
  }

  constructor() { }
}
