import OurHouses from '../components/Al-Ameen-estate/OurHouses';
import Footer from '../components/Footer';
import { Box,Flex, Heading, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function OurHouse() {

  return (
    <Box>
      <Header/>
      <Box>
        <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
            <Heading color={'white'} fontWeight={500} fontSize={30} textAlign={'center'}>Our Houses</Heading>
            <Box color={'white'} mt={5}>
                <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                <span> / </span>
                <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
            </Box>
        </Flex>
      </Box>
      <OurHouses/>
      <Footer/>
    </Box>
  )
}
