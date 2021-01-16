import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(
    private dStoreS: DataStoreService,
    private log: LoggingService
  ) { }

  getWordCollection(genre: string) {
    return this.dStoreS.defaultWords[genre].map(word => ({ used: false, word }));
  }

  nextWord() {
    if (this.dStoreS.words.collection && this.dStoreS.words.collection.length > 0) {
      const unUsedWords = this.dStoreS.words.collection.filter(word => !word.used);
      if (unUsedWords.length > 0) {
        const next = unUsedWords[Math.floor(Math.random() * unUsedWords.length - 1)];
        this.log.debug('next word:', next.word, this.dStoreS.words.collection);
        this.dStoreS.words.collection.find(w => w.word === next.word).used = true;
        this.dStoreS.canvas.word = next.word;
      }
    }
  }
}
