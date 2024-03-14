import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../Logo/logo3.png'

export default function Header() {
  return (
    <Box>
        <Box w={'full'} bg={useColorModeValue('gray.200', 'gray.700')}>
            <Flex alignItems={'center'} gap={4} boxShadow={'md'} px={{md:10, base: 3}} py={{md:2, base: 5}}>
                <Box boxSize={20} bg={'red.500'} p={2} borderRadius={5}>
                    <Link to='/'>
                        <Image src={logo} maxW={'full'} maxH={'full'} rounded='5px' alt='Al-Ameen Integrated Education College'/>
                    </Link>
                </Box>
                <Heading fontSize={{md:25, base: 20}}>
                    Al-Ameen Estate 
                </Heading>
            </Flex>
            <Box py={{base: 5, md: 16}} px={{base: 3, md: 10}}>
                <Text fontSize={16} fontWeight={600} lineHeight={2}>
                    An Arabic proverb says, “choose your neighbor before you build your house”.  Al-Ameen estate is a gated, secured Muslim only serviced Estate within the highbrow end of Ikorodu, Lagos state for those who have the dream of living in a Muslim environment where their kids and themselves can have the best of both worlds living and playing, yes playing, in a Muslim community
                </Text>
                <Text fontSize={16} fontWeight={600} lineHeight={2}>
                    A beautiful world, for a beautiful hereafter.
                </Text>
            </Box>
        </Box>
    </Box>
  )
}
