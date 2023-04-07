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

import com.xfactor.openlibrary.Repository.AuthorRepository;
import com.xfactor.openlibrary.domain.Author;

//get all authors
//get author by id
//name, age
@RestController
@RequestMapping("AuthorController")
public class AuthorController {
    public AuthorController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    AuthorRepository authorRepository;

    @PostMapping("/saveAuthor")
    public Author saveAuthor(@RequestBody Author author)
    {
        authorRepository.save(author);
        return author;
    }

    @GetMapping("/getAllAuthors")
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @GetMapping("/getAuthorById/{id}")
    public Author getAuthorbyId(@PathVariable Long id) {
        Optional<Author> optionalAuthor = authorRepository.findById(id);
        if(optionalAuthor.isPresent())
        return optionalAuthor.get();
        else
        return null;
    }

    @DeleteMapping("/deleteAuthor/{id}")
    public void deleteAuthor(@PathVariable Long id)
    {
        authorRepository.deleteById(id);
    }

    @PutMapping("/updateAuthor")
    public Author updateAuthor(@RequestBody Author author)
    {
        if(author.getId()!=null)
        {
            return authorRepository.save(author);
        }
        else
        return null;
    }

    @GetMapping("/getAuthorByName/{name}")
    public List<Author> geAuthorByName(@PathVariable String name)
    {
        return authorRepository.findByName(name);
    }
    }
    
