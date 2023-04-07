package com.xfactor.openlibrary.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Book;


public interface BookRepository extends JpaRepository< Book, Long > {
    public List<Book> findByTitle(String title);
}
