package com.wufflove.webapp.controllers;

import com.wufflove.webapp.models.Booking;
import com.wufflove.webapp.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/bookings")
    public List<Booking> home() {
        List<Booking> allBookings = bookingService.findAll();
        return allBookings;
    }

    @PostMapping("/bookings")
    public void register(@RequestBody Booking booking) {
        bookingService.add(booking);
    }

    @PutMapping("/bookings/{id}")
    public void edit(@PathVariable("id") long id, @RequestBody Booking booking) {
        bookingService.edit(id, booking);
    }

    @DeleteMapping("/bookings/{id}")
    public void delete(@PathVariable("id") long id) {
        bookingService.delete(id);
    }

}
