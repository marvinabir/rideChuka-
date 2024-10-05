export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone?: string; // Optional phone number
    profilePicture?: string; // Optional profile picture
    role: Role;
    bookings: Booking[];
    reviews: Review[];
    payments: Payment[];
    resetCode?: string;  // Add this for reset password feature
    createdAt: Date;
    updatedAt: Date;
  }

  

  export interface Bike {
    id: number;
    model: string;
    status?: BikeStatus;
    image?: string; 
    bookings: Booking[];
    createdAt: Date;
    updatedAt: Date;
  }
  


  export interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    capacity: number;
    image?: string; // Optional event image
    bookings: Booking[];
    reviews: Review[];
    createdAt: Date;
    updatedAt: Date;
  }

  

  export interface Booking {
    id: number;
    userId: number;
    user: User;
    bikeId?: number; // Optional bike booking
    bike?: Bike;
    eventId?: number; // Optional event booking
    event?: Event;
    status: BookingStatus;
    ticket?: Ticket; // Optional ticket
    createdAt: Date;
    updatedAt: Date;
  }

  

  export interface Ticket {
    id: number;
    bookingId: number;
    booking: Booking;
    ticketNumber: string;
    date: string;
    details: string; // Event/bike details
    createdAt: Date;
  }

  

  export interface Payment {
    id: number;
    userId: number;
    user: User;
    amount: number;
    status: PaymentStatus;
    invoiceId?: string; // For IntaSend invoice ID tracking
    apiRef?: string;    // Optional reference for your API tracking
    createdAt: Date;
    updatedAt: Date;
  }
  



  export interface Review {
    id: number;
    userId: number;
    user: User;
    eventId: number;
    event: Event;
    rating: number; // Rating from 1 to 5
    comment?: string; // Optional comment
    createdAt: Date;
    updatedAt: Date;
  }  
  


  export interface Notification {
    id: number;
    userId: number;
    user: User;
    content: string;
    createdAt: Date;
  }

  

  
  export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }
  
  export enum BikeStatus {
    AVAILABLE = 'AVAILABLE',
    BOOKED = 'BOOKED'
  }
  
  export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED'
  }
  
  export enum PaymentStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED'
  }
  