import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
adminId: any
admin: any =[];
 password= '';
  confirmPassword= '';
adminForm : FormGroup;
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.adminForm = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['']
    })
   }
 
  ngOnInit(): void { 
    this.adminId = this.activatedroute.snapshot.params['id'];
    this.fetchAdmin(this.adminId);
  }

  fetchAdmin(adminId: Number){
    this.http.get("http://localhost:8080/AdminController/getAdminById/"+adminId)
    .subscribe(resp =>{
      this.admin=resp;
      console.log(this.admin)
      this.adminForm.patchValue({ id: this.adminId})
      this.adminForm.patchValue({ name: this.admin[0].name });
      this.adminForm.patchValue({ username: this.admin[0].username });
      this.adminForm.patchValue({ password: this.admin[0].password });
    },
    error =>{
      console.log(error);
    })

  }

  saveAdmin(){
    let adminData = this.adminForm.value;
    console.log(adminData);
    this.http.put('http://localhost:8080/AdminController/updateAdmin', adminData)
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