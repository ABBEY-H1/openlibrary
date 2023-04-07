import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit { 
  searchForm: FormGroup;

  authors :any =[];
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.searchForm =this.formBuilder.group({
      name: ['',Validators.required]
    })

   }

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

searchByName(){
  const name = this.searchForm.value.name;
  this.http.get("http://localhost:8080/AuthorController/getAuthorByName/"+name)
  .subscribe( resp =>{
    this.authors = resp;
    console.log(this.authors);
  }, 
  error =>{
    console.log(error);
  })
}

}
