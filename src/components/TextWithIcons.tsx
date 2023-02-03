import { Stack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import GallerySlide from './GallerySlide';

const TextWithIcons: React.FC = () => {
  const [animation, setAnimation] = useState({
    delay: 0,
    startPoint: 0,
    endPoint: 0,
    duration: 0
  });

  const animatedElementWidth = 864;
  // enter the total width of the element to animate

  const animatedElements =
    Math.ceil(window.innerWidth / animatedElementWidth) + 1;
  // number of elements needed to keep transition smooth on all widths

  const setAnimationSpeedAndTimings = (): void => {
    const speed = 140;
    // speed in pixels per second, adjustable for future usage
    const distance = animatedElements * animatedElementWidth;
    // total distance for the element to travel
    const startPoint = (-animatedElementWidth * animatedElements) / 2;
    // this will make the element be slightly off screen to the left initially
    const endPoint = startPoint + distance;

    const duration = distance / speed;
    // how long it takes to get from start to end in seconds
    const delay = animatedElementWidth / speed;

    setAnimation({ delay, startPoint, endPoint, duration });
  };

  useEffect(() => {
    setAnimationSpeedAndTimings();
  }, []);

  return (
    <Stack
      padding='80px'
      align='center'
      overflow='hidden'
      background='#313C4E'
      h={['500px', '460px', '420px']}
      zIndex={2}
      pos='relative'
    >
      <Heading
        fontFamily='Marcellus'
        lineHeight='1.4'
        fontWeight='regular'
        fontSize='32px'
        color='brand.Cream'
        textAlign='center'
      >
        Stellar Reasons to Switch to ASTRA
      </Heading>
      <Stack pos='relative' align='center' w='fit-content' h='148px'>
        {animatedElements === 3 ? (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={2 * animation.delay}
              animationProperties={animation}
            />
          </>
        ) : animatedElements === 4 ? (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={2 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={3 * animation.delay}
              animationProperties={animation}
            />
          </>
        ) : animatedElements === 5 ? (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={2 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={3 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={4 * animation.delay}
              animationProperties={animation}
            />
          </>
        ) : (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
          </>
        )}
      </Stack>
      {/* <GallerySlide
          delay={3 * animation.delay}
          animationProperties={animation}
        />
        <GallerySlide
          delay={4 * animation.delay}
          animationProperties={animation}
        /> */}
    </Stack>
  );
};

export default TextWithIcons;
