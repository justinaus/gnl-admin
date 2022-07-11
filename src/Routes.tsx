import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { RoutePath } from './helpers/routePath';
import Restaurant from './pages/restaurants/Restaurant';
import Restaurants from './pages/restaurants/Restaurants';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutePath.Restaurants} element={<Restaurants />} />
      <Route path={`${RoutePath.Restaurants}/:id`} element={<Restaurant />} />
      <Route path="*" element={<Navigate to={RoutePath.Restaurants} />} />
    </Routes>
  );
}
