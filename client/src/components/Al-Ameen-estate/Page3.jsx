import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import OurHouses from './OurHouses'
import { Box, Flex, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { FaLongArrowAltDown } from 'react-icons/fa'

export default function Page() {
  return (
    <Box>
        <Header/>
        <AboutUs/>
        <OurHouses/>
        {/* <EstateDesign/> */}
        {/* <FAQ/> */}
        {/* <ContactUs/> */}
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
          <FaLongArrowAltDown className='text-purple-600 text-2xl animate-bounce'/>
          <Link to={'/al-ameen-integrated-education'} className='text-center font-semibold text-1xl underline'>More About Al-Ameen Estate</Link>
        </Flex>
    </Box>
  )
}
