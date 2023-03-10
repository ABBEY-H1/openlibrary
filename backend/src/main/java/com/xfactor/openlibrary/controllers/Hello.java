package com.xfactor.openlibrary.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController// Instructing the compiler that the following class is a Rest API class
@RequestMapping("hellocontroller")
public class Hello {

    @GetMapping("/hello/{dept}") //Instructing that a "get" method is called
    public String hello(@RequestParam String name, @PathVariable String dept, double sgpa) {
        String grade="";
        double Percentage = (sgpa-0.75)*10;
        int percint = (int)Percentage;
        if(percint>=90)
        grade="O";
        else if(percint<90 && percint >=80)
        grade="E";
        else if(percint<80 && percint >=70)
        grade="A";
        else if(percint<70 && percint >=60)
        grade="B";
        else if(percint<60 && percint >=50)
        grade="C";
        else if(percint<50 && percint >=40)
        grade="D";
        else
        grade = "Fail";
        String perc=Double.toString(Percentage);
        return "Hello "+ name + "\n" + "Your Dept: "+ dept+"\n"+"Your entered sgpa"+(Double.toString(sgpa)+"\n"+"Your Calculated %= "+perc+" Your Grade= "+grade) ;
    }

    
    @GetMapping("/jsonfunc/{dept}") //Instructing that a "get" method is called
    public HashMap<Object, Object> jsonfunc(@RequestParam String name, @PathVariable String dept, Double sgpa)
    {
        HashMap<Object, Object> student= new HashMap<>();
        student.put("name", name);
        student.put("dept", dept);
        student.put("sgpa", sgpa);
        String grade="";
        double Percentage = (sgpa-0.75)*10;
        int percint = (int)Percentage;
        if(percint>=90)
        grade="O";
        else if(percint<90 && percint >=80)
        grade="E";
        else if(percint<80 && percint >=70)
        grade="A";
        else if(percint<70 && percint >=60)
        grade="B";
        else if(percint<60 && percint >=50)
        grade="C";
        else if(percint<50 && percint >=40)
        grade="D";
        else
        grade = "Fail";
        student.put("Percentage", Percentage);
        student.put("Grade", grade);
        return student ;

    }

}
