package com.wufflove.webapp.serviceImpl;

import com.wufflove.webapp.models.Owner;
import com.wufflove.webapp.repositories.OwnerRepository;
import com.wufflove.webapp.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerServiceImpl implements OwnerService{

    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public List<Owner> findAll() {
        return ownerRepository.findAll();
    }

    @Override
    public void add(Owner owner) {
        ownerRepository.save(owner);
    }

    @Override
    public void edit(long id, Owner owner) {
        owner.setId(id);
        ownerRepository.save(owner);
    }

    @Override
    public void delete(long id) {
        ownerRepository.delete(id);
    }
}
