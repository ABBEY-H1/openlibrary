package com.xfactor.openlibrary.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_Book")
public class Book {
    
    @Id //declares primary key for the table
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column //declares that this varible points to a column in thr database
    private String title;
    @Column
    private String author;
    @Column
    private String isbn;
    @Column
    private LocalDate publicationDate;
    @Column
    private String publisher;
    @Column
    private int copies;
    @Column
    private String category;
    @Column
    private String genre;
    @Column
    private String subGenre;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
    public LocalDate getPublicationDate() {
        return publicationDate;
    }
    public void setPublicationDate(LocalDate publicationDate) {
        this.publicationDate = publicationDate;
    }
    public String getPublisher() {
        return publisher;
    }
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }
    public int getCopies() {
        return copies;
    }
    public void setCopies(int copies) {
        this.copies = copies;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getGenre() {
        return genre;
    }
    public void setGenre(String genre) {
        this.genre = genre;
    }
    public String getSubGenre() {
        return subGenre;
    }
    public void setSubGenre(String subGenre) {
        this.subGenre = subGenre;
    }
}
