import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import aboutImg from './estate-design-img/image12.jpg'; 

export default function AboutUs() {
  return (
    <Box>
        <Box w={'full'} bg={useColorModeValue('', 'gray.800')} px={{md:10, base: 3}} py={{md:10, base: 10}}>
            <Flex alignItems={'center'} justifyContent={'space-around'} flexWrap={'wrap'}>
              <Box w={{md:'45%', base: '100%'}}>
                <img src={aboutImg} alt="" className='rounded'/>
              </Box>
              <Box w={{md:'45%', base: '100%'}} mt={{base: 7, md: 0}}>
                <Heading fontSize={{md:'2rem', base: 25}} fontWeight={500} textAlign={{md:'center', base: 'start'}}>
                  About Al-Ameen Estate
                </Heading>
                <Text pt={5} fontWeight={600} lineHeight={2} textAlign={{md:'center', base: 'start'}}>
                  Al-Ameen Estate is a gated Muslim community located along Oluodo Road, Ikorodu, Lagos.  Its perimeter is secured with electrical systems. It is divided into a service area and an accommodation area separated by a concrete fence. It currently houses a Centre for Quran Memorization and Ratibi masjid and playground. Future infrastructural development within the service area includes a mall, a nursery/primary school, an hospital and an amusement park. Houses within the estate are arranged in rows of 4-bedroom semi-detached duplexes.  A huge opportunity for Muslim families that want to live in a serene, safe, secure, serviced Muslim environment
                </Text>
              </Box>
            </Flex>
        </Box>
    </Box>
  )
}
