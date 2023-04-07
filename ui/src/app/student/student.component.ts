import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
searchForm: FormGroup;

addStudents(){
this.router.navigateByUrl('/add-student');
}

students: any=[];
constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  this.searchForm =this.formBuilder.group({
    name: ['',Validators.required]
  })

 }

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

  searchByName(){
    const name = this.searchForm.value.name;
    this.http.get("http://localhost:8080/student/getStudentByName/"+name)
    .subscribe( resp =>{
      this.students = resp;
      console.log(this.students);
    }, 
    error =>{
      console.log(error);
    })
  }

}
