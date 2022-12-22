import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatRadioGroup } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { PersonalityTypes } from '../model/personality-types.enum';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent, MatCard, MatCardHeader,MatCardTitle,MatRadioGroup,MatCardSubtitle,MatCardContent ],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should find the highest occurrence in a list', () => {
    component.allPersonalities = [PersonalityTypes.INTUITIVE_EXTROVERT,PersonalityTypes.INTUITIVE_INTROVERT,
      PersonalityTypes.THINKING_EXTROVERT,PersonalityTypes.THINKING_INTROVERT
      ,PersonalityTypes.SENSITIVE_EXTROVERT,PersonalityTypes.SENSITIVE_INTROVERT,
      PersonalityTypes.SENSITIVE_INTROVERT,PersonalityTypes.SENTIMENTAL_EXTROVERT,
      PersonalityTypes.SENTIMENTAL_INTROVERT,PersonalityTypes.THINKING_INTROVERT, PersonalityTypes.SENSITIVE_INTROVERT];
      component.mostOccurringPersonality = null;
      component.findMostOccurringPersonality(component.allPersonalities);

      expect(component.mostOccurringPersonality).toContain(PersonalityTypes.SENSITIVE_INTROVERT);

  });

});
