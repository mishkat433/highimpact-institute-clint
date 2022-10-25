import React from 'react';
import { RouterProvider } from 'react-router-dom';
// import Contex from './Contex/Contex';
import { routes } from './Route/Route';

const App = () => {
  return (
    // <Contex>
    <RouterProvider router={routes}></RouterProvider>

  );
};

export default App;
