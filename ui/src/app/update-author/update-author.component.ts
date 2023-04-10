import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  author :any=[];
  authorId: any
  authorForm : FormGroup;
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.authorForm = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      birthDate: ['',Validators.required],
      nationality: ['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.authorId = this.activatedroute.snapshot.params['id'];
    this.fetchAuthor(this.authorId);
  }

  fetchAuthor(authorId: Number){
    this.http.get("http://localhost:8080/AuthorController/getAuthorById/"+authorId)
    .subscribe(resp =>{
      this.author=resp;
      console.log(this.author)
      this.authorForm.patchValue({ id: this.author[0].id})
      this.authorForm.patchValue({ name: this.author[0].name });
      this.authorForm.patchValue({ birthDate: this.author[0].birthDate });
      this.authorForm.patchValue({ nationality: this.author[0].nationality });
    },
    error =>{
      console.log(error);
    })

  }

  saveAuthor(){
    let authorData = this.authorForm.value;
    this.http.put("http://localhost:8080/AuthorController/updateAuthor", authorData)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/authors");
    },
    error =>{
      console.log(error);
    })
  }
} 
