import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import { AuthorComponent } from './author/author.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';
import { UpdatePublisherComponent } from './update-publisher/update-publisher.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    StudentComponent,
    AuthorComponent,
    LoanComponent,
    PublisherComponent,
    AdminComponent,
    SidenavComponent,
    AddBookComponent,
    AddStudentComponent,
    AddAdminComponent,
    AddAuthorComponent,
    AddPublisherComponent,
    AddLoanComponent,
    UpdateBookComponent,
    UpdateAdminComponent,
    UpdateAuthorComponent,
    UpdateLoanComponent,
    UpdatePublisherComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
