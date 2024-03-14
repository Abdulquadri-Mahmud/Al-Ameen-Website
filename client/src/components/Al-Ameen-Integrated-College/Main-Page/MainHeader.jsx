import React from 'react'
import { Box, Image, Flex, Input,FormLabel, Checkbox, Button } from '@chakra-ui/react';
import logo1 from './img/logo2.png';
import { Link } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import Themes from '../../../components/Themes';
import Accordions from '../../../components/Accordions';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import Sidebar from '../../../components/Sidebar';

export default function MainHeader() {
  return (
    <div>
        <Box>
            <Flex position={'sticky'} top={0} zIndex={100} w={'full'}  justifyContent={'space-between'} alignItems={'center'} py={0} px={{base: 5, md: 10}} boxShadow={'md'} bgColor={useColorModeValue('gray.200', 'gray.800')}>
                <Box boxSize={20}>
                    <Link href='/'>
                        <Image src={logo1} alt='logo' maxW={'full'} maxH={'full'} rounded='5px'/>
                    </Link>
                </Box>
                <Box display={{base: 'none', md: 'block'}}>
                    <Flex gap={5} justifyContent={'center'} alignItems={'center'} >
                        <Link href='/' fontSize={16} fontWeight={600}>Home</Link>
                        <Box>
                            <Accordions/>
                        </Box>
                        <Box pl={4}>
                            <Link href='/testimonial' fontSize={16} fontWeight={600}>Testimonial</Link>
                        </Box>
                    </Flex>
                </Box>
                <Box display={{base: 'none', md: 'block'}}>
                    <Themes/>
                </Box>
                <Box display={{base: 'block', md: 'none'}}>
                    <Sidebar />
                </Box>
            </Flex>
        </Box>
    </div>
  )
}
