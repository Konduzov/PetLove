package com.wufflove.webapp.controllers;

import com.wufflove.webapp.models.Sitter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.wufflove.webapp.services.SitterService;

import java.util.List;

@RestController
public class SitterController {

    @Autowired
    private SitterService sitterService;

    @GetMapping("/sitters")
    public List<Sitter> home() {
        List<Sitter> allSitters = sitterService.findAll();
        return allSitters;
    }

    @PostMapping("/sitters")
    public void register(@RequestBody Sitter sitter) {
        sitterService.add(sitter);
    }

    @PutMapping("/sitters/{id}")
    public void edit(@PathVariable("id") long id, @RequestBody Sitter sitter) {
        sitterService.edit(id, sitter);
    }

    @DeleteMapping("/sitters/{id}")
    public void delete(@PathVariable("id") long id) {
        sitterService.delete(id);
    }

}
