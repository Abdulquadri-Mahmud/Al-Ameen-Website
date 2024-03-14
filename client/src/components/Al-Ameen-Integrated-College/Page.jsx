import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import Header from './Header';
import ProgramDetails from './ProgramDetails';
import FAQ from './FAQ';
import AdmissionCycle from './AdmissionCycle';
import { Link } from 'react-router-dom';
import { FaLongArrowAltDown } from "react-icons/fa";


export default function Page() {
  return (
    <Box py={{md:10, base: 5}}>
        <Header/>
        <ProgramDetails/>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
          <FaLongArrowAltDown className='text-purple-500 text-2xl animate-bounce'/>
          <Link to={'/al-ameen-integrated-education'} className='text-center font-semibold text-1xl underline'>More About Al-Ameen Integrated Education</Link>
        </Flex>
        {/* <FAQ/> */}
        {/* <AdmissionCycle/> */}
    </Box>
  )
}
