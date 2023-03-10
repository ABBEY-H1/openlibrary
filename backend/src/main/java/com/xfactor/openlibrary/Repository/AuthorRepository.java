package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Author;

public interface AuthorRepository extends JpaRepository<Author, Long > {
    public Author findByName(String name);
    
}