import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Option } from '../model/option';
import { PersonalityQuestion } from '../model/personality-question';
import { PersonalityTypes } from '../model/personality-types.enum';
import { DataService } from '../service/data.service';
import { testData } from '../test-data/test-data';

const RESULTS_ROUTE = '/results';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {
  @Output() question: PersonalityQuestion | undefined;
  totalQuestions: number = 10;
  allPersonalities: PersonalityTypes[] = [];

  questionID = 0;
  currentQuestion = 0;
  questionIndex: number = 0;
  progressValue: number = 0;

  allQuestions = testData;

  
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.route.paramMap.subscribe(params => {
      this.setQuestionID(+params.get('questionId')!);  // get the question ID and store it
      this.question = this.getQuestion;
    });
  }

  ngOnInit() {
    this.question = this.getQuestion;
    this.totalQuestions = this.allQuestions.length;
    this.progressValue = 100 * (this.currentQuestion + 1) / this.totalQuestions;
  }

  displayNextQuestion() {
    this.increaseProgressValue();

    this.questionIndex = this.questionID++;

    if (typeof document.getElementById('question') !== 'undefined' && this.getQuestionID() <= this.totalQuestions) {
      document.getElementById('question')!.innerHTML = this.allQuestions[this.questionIndex]['questionText'];
    } else {
      this.navigateToResults();
    }
  }

  handleAnswer(option:Option){
    this.allPersonalities.push(option.optionType);
  }


  navigateToNextQuestion(): void {
    this.router.navigate(['/question', this.getQuestionID() + 1]);
    this.displayNextQuestion();
  }

  navigateToResults() {
    this.sendData();
    this.router.navigate([RESULTS_ROUTE]);
  }


  sendData() {
    this.dataService.setData(this.allPersonalities);
  }


  increaseProgressValue() {
    this.progressValue = parseFloat((100 * (this.getQuestionID() + 1) / this.totalQuestions).toFixed(1));
  }


  /****************  public API  ***************/
  getQuestionID() {
    return this.questionID;
  }

  setQuestionID(id: number) {
    return this.questionID = id;
  }

  isThereAnotherQuestion(): boolean {
    return this.questionID <= this.allQuestions.length;
  }

  isFinalQuestion(): boolean {
    return this.currentQuestion === this.totalQuestions;
  }

  get getQuestion(): PersonalityQuestion {
    return this.allQuestions.filter(
      question => question.questionId === this.questionID
    )[0];
  }

}
