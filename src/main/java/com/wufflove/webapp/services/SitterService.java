package com.wufflove.webapp.services;


import com.wufflove.webapp.models.Sitter;

import java.util.List;

public interface SitterService {

    List<Sitter> findAll();
    void add(Sitter sitter);
    void edit(long id, Sitter sitter);
    void delete(long id);
}
