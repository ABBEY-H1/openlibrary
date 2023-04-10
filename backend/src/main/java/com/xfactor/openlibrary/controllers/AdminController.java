package com.xfactor.openlibrary.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Repository.AdminRepository;
import com.xfactor.openlibrary.domain.Admin;

@RestController
@RequestMapping("AdminController")
public class AdminController {
    AdminRepository adminRepository;
    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/saveAdmin")
    public Admin saveAdmin(@RequestBody Admin admin)
    {
        adminRepository.save(admin);
        return admin;
    }
    @GetMapping("/getAllAdmins")
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @GetMapping("/getAdminById/{id}")
    public List<Admin> getAdminId(@PathVariable Long id) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        List<Admin> adminList = new ArrayList<Admin>();
        if(optionalAdmin.isPresent()){
            adminList = optionalAdmin
    .stream()
    .collect(Collectors.toList());
    return adminList;
        }
        else
        return adminList;
    }

    @PutMapping("/updateAdmin")
    public Admin updateAdmin(@RequestBody Admin admin)
    {
        if(admin.getId()!=null)
        return adminRepository.save(admin);
        else
        return null;
    }

    @DeleteMapping("/deleteAdmin/{id}")
    public void deleteAdmin(@PathVariable Long id)
    {
        adminRepository.deleteById(id);
    }

    @GetMapping("/getAdminByUserIdAndPassword/{userId}/{password}")
    public Admin getAdminByUserIdAndPassword(@PathVariable String userId,String password)
    {
        return adminRepository.findByUsernameAndPassword(userId, password);
    }

    @GetMapping("/getAdminByName/{name}")
    public List<Admin> getAdminByName(@PathVariable String name)
    {
        return adminRepository.findByName(name);
    }
}
