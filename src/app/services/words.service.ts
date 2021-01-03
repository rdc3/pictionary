import { Injectable } from '@angular/core';
import { DbService } from './../services/db.service';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  wordsGenre = ['Random', 'Places', 'Movies', 'Sports', 'UserDefined'];
  defaultWords = {
    Random: [],
    Places: ['Himalayas', 'India', 'USA', 'Australia', 'Italy', 'London', 'Africa', 'Antarctica', 'Sri Lanka', 'Russia'],
    Movies: ['Rambo', 'Terminator', 'Mr Bean', 'Predator', 'Titanic', 'Jumanji', 'Maleficent', 'Rocky',
      'Twilight', 'Avengers', 'Superman', 'Batman', 'Hobbit', 'Jurassic Park'],
    Sports: [],
    UserDefined: []
  }
  constructor(private db: DbService) { }
  initializeWordsInDb() {
    // this.db.defaultWords.
  }
}
