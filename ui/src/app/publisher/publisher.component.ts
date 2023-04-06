import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  publishers : any = [];
  constructor(private http: HttpClient, private router: Router) { }

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
  }

