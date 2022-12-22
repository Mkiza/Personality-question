
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Option } from '../model/option';
import { PersonalityQuestion } from '../model/personality-question';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Output() answer = new EventEmitter<Option>();
  @Output() formGroup!: FormGroup;
  @Input() question: PersonalityQuestion | undefined;
  option = '';
  grayBorder = '2px solid #979797';
  

  constructor() {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['question'] && changes['question'].currentValue && !changes['question'].firstChange) {
      if(this.formGroup)
      this.formGroup.patchValue({answer: ''});
    }
  }

  buildForm() {
    this.formGroup = new FormGroup({
      answer: new FormControl(['', Validators.required])
    });
  }

  radioChange(option: Option) {
    if(this.question)
    this.question.selectedOption = option;
    option.selectedOption=true;
    console.log(option);
    this.answer.emit(option);
  }

  onSubmit() {
    this.formGroup?.reset({answer: null});
  }
}
