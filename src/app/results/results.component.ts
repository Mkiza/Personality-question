import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalityQuestion } from '../model/personality-question';
import { PersonalityTypes } from '../model/personality-types.enum';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  allPersonalities: PersonalityTypes[] = [];
  mostOccurringPersonality: PersonalityTypes | null = null;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      this.allPersonalities = data;
    });
    this.findMostOccurringPersonality(this.allPersonalities);
  }

  findMostOccurringPersonality(allPersonalities: PersonalityTypes[]): PersonalityTypes | null {
    // Initialize a Map to keep track of the count of each personality type
    const personalityCounts = new Map<PersonalityTypes, number>();
    if(allPersonalities){
      for (const personality of allPersonalities) {
        // Increment the count for the current personality type
        const count = personalityCounts.get(personality) || 0;
        personalityCounts.set(personality, count + 1);
      }
    
      // Find the personality type with the highest count
     
      let highestCount = 0;
      for (const [personality, count] of personalityCounts) {
        if (count > highestCount) {
          this.mostOccurringPersonality = personality;
          highestCount = count;
        }
      }
        return this.mostOccurringPersonality;
    }
   return null;
  }

  startQuiz() {
    this.router.navigateByUrl('/question/1');
  }

}
