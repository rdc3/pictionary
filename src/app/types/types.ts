import firestore from 'firebase/app';
export interface Canvas { artist: string; canvasWidth: number; word: string; guessedWords: GuessedWord[]; drawing: Drawing; }
export interface Color { r: number; b: number; g: number; a: number; }
export interface Point { x: number; y: number; }
export interface Line { points: Point[]; color: Color; }
export interface Drawing { lines: Line[]; }
export interface GuessedWord { byId: string; byName: string; word: string; }
export interface RoundInfo { notYetArtist: string[]; roundNumber: number; paused: boolean; }
export interface GameInfo {
    gameState: GameState;
    maxPlayers: number;
    maxRounds: number;
    maxTime: number;
    playerCount: number;
    players: Player[];
}
export enum GameState { _1_init, _2_joining, _3_playing, _4_end }
export enum Roles { guesser, artist }
export interface Player {
    id: string;
    name: string;
    isModerator: boolean;
    isPlaying: boolean;
    type: Roles;
    score: number;
    rank: number;
}
export interface WordsCollection { collection: WordToGuess[]; }
export interface WordToGuess { word: string; used: boolean; }
