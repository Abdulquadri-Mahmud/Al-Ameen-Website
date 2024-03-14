import MainHeader from '../components/Al-Ameen-Integrated-College/Main-Page/MainHeader'
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProgramDetails from '../components/Al-Ameen-Integrated-College/ProgramDetails';
import AdmissionCycle from '../components/Al-Ameen-Integrated-College/AdmissionCycle';
import Footer2 from '../components/Footer2';

export default function AboutalmeenIntegratededu() {
  return (
    <>
        <MainHeader/>
        <Box>
            <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
                <Heading color={'white'} fontSize={30} fontWeight={500} textAlign={'center'}>About <br /> Al-Ameen Integrated Education</Heading>
                <Box color={'white'} mt={5}>
                    <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                    <span> / </span>
                    <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                </Box>
            </Flex>
        </Box>
        <ProgramDetails/>
        <AdmissionCycle/>
        {/* <FAQ/> */}
        <Box w={{base: '100%', md: '60%'}} mx={'auto'} pl={5} textAlign={'center'}>
          <Heading fontSize={20} fontWeight={500}>Special Note on Holidays</Heading>
          <Text fontWeight={600} pt={4}>Our holidays are minimal. Not more than 8 weeks max per year built around the Eids and late December. We do short internal breaks and sports time is on our program of activities for mental breaks.</Text>
        </Box>
        <Footer2/> 
    </>
  )
}
