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

import com.xfactor.openlibrary.Repository.PublisherRepository;
import com.xfactor.openlibrary.domain.Publisher;

@RestController
@RequestMapping("PublisherController")
public class PublisherController {

   // ArrayList <Publisher> lpublish= new ArrayList<>();
    public PublisherController(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    PublisherRepository publisherRepository;

    @PostMapping("/savePublisher")
    public Publisher savePublisher(@RequestBody Publisher publisher)
    {
        publisherRepository.save(publisher);
        return publisher;
    }
    
    @GetMapping("/getAllPublishers")
    public List<Publisher> getAllPublishers() {
       return publisherRepository.findAll();

        
    }

    @GetMapping("/getPublisherById/{id}")
    public Publisher getPublisherbyId(@PathVariable Long id) {
        Optional<Publisher> optionalpublisher = publisherRepository.findById(id);
        if(optionalpublisher.isPresent())
        return optionalpublisher.get();
        else
        return null;
    }

    @PutMapping("/updatePublisher")
    public Publisher updatePublisher(@RequestBody Publisher publisher)
    {
        if(publisher.getId()!=null)
        {
            Publisher publisher2 = publisherRepository.save(publisher);
            return publisher2;
        }
        else 
        return null;
    }

    @DeleteMapping("/deletePublisher/{id}")
    public void deletePublisher(@PathVariable Long id)
    {
        publisherRepository.deleteById(id);
    }

    @GetMapping("/getPublisherByName/{name}")
    public Publisher getPublisherByName(@PathVariable String name)
    {
        return publisherRepository.findByName(name);
    }
}
