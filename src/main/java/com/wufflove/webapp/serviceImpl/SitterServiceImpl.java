package com.wufflove.webapp.serviceImpl;

import com.wufflove.webapp.models.Sitter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wufflove.webapp.repositories.SitterRepository;
import com.wufflove.webapp.services.SitterService;

import java.util.List;

@Service
public class SitterServiceImpl implements SitterService{

    @Autowired
    private SitterRepository sitterRepository;

    @Override
    public List<Sitter> findAll() {
        return sitterRepository.findAll();
    }

    @Override
    public void add(Sitter sitter) {
        sitterRepository.save(sitter);
    }

    @Override
    public void edit(long id, Sitter sitter) {
        sitter.setId(id);
        sitterRepository.save(sitter);
    }

    @Override
    public void delete(long id) {
        sitterRepository.delete(id);
    }
}
