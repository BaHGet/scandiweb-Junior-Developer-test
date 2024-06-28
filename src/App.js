import  { Route, Routes } from 'react-router-dom';
import Main from './Components/ProductsPage/main';
import './app.css';

function App() {
  return (
    <Routes>
      <Route 
        path="scandiweb-junior-developer-test/"
        element={<Main />} 
      />
      <Route 
        path="scandiweb-junior-developer-test/addproduct"
        element={<div>Add</div>} 
      />
    </Routes>
  );
}

export default App;
