package com.wufflove.webapp.services;

import com.wufflove.webapp.models.Owner;

import java.util.List;

public interface OwnerService {
    List<Owner> findAll();
    void add(Owner owner);
    void edit(long id, Owner owner);
    void delete(long id);
}
