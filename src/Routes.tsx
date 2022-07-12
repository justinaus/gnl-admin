import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { RoutePath } from './helpers/routePath';
import RestaurantCreate from './pages/restaurants/create/RestaurantCreate';
import RestaurantUpdate from './pages/restaurants/Restaurant';
import Restaurants from './pages/restaurants/Restaurants';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutePath.Restaurants} element={<Restaurants />} />
      <Route
        path={RoutePath.RestaurantsCreate}
        element={<RestaurantCreate />}
      />
      <Route path={`${RoutePath.Restaurants}/:id`} element={<RestaurantUpdate />} />
      <Route path="*" element={<Navigate to={RoutePath.Restaurants} />} />
    </Routes>
  );
}
