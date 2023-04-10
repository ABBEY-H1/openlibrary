import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentForm: FormGroup;
  student :any=[];
  studentId: any
  
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) { 
      this.studentForm = this.formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        dept:['', Validators.required],
        mobile:[''],
        rollNo:['',Validators.required],
        birthDay:['',Validators.required]
      })
    }
  
    ngOnInit(): void {
      this.studentId = this.activatedroute.snapshot.params['id'];
      this.fetchStudent(this.studentId);
    }

    fetchStudent(studentId: Number){
      this.http.get("http://localhost:8080/student/getStudentById/"+studentId)
      .subscribe(resp =>{
        this.student=resp;
        console.log(this.student)
        this.studentForm.patchValue({ id: this.student.id})
        this.studentForm.patchValue({ name: this.student.name });
        this.studentForm.patchValue({ mobile: this.student.mobile });
        this.studentForm.patchValue({ rollNo: this.student.rollNo });
        this.studentForm.patchValue({ dept: this.student.dept });
        this.studentForm.patchValue({ birthDay: this.student.birthDay });
      },
      error =>{
        console.log(error);
      })
  
    }
  
    saveStudent(){
      let studentData = this.studentForm.value;
      this.http.put('http://localhost:8080/student/updateStudent', studentData)
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