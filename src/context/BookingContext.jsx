import React, { createContext, useContext, useState, useEffect } from 'react';
import { salonData } from '../data/salonData';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  // 1. Cart / Selected Services State (Persisted in localStorage)
  const [selectedServices, setSelectedServices] = useState(() => {
    try {
      const saved = localStorage.getItem('miracle_selected_services');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // 2. All Bookings State (Persisted in localStorage with fallback to initialBookings)
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('miracle_bookings');
      return saved ? JSON.parse(saved) : salonData.initialBookings;
    } catch (e) {
      return salonData.initialBookings;
    }
  });

  // 3. Owner Authentication State (Persisted in localStorage)
  const [ownerUser, setOwnerUser] = useState(() => {
    try {
      const saved = localStorage.getItem('miracle_owner_session');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Sync selectedServices with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('miracle_selected_services', JSON.stringify(selectedServices));
    } catch (e) {
      console.error('Failed to sync selected services:', e);
    }
  }, [selectedServices]);

  // Sync bookings with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('miracle_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to sync bookings:', e);
    }
  }, [bookings]);

  // Cart operations
  const addService = (service) => {
    setSelectedServices(prev => {
      if (prev.some(s => s.id === service.id)) return prev;
      return [...prev, service];
    });
  };

  const removeService = (serviceId) => {
    setSelectedServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const toggleService = (service) => {
    setSelectedServices(prev => {
      const exists = prev.some(s => s.id === service.id);
      if (exists) {
        return prev.filter(s => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const clearSelectedServices = () => {
    setSelectedServices([]);
  };

  const isServiceSelected = (serviceId) => {
    return selectedServices.some(s => s.id === serviceId);
  };

  // Booking operations
  const createBooking = (bookingData) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newBooking = {
      id: `MB-${randomSuffix}`,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
      ...bookingData
    };

    setBookings(prev => [newBooking, ...prev]);
    // Clear cart once booked
    setSelectedServices([]);
    return newBooking;
  };

  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings(prev => prev.map(b => {
      if (b.id === bookingId) {
        return { ...b, status: newStatus, updatedAt: new Date().toISOString() };
      }
      return b;
    }));
  };

  const resetBookingsToDemo = () => {
    setBookings(salonData.initialBookings);
    localStorage.setItem('miracle_bookings', JSON.stringify(salonData.initialBookings));
  };

  // Owner Auth operations
  const loginOwner = (username, password) => {
    if (
      username.trim().toLowerCase() === salonData.ownerAuth.username.toLowerCase() &&
      password.trim() === salonData.ownerAuth.password
    ) {
      const session = {
        username: salonData.ownerAuth.username,
        role: salonData.ownerAuth.salonRole,
        loggedInAt: new Date().toISOString()
      };
      setOwnerUser(session);
      localStorage.setItem('miracle_owner_session', JSON.stringify(session));
      return { success: true };
    }
    return { success: false, message: "Invalid credentials. Use demo login admin / miracle2024" };
  };

  const logoutOwner = () => {
    setOwnerUser(null);
    localStorage.removeItem('miracle_owner_session');
  };

  return (
    <BookingContext.Provider value={{
      selectedServices,
      addService,
      removeService,
      toggleService,
      clearSelectedServices,
      isServiceSelected,
      bookings,
      createBooking,
      updateBookingStatus,
      resetBookingsToDemo,
      ownerUser,
      loginOwner,
      logoutOwner
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
