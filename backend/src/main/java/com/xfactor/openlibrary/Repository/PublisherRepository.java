package com.xfactor.openlibrary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xfactor.openlibrary.domain.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Long > {
    public Publisher findByName(String name);
}
