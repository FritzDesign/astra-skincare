import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Cart from './Cart';
import Footer from './Footer';
import Navigation from './Navigation';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import SkincareProducts from './pages/SkincareProducts';
import Announcement from './Announcement';
import Ankle from './Ankle';
import BeautyTools from './pages/BeautyTools';
import SkincareResources from './pages/SkincareResources';
import WhyAstra from './pages/WhyAstra';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import ShippingAndPolicies from './pages/ShippingAndPolicies';
import Disclaimer from './pages/Disclaimer';
import Search from './pages/Search';
import BlogPost from './pages/BlogPost';
import LoginRegister from './pages/LoginRegister';
import Blogs from './pages/Blogs';
import EULA_Modal from './EULA_Modal';

const App: React.FC = () => {
  const [showAnkle, setShowAnkle] = useState(true);
  const [showEULA, setShowEULA] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.location.href.includes('resources/') &&
      !window.location.href.includes('blogs')
    ) {
      setShowAnkle(false);
    } else {
      setShowAnkle(true);
    }

  }, [navigate]);

  useEffect(() => {
    const EULAstatus = localStorage.getItem('EULA');
    
    if (EULAstatus === null) {     
      setShowEULA(true);
    }
  }, [])

  return (
    <Box className='App' maxW='100vw' overflowX='hidden'>
      <Announcement />
      <Navigation />
      {showEULA && <EULA_Modal />}
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/skincare-products' element={<SkincareProducts />} />
        <Route path='/skincare-products/:handle' element={<SingleProduct />} />
        <Route path='/beauty-tools' element={<BeautyTools />} />
        <Route path='/beauty-tools/:handle' element={<SingleProduct />} />
        <Route path='/skincare-resources' element={<SkincareResources />} />
        <Route path='/skincare-resources/blogs' element={<Blogs />} />
        <Route
          path='/skincare-resources/:postId'
          element={<BlogPost setShowAnkle={setShowAnkle} />}
        />
        <Route path='/why-astra' element={<WhyAstra />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/policies' element={<ShippingAndPolicies />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/search/*' element={<Search />} />
      </Routes>
      {showAnkle && <Ankle />}
      <Footer />
    </Box>
  );
};

export default App;
