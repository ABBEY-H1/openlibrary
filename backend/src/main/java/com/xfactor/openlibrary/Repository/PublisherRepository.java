package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Publisher;
import java.util.List;

public interface PublisherRepository extends JpaRepository<Publisher, Long > {
    public List<Publisher> findByName(String name);
}
