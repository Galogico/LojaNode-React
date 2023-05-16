import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Sou a rota principal</h1>
  },
  {
    path: '/cadastro',
    element: <h1>Sou a rota de cadastro</h1>
  },

])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App