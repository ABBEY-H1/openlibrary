package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Author;
import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long > {
    public List<Author> findByName(String name);
    
}