import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors :any =[];
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAll();
  }
addAuthor(){
  this.router.navigateByUrl('/add-author')
}

fetchAll(){
  this.http.get("http://localhost:8080/AuthorController/getAllAuthors")
  .subscribe(response => {
    console.log(response);
    this.authors = response;
  },
  error =>{
    console.error(error);
  })
}

deleteAuthor(id: Number){
  this.http.delete("http://localhost:8080/AuthorController/deleteAuthor/"+id)
  .subscribe(resp => {
    console.log(resp);
    this.fetchAll();
  },
  error => {
    console.log(error);
  })

}

}
