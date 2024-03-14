
import { Box,Flex, } from '@chakra-ui/react';
import Header from './Header';
import ProgramDetails from './ProgramDetails';
import { Link } from 'react-router-dom';
import { FaLongArrowAltDown } from "react-icons/fa";


export default function Page() {
  return (
    <Box py={{md:10, base: 5}}>
        <Header/>
        <ProgramDetails/>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
          <FaLongArrowAltDown className='text-purple-500 text-2xl animate-bounce'/>
          <Link to={'/about-al-ameen-integrated-edu'} className='text-center font-semibold text-1xl underline'>More About Al-Ameen Integrated Education</Link>
        </Flex>
        {/* <FAQ/> */}
        {/* <AdmissionCycle/> */}
    </Box>
  )
}
