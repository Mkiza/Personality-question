import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatRadioGroup } from '@angular/material/radio';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PersonalityQuestion } from '../model/personality-question';
import { DataService } from '../service/data.service';
import { testData } from '../test-data/test-data';
import { QuizPageComponent } from './quiz-page.component';

describe('QuizPageComponent', () => {
  let component: QuizPageComponent;
  let fixture: ComponentFixture<QuizPageComponent>;
 
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']); 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPageComponent,MatCard, MatCardHeader,MatCardTitle,MatRadioGroup,MatCardSubtitle,MatCardContent  ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ {
        provide: ActivatedRoute,
         useValue: {
          paramMap: of(
           convertToParamMap({
            'questionId': '3',
            'another-dynamic-id': '2',
          })
         ),
        }, },RouterTestingModule, { provide: Router, useValue: routerSpy }, {provide: DataService, useValue: {}} ],
    })
    .compileComponents();
   
    fixture = TestBed.createComponent(QuizPageComponent);
   
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
  
    expect(component).toBeTruthy();
  });
  it('should get the current question ID', () => {
    component.questionID = 123;
    expect(component.getQuestionID()).toEqual(123);
  });
  it('should set the current question ID', () => {
    component.setQuestionID(456);
    expect(component.questionID).toEqual(456);
  });
  it('should check if there is another question', () => {
    component.questionID = 1;
    component.allQuestions = testData;
    expect(component.isThereAnotherQuestion()).toBeTrue();

    component.questionID = 11;
    expect(component.isThereAnotherQuestion()).toBeFalse();
  });

  it('should check if it is the final question', () => {
    component.currentQuestion = 2;
    component.totalQuestions = 2;
    expect(component.isFinalQuestion()).toBeTrue();

    component.currentQuestion = 3;
    expect(component.isFinalQuestion()).toBeFalse();
  });

  it('should get the current question', () => {
    const question1: PersonalityQuestion = {
      questionId: 1, questionText: 'What is your favorite color?',
      options: [],
      selectedOption: undefined
    };
    const question2: PersonalityQuestion = {
      questionId: 2,
      questionText: 'How awesome is this?',
      options: [],
      selectedOption: undefined
    };
    component.allQuestions = [question1, question2];
    component.questionID = 2;
    expect(component.getQuestion).toEqual(question2);
  });

 

});

