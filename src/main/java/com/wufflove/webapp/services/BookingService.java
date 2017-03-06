package com.wufflove.webapp.services;

import com.wufflove.webapp.models.Booking;

import java.util.List;

public interface BookingService {
    List<Booking> findAll();
    void add(Booking booking);
    void edit(long id, Booking booking);
    void delete(long id);
}
