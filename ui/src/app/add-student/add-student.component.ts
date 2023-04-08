import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      dept:['', Validators.required],
      mobile:[''],
      email:['',Validators.email],
      rollNo:['',Validators.required],
      birthDay:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveStudent(){
    let studentData = this.studentForm.value;
    //make post call
    this.http.post('http://localhost:8080/student/saveStudent', studentData)
    .subscribe(response => {
      console.log("Data posted", response);
      this.router.navigateByUrl("/student");
    },
    error => {
      console.log(error);
    }
    );
  }


}
