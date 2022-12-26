import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultsComponent } from './results/results.component';

const routes: Route[] = [
  { path: 'intro', component: IntroComponent, pathMatch: 'full' },
  { path: 'question/:questionId', component: QuizPageComponent, pathMatch: 'full' },
  { path: 'results', component: ResultsComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'intro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
