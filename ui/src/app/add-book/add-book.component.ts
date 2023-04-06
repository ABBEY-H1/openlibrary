import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private http: HttpClient, private router: Router) {
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['',Validators.required],
      copies:[1,Validators.max(200)],
      publisher :['',Validators.required],
      genre : [''],
      subGenre:[''],
      publicationDate : ['']
    })
   }

  ngOnInit(): void {
  }

  saveBook(){
    // Make Post call to request url 
    
    let bookData = this.bookForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/BooksController/saveBook',bookData)
    .subscribe(response => {
      console.log('Book saved to DB', response)
      this.router.navigateByUrl('/books')
    }, error =>{
      console.error("Error in book save", error)
    }
    );

  }

}
