import { Component, OnInit } from '@angular/core';

import { Question } from './question';
import { QuestionsService } from './questions.service';
@Component({
  selector: 'forum-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
    questions: Question[] = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions()
      .then(questions => this.questions = questions);
  }

  getQuestions(): void {
    this.questionsService.getQuestions().then(questions => this.questions = questions);
  }
}