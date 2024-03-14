import React, { useEffect, useState } from 'react'
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from './our-houses-img/image6.jpg';
import image2 from './our-houses-img/image14.jpg';
import image3 from './our-houses-img/image10.jpg';
import image4 from './our-houses-img/image1.jpg';
import image5 from './our-houses-img/image12.jpg';
import image6 from './our-houses-img/image13.jpg';

export default function OurHouses() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  

  return (
    <Box>
      <Box px={{md:10, base: 5}} py={{md:10, base: 10}}>
          <Heading fontSize={25} textAlign={'center'}>
              Our Houses
          </Heading>
          <Text py={5} fontSize={16} fontWeight={600} textAlign={'center'}>Fully furnished Semi-detached 4-bedroom duplex</Text>
          <Flex  justifyContent={'center'} px={{base:2, md: 3}} gap={4} flexWrap={'wrap'} rounded={10} maxW={{md:'80%', base: '100%'}} mx={'auto'} py={{md:10, base: 3}} bg={useColorModeValue('gray.200', 'gray.800')}>
            <Box width={{md:'30%', base: '100%'}}>
              <img src={image1} alt="house" className='rounded-[10px]'/>
            </Box>
            <Box width={{md:'30%', base: '100%'}}>
              <img src={image2} alt="house" className='rounded-[10px]'/>
            </Box>
            <Box width={{md:'30%', base: '100%'}}>
              <img src={image3} alt="house" className='rounded-[10px]'/>
            </Box>
            <Box width={{md:'30%', base: '100%'}}>
              <img src={image4} alt="house" className='rounded-[10px]'/>
            </Box>
            <Box width={{md:'30%', base: '100%'}}>
              <img src={image5} alt="house" className='rounded-[10px]'/>
            </Box>
            <Box width={{md:'30%', base: '100%'}}>
              <img src={image6} alt="house" className='rounded-[10px]'/>
            </Box>
          </Flex>
        </Box>
    </Box>
  )
}
