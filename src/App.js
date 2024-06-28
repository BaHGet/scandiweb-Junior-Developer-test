import  { Route, Routes } from 'react-router-dom';
import Main from './Components/ProductsPage/main';
import './app.css';
import AddProduct from './Components/AddProductPage/addProductPage';

function App() {
  return (
    <Routes>
      <Route 
        path="scandiweb-junior-developer-test/"
        element={<Main />} 
      />
      <Route 
        path="scandiweb-junior-developer-test/addproduct"
        element={<AddProduct />} 
      />
    </Routes>
  );
}

export default App;
