package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Loan;
import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long > {
    public List<Loan> findByStudentId(Long studentId);
    public List<Loan> findByBookId(Long BookId);
}