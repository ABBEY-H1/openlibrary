import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm: FormGroup;
  book :any=[];
  bookId: any

  constructor(private formBuilder: FormBuilder,  private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.bookForm = this.formBuilder.group({
      id: ['', Validators.required],
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
    this.bookId = this.activatedroute.snapshot.params['id'];
    this.fetchBook(this.bookId);
  }

  fetchBook(authorId: Number){
    this.http.get("http://localhost:8080/BooksController/getBookById/"+authorId)
    .subscribe(resp =>{
      this.book=resp;
      console.log(this.book)
      this.bookForm.patchValue({ id: this.book.id})
      this.bookForm.patchValue({ title: this.book.title});
      this.bookForm.patchValue({ author: this.book.author });
      this.bookForm.patchValue({ isbn: this.book.isbn });
      this.bookForm.patchValue({ copies: this.book.copies });
      this.bookForm.patchValue({ publisher: this.book.publisher});
      this.bookForm.patchValue({ genre: this.book.genre});
      this.bookForm.patchValue({ subGenre: this.book.subGenre});
      this.bookForm.patchValue({ publicationDate: this.book.publicationDate });
    },
    error =>{
      console.log(error);
    })

  }

  saveBook(){
    // Make Post call to request url 
    
    let bookData = this.bookForm.value;
    // Handle date to string
    this.http.put('http://localhost:8080/BooksController/updateBook',bookData)
    .subscribe(response => {
      console.log('Book saved to DB', response)
      this.router.navigateByUrl('/books')
    }, error =>{
      console.error("Error in book save", error)
    }
    );

  }

}