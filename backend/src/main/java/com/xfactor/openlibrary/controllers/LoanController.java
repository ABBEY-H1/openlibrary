package com.xfactor.openlibrary.controllers;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Repository.LoanRepository;
import com.xfactor.openlibrary.domain.Loan;

@RestController
@RequestMapping("LoanController")

public class LoanController {

    public LoanController(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    LoanRepository loanRepository;

    @PostMapping("/saveLoan")
    public Loan saveLoan(@RequestBody Loan loan)
    {
        loanRepository.save(loan);
        return loan;
    }

    @GetMapping("/getAllLoans")
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    @GetMapping("/getLoanById/{id}")
    public Loan getLoanId(@PathVariable Long id) {
        Optional<Loan> optionalLoan = loanRepository.findById(id);
        if(optionalLoan.isPresent())
        return optionalLoan.get();
        else
        return null;
    }

    @PutMapping("/updateLoan")
    public Loan updateLoan(@RequestBody Loan loan)
    {
        if(loan.getId()!=null)
        return loanRepository.save(loan);
        else
        return null;
    }

    @DeleteMapping("/deleteLoan/{id}")
    public void deleteLoan(@PathVariable Long id)
    {
        loanRepository.deleteById(id);
    }

    @GetMapping("/getLoanByStudentId")
    public List<Loan> getLoanByStudentId(@PathVariable Long studentId)
    {
        return loanRepository.findByStudentId(studentId);
    }

    @GetMapping("/getLoanByBookId")
    public List<Loan> getLoanByBookId(@PathVariable Long bookId)
    {
        return loanRepository.findByStudentId(bookId);
    }
}

