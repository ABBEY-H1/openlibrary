package com.xfactor.openlibrary.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Repository.StudentRepository;
import com.xfactor.openlibrary.domain.Student;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/student")
public class StudentController {

    StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/saveStudent")
    public Student saveStudent(@RequestBody Student student)
    {
        studentRepository.save(student);
        return student;
    }


    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @GetMapping("/getStudentById/{id}")
    public Student getStudentbyId(@PathVariable Long id) {
        Optional<Student> studentOptional= studentRepository.findById(id);
        if(studentOptional.isPresent())
        return studentOptional.get();
        else
        
        return null;
    }

    @PutMapping("/updateStudent")
        public Student updateStudent(@RequestBody Student student)
        {
            if(student.getId() != null)
            {
            Student student2 = studentRepository.save(student);
            return student2;
            }
            return null;
        }

    @DeleteMapping("/deleteStudent/{id}")
        public void deleteStudent(@PathVariable Long id)
        {
            studentRepository.deleteById(id);
        }

    @GetMapping("/getStudentByName/{name}")
    public List<Student> getStudentByName(@PathVariable String name)
    {
        return studentRepository.findByName(name);
    }
    }
