import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  searchForm: FormGroup

  publishers : any = [];
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.searchForm =this.formBuilder.group({
      name: ['',Validators.required]
    })

   }

  ngOnInit(): void {
    this.fetchAll();
  }
  
  fetchAll(){
    this.http.get("http://localhost:8080/PublisherController/getAllPublishers")
    .subscribe(response => {
      console.log(response);
      this.publishers = response;
    },
    error => {
      console.log(error) ; 
    })
  }
    addPublisher(){
      this.router.navigateByUrl("/add-publisher")
    }

    deletePublisher(id: Number){
      this.http.delete("http://localhost:8080/PublisherController/deletePublisher/"+id)
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
      this.http.get("http://localhost:8080/PublisherController/getPublisherByName/"+name)
      .subscribe( resp =>{
        this.publishers = resp;
        console.log(this.publishers);
      }, 
      error =>{
        console.log(error);
      })
    }

    updatePublisher(publisherId: Number){
      this.router.navigate(['/update-publisher',publisherId])
    }

  }

