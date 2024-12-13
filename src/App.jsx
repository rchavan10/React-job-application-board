import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'; // instead of components, we will have pages in our App
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    // create parent route '/'
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;
