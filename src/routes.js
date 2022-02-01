import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Reservations from "./pages/Reservations";
import EatOut from "./pages/EatOut";
import Login from "./pages/Login/Login.js";
import Registration from "./pages/Registration/Registration.js";
import RestaurantPage from "pages/RestaurantPage";
import CategoryPage from "./pages/Category/CategoryPage.js";
import DeviceReservationsPage from "components/deviceReservationsPage";
import BookReservationsPage from "components/bookReservationsPage/BookReservationsPage";
import RoomsReservationsPage from "components/roomsReservationsPage";

export const PrivateRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/eat-out" element={<EatOut />} />
    <Route path="/restaurant" element={<RestaurantPage />} />
    <Route path="/eat-out/restaurant/:handle" element={<RestaurantPage />} />
    <Route path="/eat-out/category/:category" element={<CategoryPage />} />
    <Route path="/reservations/devices" element={<DeviceReservationsPage />} />
    <Route path="/reservations/books" element={<BookReservationsPage />} />
    <Route path="/reservations/rooms" element={<RoomsReservationsPage />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

export const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="*" element={<Navigate replace to="/login" />} />
  </Routes>
);
