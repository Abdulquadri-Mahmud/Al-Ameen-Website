import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../Logo/logo2.png'

export default function Header() {
  return (
        <Box>
            <Box w={'full'} bg={useColorModeValue('gray.200', 'gray.700')}>
                <Flex alignItems={'center'} boxShadow={'md'} px={{md:10, base: 3}} py={{md:2, base: 5}}>
                    <Box boxSize={20}>
                        <Link to='/'>
                            <Image src={logo} maxW={'full'} maxH={'full'} rounded='5px' alt='Al-Ameen Integrated Education College'/>
                        </Link>
                    </Box>
                    <Heading fontSize={{md:25, base: 20}}>
                        Al-Ameen Integrated Education  
                    </Heading>
                </Flex>
                <Box py={{base: 5, md: 16}} px={{base: 3, md: 10}}>
                    <Text fontSize={16} fontWeight={600} lineHeight={2}>Specially designed for those who want the best of both for their kids and are willing to pursue it.</Text>
                    <Text fontSize={16} fontWeight={600} lineHeight={2}>Al-Ameen Integrated Education College is broken into 2 sets of 4-year programs designed to produce sound Islamic and Arabic Knowledge and excellent western education all in a conducive environments</Text>
                    <Text fontSize={16} fontWeight={600} lineHeight={2}>The first 4 years is dedicated to the Arabic program up to Thanawiyyah level of Arabic and Islamic Studies (Kewu Proper) while the second 4 years delivers the western education core.</Text>
                </Box>
            </Box>
        </Box>
  )
}
