import Header from '../components/Header';
import { Box, Heading, Flex} from '@chakra-ui/react';
import FAQ from '../components/Al-Ameen-Integrated-College/FAQ';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';

export default function AlAmeenIntegratesfaq() {
  return (
    <Box>
      <Header/>
      <Box>
        <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
            <Heading color={'white'} fontSize={30} fontWeight={500} textAlign={'center'}>Al-Ameen <br /> Integrated Education FAQ</Heading>
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
      <Footer2/>
    </Box>
  )
}
