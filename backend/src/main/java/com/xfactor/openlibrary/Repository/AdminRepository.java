package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long > {
    public Admin findByUsernameAndPassword(String username, String password);
    public Admin findByName(String name);
    
}
