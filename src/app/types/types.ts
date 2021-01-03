export interface Canvas { artist: string; canvasWidth: number; word: string; guessedWords: GuessedWord[];}
export interface GuessedWord { by: string; word: string; }
export interface RoundInfo { notYetArtist: string[]; roundNumber: number; }
export interface GameInfo { gameState: GameState; maxPlayers: number; maxRounds: number; playerCount: number; players: Player[]; }
export enum GameState { _1_init, _2_joining, _3_playing, _4_end }
export enum Roles { guesser, artist }
export interface Player { id: string; name: string; isModerator: boolean; isPlaying: boolean; type: Roles; score: number; rank: number; }
export interface ColorPicked { r: number; b: number; g: number; a: number; }
// export enum WordsGenre { Random, Places, Movies, Sports, UserDefined}
export interface WordsCollection { collection: WordToGuess[]; }
export interface WordToGuess { word: string; used: boolean; }

