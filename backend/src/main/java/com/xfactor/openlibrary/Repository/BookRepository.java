package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Book;

public interface BookRepository extends JpaRepository< Book, Long > {
    public Book findByTitle(String title);
}
