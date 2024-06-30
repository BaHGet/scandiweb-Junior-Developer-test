import  { Route, Routes } from 'react-router-dom';
import Main from './Components/ProductsPage/main';
import './app.css';
import AddProduct from './Components/AddProductPage/addProductPage';
import { useState } from 'react';

const App = ()=> {
  const [page, setPage] = useState('home')
  return (
    <Routes>
      <Route 
        path="/"
        element={
        page === 'home' ? <Main page={page} setPage={setPage}/> : <AddProduct setPage={setPage}/> 
      } 
      />
    </Routes>
  );
}

export default App;
