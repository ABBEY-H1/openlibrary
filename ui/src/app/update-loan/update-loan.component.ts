import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {
  loan :any=[];
  loanId: any
  loanForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.loanForm = this.formBuilder.group({
      id: ['',Validators.required],
      studentId: ['',Validators.required],
      bookId: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      dueDate: ['', Validators.required],
      returnDate: ['']
    })
   }

  ngOnInit(): void {
    this.loanId = this.activatedroute.snapshot.params['id'];
    this.fetchLoan(this.loanId);
  }

  fetchLoan(loanId: Number){
    this.http.get("http://localhost:8080/LoanController/getLoanById/"+loanId)
    .subscribe(resp =>{
      this.loan=resp;
      console.log(this.loan)
      this.loanForm.patchValue({ id: this.loan.id})
      this.loanForm.patchValue({ studentId: this.loan.studentId });
      this.loanForm.patchValue({ bookId: this.loan.bookId });
      this.loanForm.patchValue({ checkOutDate: this.loan.checkOutDate });
      this.loanForm.patchValue({ dueDate: this.loan.dueDate });
      this.loanForm.patchValue({ returnDate: this.loan.returnDate });
    },
    error =>{
      console.log(error);
    })

  }

  saveLoan(){
    let loanData = this.loanForm.value;
    this.http.put("http://localhost:8080/LoanController/updateLoan", loanData)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/loans");
    },
    error =>{
      console.log(error);
    })
  }
}