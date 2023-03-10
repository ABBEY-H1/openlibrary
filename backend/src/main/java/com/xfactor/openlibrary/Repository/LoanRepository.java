package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Loan;

public interface LoanRepository extends JpaRepository<Loan, Long > {
    public Loan findByStudentId(Long studentId);
    public Loan findByBookId(Long BookId);
}