import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 addAdmin(){
  this.route.navigateByUrl('/add-admin')
 }
 admins : any = [];

  constructor(private route: Router, private http: HttpClient) {
   }

  ngOnInit(): void {
    this.fetchAllAdmins();
  }

  fetchAllAdmins(){
    this.http.get("http://localhost:8080/AdminController/getAllAdmins")
    .subscribe(response => {
      this.admins=response;
      console.log("OK", response);
    },
    error=>{
      console.error(error);      
    });

  }

  deleteAdmin(id: Number){
    this.http.delete("http://localhost:8080/AdminController/deleteAdmin/"+id)
    .subscribe(resp => {
      console.log(resp);
      this.fetchAllAdmins();
    },
    error => {
      console.log(error);
    })

  }
}
