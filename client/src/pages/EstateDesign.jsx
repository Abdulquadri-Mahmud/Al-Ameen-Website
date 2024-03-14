import Footer from '../components/Footer';
import { Box,Flex, Heading, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import EstateDesigns from '../components/Al-Ameen-estate/EstateDesigns';

export default function EstateDesign() {
  return (
    <div>
      <Header/>
      <Box>
        <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
            <Heading color={'white'} fontWeight={500} fontSize={30} textAlign={'center'}>Estate Designs</Heading>
            <Box color={'white'} mt={5}>
                <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                <span> / </span>
                <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
            </Box>
        </Flex>
      </Box>
      <EstateDesigns/>
      <Footer/>
    </div>
  )
}
