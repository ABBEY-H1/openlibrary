import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

addStudents(){
this.router.navigateByUrl('/add-student');
}

students: any=[];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllStudents();
  }

  fetchAllStudents(){
    this.http.get("http://localhost:8080/student/getAllStudents")
    .subscribe(resp => {
      console.log("retrived successfully",resp);
      this.students= resp;
    },
    error =>{
      console.error(error);
    })
  }
  deleteStudent(id: Number){
    this.http.delete("http://localhost:8080/student/deleteStudent/"+id)
    .subscribe(resp => {
      console.log(resp);
      this.fetchAllStudents();
    },
    error => {
      console.log(error);
    })

  }

}
