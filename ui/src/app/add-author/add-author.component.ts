import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.authorForm = this.formBuilder.group({
      name: ['',Validators.required],
      birthDate: ['',Validators.required],
      nationality: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  saveAuthor(){
    let authorData = this.authorForm.value;
    this.http.post("http://localhost:8080/AuthorController/saveAuthor", authorData)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/authors");
    },
    error =>{
      console.log(error);
    })
  }
}
