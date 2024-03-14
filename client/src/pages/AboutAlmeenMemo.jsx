import { Box,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MainHeader from '../components/AlAlmeenQuranMemo/MainHeader';
import image11 from '../assets/img/image11.jpg';

export default function AboutAlmeenMemo() {
  return (
    <>
        <MainHeader/>
        <Box>
            <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
                <Heading color={'white'} fontWeight={500} fontSize={30} textAlign={'center'}>About Al-Ameen <br /> Center For Quran Memorisation</Heading>
                <Box color={'white'} mt={5}>
                    <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                    <span> / </span>
                    <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                </Box>
            </Flex>
        </Box>
        <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} width={'full'} px={{base: 5, md: 5, xl: 10}} py={{base: 10, md:10}} mt={10} color={useColorModeValue('gray.800', 'gray.100')} bgColor={useColorModeValue('gray.200', 'gray.800')}>
            <Box width={{base: '100%', md:'45%'}}>
                <Box>
                    <Heading textAlign={'center'} fontWeight={500} fontSize={{ base: '1.5rem', md: '2rem' }}>
                        About Al-Ameen Center
                    </Heading>
                </Box>
                <Box paddingTop={{base:5, md: 5}}>
                    <Text fontSize={16} lineHeight={7} fontWeight={500}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to nurture the development of Muslim minds, within a fun-filled but controlled Islamic environment, amongst the young, the no so young and the not too old to want to live in a Muslim environment. It currently houses a Muslim Estate (Al-Ameen Estate), A Centre for Quran memorization and a specialist school designed to produce kids sound in Islamic Knowledge (kewu proper) yet, profound in their grasp of their essential worldly affairs in pursuit of whatever career they choose to pursue in a timely manner.</Text>
                    <Text paddingTop={7} fontSize={16}  lineHeight={7} fontWeight={500}>Al-Ameen Centre is located in a high brow area of Ikorodu, Lagos, Nigeria. (Ibeshe Road Axis) and it is promoted by a team of sound Muslims under the NGO named, “Friends of Al-Ameen” who are largely senior career type Muslim professional who will be glad to be associated with you in-shaa Allah.</Text>
                </Box>    
            </Box>
            <Box width={{base: '100%', md:'50%'}} position={'relative'} paddingTop={{base: 10, md: 0}} zIndex={1}>
                <Image src={image11} borderRadius={6} alt='Al-Ameen Center' maxW={'full'}/>
            </Box>
        </Flex>
        <Footer/>
    </>
  )
}
