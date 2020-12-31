
export interface Canvas { artist: string, canvasWidth: number, word: string }
export interface RoundInfo { notYetArtist: number[], roundNumber: number }
export interface GameInfo { gameState: GameState, maxPlayers: number, maxRounds: number, playerCount: number }
export enum GameState { start, joining, playing, end }
export enum Roles { artist, guesser }
