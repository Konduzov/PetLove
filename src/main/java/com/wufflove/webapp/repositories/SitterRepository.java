package com.wufflove.webapp.repositories;

import com.wufflove.webapp.models.Sitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SitterRepository extends JpaRepository<Sitter, Long>{
}
