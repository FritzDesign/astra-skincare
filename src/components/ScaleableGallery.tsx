import {
  Stack,
  Menu,
  Text,
  Icon,
  Image,
  Button,
  Link,
  Divider
} from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { client } from '../context/ShopContext';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import FMC_Component from '../animations/defaults';
import { useNavigate } from 'react-router';
import { Product } from '../models/API';
import ScaleableGalleryCard from './ScaleableGalleryCard';

import { ScaleableGalleryProps as GalleryProps } from '../models/Props';

const ScaleableGallery: React.FC<GalleryProps> = ({
  collection,
  length,
  title,
  link
}) => {
  const [arrowDisabled, setArrowDisabled] = useState({
    left: true,
    right: false
  });
  const [galleryProducts, setGalleryProducts] = useState<Product[]>();

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '0% 0% 0% 0%'
  });
  const rightClickRef = useRef(0);

  const navigate = useNavigate();

  const handleSlideTranslate = (direction: string) => {
    const cardWidth = 345;
    const cardContainer = document.getElementById(
      'wn-card-container'
    ) as HTMLDivElement;
    cardContainer.style.transition = 'transform 1s ease';

    if (direction === 'right') {
      rightClickRef.current++;

      cardContainer.style.transform = `translateX(-${
        cardWidth * rightClickRef.current
      }px)`;
    } else {
      if (rightClickRef.current) rightClickRef.current--;
      cardContainer.style.transform = `translateX(-${
        cardWidth * rightClickRef.current
      }px)`;
    }
    setTimeout(() => {
      updateButtons();
    }, 1000);
  };

  const updateButtons = () => {
    const WNContainerPosition = (
      document.getElementById('wn-container')! as HTMLDivElement
    ).getBoundingClientRect();
    const cardContainerPosition = (
      document.getElementById('wn-card-container')! as HTMLDivElement
    ).getBoundingClientRect();

    if (
      WNContainerPosition &&
      cardContainerPosition &&
      WNContainerPosition.right >= cardContainerPosition.right
    ) {
      setArrowDisabled({ left: false, right: true });
    } else if (
      WNContainerPosition &&
      cardContainerPosition &&
      WNContainerPosition.left <= cardContainerPosition.left
    ) {
      setArrowDisabled({ right: false, left: true });
    } else {
      setArrowDisabled({ right: false, left: false });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      client.collection.fetchByHandle(collection).then((collection: any) => {
        if (collection?.products) {
          setGalleryProducts(collection.products.slice(0, length));
        }
      });
    };
    fetchProducts();
  }, []);

  return (
    <FMC_Component
      display='flex'
      flexDirection='column'
      id='wn-container'
      paddingX={['40px', '40px', '240px']}
      paddingY='64px'
      justifyContent='flex-start'
      alignItems='flex-start'
      gap='56px'
      background='brand.Cream'
      overflow='hidden'
      ref={containerRef}
      initial={{
        transform: 'translateY(-420px)'
      }}
      animate={
        isInView && {
          transform: 'translateY(0px)'
        }
      }
      // @ts-ignore
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}
    >
      <Stack direction='row' h='100%' justify='space-between' w='100%'>
        <Stack
          direction={['column', 'row']}
          justify='flex-start'
          align={['flex-start', 'center']}
          spacing='24px'
          w='90vw'
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.4'
            fontWeight='regular'
            fontSize='32px'
            color='brand.Charcoal'
          >
            {title}
          </Text>
          {link && (
            <Link
              _hover={{
                textDecor: 'none'
              }}
              borderBottom='1px solid'
              borderColor='brand.Charcoal'
              pb='4px'
              w='78px'
              fontFamily='Inter'
              textAlign='center'
              fontWeight='600'
              fontSize='14px'
              onClick={() => navigate(link.navTo)}
            >
              {link.text}
            </Link>
          )}
        </Stack>
        <Stack
          padding='8px'
          direction='row'
          justify='center'
          align={['flex-end', 'center']}
          spacing='24px'
        >
          <Icon
            as={BsChevronLeft}
            cursor='pointer'
            pointerEvents={arrowDisabled.left ? 'none' : 'auto'}
            opacity={arrowDisabled.left ? 0.5 : 1}
            onClick={() => handleSlideTranslate('left')}
          />
          <Icon
            as={BsChevronRight}
            cursor='pointer'
            pointerEvents={arrowDisabled.right ? 'none' : 'auto'}
            opacity={arrowDisabled.right ? 0.5 : 1}
            onClick={() => handleSlideTranslate('right')}
          />
        </Stack>
      </Stack>
      <Stack
        id='wn-card-container'
        direction='row'
        justify='flex-start'
        align='flex-start'
        spacing='56px'
        h='492px'
        mt='56px'
      >
        {galleryProducts &&
          galleryProducts.map((product: Product, i) => {
            return (
              <>
                {i ? (
                  <Divider orientation='vertical' h='92%' borderColor='UI.2' />
                ) : null}
                <ScaleableGalleryCard
                  key={i}
                  image={product.images[0].src}
                  isNew={product.isNew ? true : false}
                  title={product.title}
                  category={product.productType}
                  price={product.variants[0].price.amount}
                  weight={product.variants[0].weight}
                />
              </>
            );
          })}
      </Stack>
    </FMC_Component>
  );
};

export default ScaleableGallery;
