import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';

const routes: Routes = [{
  path: 'books',
  component : BookComponent
},

{
  path: 'add-student',
  component : AddStudentComponent
},

{
  path: 'add-author',
  component : AddAuthorComponent
},

{
  path: 'add-loan',
  component : AddLoanComponent
},

{
  path: 'add-publisher',
  component : AddPublisherComponent
},

{
  path: 'add-admin',
  component : AddAdminComponent
},

{
  path: 'add-book',
  component : AddBookComponent
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
