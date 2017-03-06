package com.wufflove.webapp.controllers;

import com.wufflove.webapp.models.Owner;
import com.wufflove.webapp.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @GetMapping("/owners")
    public List<Owner> home() {
        List<Owner> allOwners = ownerService.findAll();
        return allOwners;
    }

    @PostMapping("/owners")
    public void register(@RequestBody Owner owner) {
        ownerService.add(owner);
    }

    @PutMapping("/owners/{id}")
    public void edit(@PathVariable("id") long id, @RequestBody Owner owner) {
        ownerService.edit(id, owner);
    }

    @DeleteMapping("/owners/{id}")
    public void delete(@PathVariable("id") long id) {
        ownerService.delete(id);
    }

}
