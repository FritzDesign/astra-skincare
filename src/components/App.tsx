import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Cart from './Cart';
import Footer from './Footer';
import Navigation from './Navigation';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import SkincareProducts from './pages/SkincareProducts';
import Announcement from './Announcement';
import Ankle from './Ankle';
import BeautyTools from './pages/BeautyTools';
import SkinConcerns from './pages/SkinConcerns';

const App: React.FC = () => {
  return (
    <Box className='App'>
      <Announcement />
      <Navigation />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skincare-products' element={<SkincareProducts />} />
        <Route path='/products/:handle' element={<SingleProduct />} />
        <Route path='/beauty-tools' element={<BeautyTools />} />
        <Route path='/skin-concerns' element={<SkinConcerns />} />
      </Routes>
      <Ankle />
      <Footer />
    </Box>
  );
};

export default App;
