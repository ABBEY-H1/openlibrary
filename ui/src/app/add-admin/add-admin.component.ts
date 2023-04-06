import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  password= '';
  confirmPassword= '';
adminForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.adminForm = this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['']
    })
   }
 
  ngOnInit(): void { }

  saveAdmin(){
    let adminData = this.adminForm.value;
    this.http.post('http://localhost:8080/AdminController/saveAdmin', adminData)
    .subscribe(response => {
      console.log("Data posted", response);
      this.router.navigateByUrl("/admin");
    },
    error =>{
      console.error(error);
      
    }
    );

  }
}
