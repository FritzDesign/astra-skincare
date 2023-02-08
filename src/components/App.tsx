import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Cart from './Cart';
import Footer from './Footer';
import Navigation from './Navigation';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Announcement from './Announcement';
import Ankle from './Ankle';

const App: React.FC = () => {
  return (
    <Box className='App'>
      <Announcement />
      <Navigation />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:handle' element={<SingleProduct />} />
      </Routes>
      <Ankle />
      <Footer />
    </Box>
  );
};

export default App;
