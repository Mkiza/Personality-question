
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
    this.answer.emit(option);
  }

  onSubmit() {
    this.formGroup?.reset({answer: null});
  }
}
