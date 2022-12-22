import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatRadioGroup } from '@angular/material/radio';
import { Option } from '../model/option';
import { PersonalityQuestion } from '../model/personality-question';
import { PersonalityTypes } from '../model/personality-types.enum';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
 
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionComponent,MatCard, MatCardHeader,MatCardTitle,MatRadioGroup,MatCardSubtitle,MatCardContent,MatCardActions  ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    
   
  
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should build the form', () => {
    component.buildForm();
    expect(component.formGroup).toBeTruthy();
    expect(component.formGroup.controls['answer']).toBeTruthy();
  });
  it('should handle radio change', () => {
    const option: Option = {optionText: 'option', optionValue: '1',selectedOption: false, optionType: PersonalityTypes.INTUITIVE_EXTROVERT}
    const question: PersonalityQuestion = {
      questionId: 1, questionText: 'What is your favorite color?',
      options: [option],
      selectedOption: option
    };
    component.buildForm();
    component.radioChange(option);
    expect(question.selectedOption).toEqual(option);
    expect(option.selectedOption).toBeTrue();
  });
  it('should reset the form', () => {
    component.buildForm();
    component.formGroup.patchValue({ answer: '1' });
    component.onSubmit();
    expect(component.formGroup.value).toEqual({ answer: null });
  });
});
