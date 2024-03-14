import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import image1 from './estate-design-img/image1.jpg';
import image2 from './estate-design-img/image2.jpg';
import image3 from './estate-design-img/image3.jpg';
import image11 from './estate-design-img/image11.jpg';
import image12 from './estate-design-img/image12.jpg';
import image6 from './estate-design-img/image4.jpg';
import image7 from './estate-design-img/image5.jpg';

import workImage1 from './work-in-progress-img/image1.jpg';
import workImage2 from './work-in-progress-img/image2.jpg';
import workImage3 from './work-in-progress-img/image3.jpg';
import workImage4 from './work-in-progress-img/image4.jpg';
import workImage5 from './work-in-progress-img/image5.jpg';
import workImage6 from './work-in-progress-img/image6.jpg';

export default function EstateDesigns() {
  return (
    <Box>
        <Box py={10}>
            <Heading fontSize={25} fontWeight={600} textAlign={'center'} pb={8}>
                Estate Design & Pictures
            </Heading>
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
                  <img src={image11} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image12} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image7} alt="house" className='rounded-[10px]'/>
                </Box>
          </Flex>
        </Box>
        <Box py={5}>
            <Heading fontSize={25} textAlign={'center'} fontWeight={500} py={6}>
                Live Photos showing work in progress
            </Heading>
            <Flex  justifyContent={'center'} px={{base:2, md: 3}} gap={4} pt={6} flexWrap={'wrap'} rounded={10} maxW={{md:'80%', base: '100%'}} mx={'auto'} py={{md:10, base: 3}} bg={useColorModeValue('gray.200', 'gray.800')}>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={workImage1} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={workImage3} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={workImage5} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={workImage4} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={workImage2} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={workImage6} alt="house" className='rounded-[10px]'/>
                </Box>
          </Flex>
        </Box>
    </Box>
  )
}
