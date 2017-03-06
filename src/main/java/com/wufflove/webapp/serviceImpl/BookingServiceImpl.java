package com.wufflove.webapp.serviceImpl;

import com.wufflove.webapp.models.Booking;
import com.wufflove.webapp.repositories.BookingRepository;
import com.wufflove.webapp.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService{

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }

    @Override
    public void add(Booking booking) {
        bookingRepository.save(booking);
    }

    @Override
    public void edit(long id, Booking booking) {
        booking.setId(id);
        bookingRepository.save(booking);
    }

    @Override
    public void delete(long id) {
        bookingRepository.delete(id);
    }
}
