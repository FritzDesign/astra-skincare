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
import SkincareResources from './pages/SkincareResources';
import WhyAstra from './pages/WhyAstra';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import ShippingAndPolicies from './pages/ShippingAndPolicies';
import Disclaimer from './pages/Disclaimer';
import Search from './pages/Search';

const App: React.FC = () => {
  return (
    <Box className='App' maxW='100vw' overflowX='hidden'>
      <Announcement />
      <Navigation />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skincare-products' element={<SkincareProducts />} />
        <Route path='/skincare-products/:handle' element={<SingleProduct />} />
        <Route path='/beauty-tools' element={<BeautyTools />} />
        <Route path='/beauty-tools/:handle' element={<SingleProduct />} />
        <Route path='/skin-concerns' element={<SkinConcerns />} />
        <Route path='/skincare-resources' element={<SkincareResources />} />
        <Route path='/why-astra' element={<WhyAstra />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/policies' element={<ShippingAndPolicies />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/search/*' element={<Search />} />
      </Routes>
      <Ankle />
      <Footer />
    </Box>
  );
};

export default App;
