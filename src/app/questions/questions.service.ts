import { Question } from './question';
import { QUESTIONS } from './mock-questions';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {
  getQuestions(): Promise<Question[]> {
    return Promise.resolve(QUESTIONS);
  }
}
