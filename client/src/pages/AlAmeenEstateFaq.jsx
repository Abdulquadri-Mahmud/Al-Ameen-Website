import React from 'react';
import Header from '../components/Header';
import { Box, Heading, Flex} from '@chakra-ui/react';
import Footer3 from '../components/Footer3';
import FAQ from '../components/Al-Ameen-estate/FAQ';
import { Link } from 'react-router-dom';

export default function AlAmeenEstateFaq() {
  return (
    <Box>
      <Header/>
      <Box>
        <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
            <Heading color={'white'} fontSize={30} fontWeight={500} textAlign={'center'}>Al-Ameen Estate FAQ</Heading>
            <Box color={'white'} mt={5}>
                <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                <span> / </span>
                <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
            </Box>
        </Flex>
        <Box mt={10}>
            <FAQ/>
        </Box>
      </Box>
      <Footer3/>
    </Box>
  )
}
