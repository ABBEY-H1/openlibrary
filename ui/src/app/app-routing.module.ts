import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{
  path: 'books',
  component : BookComponent
},

{
  path: 'authors',
  component : AuthorComponent
},

{
  path: 'loans',
  component : LoanComponent
},

{
  path: 'publishers',
  component : PublisherComponent
},

{
  path: 'student',
  component : StudentComponent
},

{
  path: 'admin',
  component : AdminComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
