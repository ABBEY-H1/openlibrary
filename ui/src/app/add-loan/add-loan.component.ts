import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  loanForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loanForm = this.formBuilder.group({
      studentId: ['',Validators.required],
      bookId: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      dueDate: ['', Validators.required],
      returnDate: ['']
    })
   }

  ngOnInit(): void {
  }

  saveLoan(){
    let loanData = this.loanForm.value;
    this.http.post("http://localhost:8080/LoanController/saveLoan", loanData)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/loans");
    },
    error =>{
      console.log(error);
    })
  }
}