package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Student;
import java.util.List;
public interface StudentRepository extends JpaRepository<Student, Long > {

    public List<Student> findByName(String name);
    
}
