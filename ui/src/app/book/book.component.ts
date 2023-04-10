import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  searchForm: FormGroup;

  addBooks(){
    console.log("Hello World");
    this.router.navigateByUrl('/add-book')
    
  }

 books: any = [];

  constructor(private router : Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.searchForm =this.formBuilder.group({
      name: ['',Validators.required]
    })

   }

  ngOnInit(): void {
    this.fetchAllBooks()
  }

  fetchAllBooks(){
    this.http.get("http://localhost:8080/BooksController/getAllBooks")
    .subscribe(resp =>{
      this.books = resp;
      console.log('Books retrieved successfully:', this.books)
    }, error => {
      console.error('Error retrieving books:', error);
    });
  }

  deleteBook(id: Number){
    this.http.delete("http://localhost:8080/BooksController/deleteBook/"+id)
    .subscribe(resp => {
      console.log(resp);
      this.fetchAllBooks();
    },
    error => {
      console.log(error);
    }) 

  }

  searchByName(){
    const name = this.searchForm.value.name;
    this.http.get("http://localhost:8080/BooksController/getBookByTitle/"+name)
    .subscribe( resp =>{
      this.books = resp;
      console.log(this.books);
    }, 
    error =>{
      console.log(error);
    })
  }

  updateBook(bookId: Number){
    this.router.navigate(['/update-book',bookId])
  }

}
