import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent},
  { path: 'whatsnew', component: WhatsNewComponent},
  { path: '', redirectTo: '/news', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
