package com.xfactor.openlibrary.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.xfactor.openlibrary.Repository.BookRepository;
import com.xfactor.openlibrary.domain.Book;

@RestController
@RequestMapping("BooksController")
public class BooksController {
    
    public BooksController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    private BookRepository bookRepository;
    ArrayList<Book> lbooks= new ArrayList<>();


    @PostMapping("/saveBook")
    public Book saveBook(@RequestBody Book book)
    {
        bookRepository.save(book);
        return book;
    }

    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks()
    {
        return bookRepository.findAll();
    }

    @GetMapping("/getBookById/{id}")
    public Book getBookById(@PathVariable Long id)
    {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent())
        return optionalBook.get();
        else
        return null;
    }

    @PutMapping("/updateBook")
    public Book updateBook(@RequestBody Book book)
    {
        if(book.getId()!=null)
        {
            Book book2= bookRepository.save(book);
            return book2;
        }
        else
        return null;
    }

    @DeleteMapping("/deleteBook/{id}")
    public void deleteBook(@PathVariable Long id)
    {
        bookRepository.deleteById(id);
    }

    @GetMapping("/getBookByTitle/{name}")
    public List<Book> getBookByName(@PathVariable String name)
    {
       return bookRepository.findByTitle(name);
    }
}
