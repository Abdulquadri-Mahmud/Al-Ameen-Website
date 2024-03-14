import React from 'react'
import { Link } from '@chakra-ui/react';
import img from '../assets/img/down.png'
import { Box, Flex,Heading } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function Accordions() {
  return (
    <>
        <Flex justifyContent={'center'} gap={{xl:10, md: 7}}>
            <Box className="accordion">
                <input type="checkbox" id="dropdown1" className='cursor-pointer hidden'/>
                <label htmlFor="dropdown1" className="cursor-pointer relative font-semibold">About Us</label>
                <Box className="content z-10 flex flex-col gap-3 absolute left-[50%] top-[50%] translate-x-[-60%] mt-10 h-[0px] md:w-[300px] w-[100%] shadow-md overflow-y-scroll duration-200" bgColor={useColorModeValue('gray.200', 'gray.800')}>
                    <Flex flexDirection={'column'} gap={6} color={useColorModeValue('gray.800', 'white')} pt={16} px={5}>
                        <Link textAlign={'center'} href='/about-al-ameen-quran-memo' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Al-Ameen Center For <br /> Qur'an Memorisation (ACQM)</Link>
                        <Link textAlign={'center'} href='/about-al-ameen-integrated-edu' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Al-Ameen Integrated Education College</Link>
                        <Link textAlign={'center'} href='/about-al-ameen-estate' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Al-Ameen Estate</Link>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Link textAlign={'center'} href='/contact' fontSize={16} fontWeight={600}>Contact Us</Link>
            </Box>
            <Box className="accordion">
                <input type="checkbox" id="dropdown2" className='cursor-pointer hidden'/>
                <label htmlFor="dropdown2" className="cursor-pointer relative font-semibold">FAQ</label>
                <Box className="content z-10 flex flex-col gap-3 absolute left-[50%] top-[50%] translate-x-[-60%] mt-10 h-[0px] md:w-[300px] w-[100%] shadow-md overflow-y-scroll duration-200" bgColor={useColorModeValue('gray.200', 'gray.800')}>
                    <Flex flexDirection={'column'} gap={6} color={useColorModeValue('gray.800', 'white')} pt={16} px={5}>
                        <Link textAlign={'center'} href='/al-ameen-integrated-college-faq' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Al-Ameen Integrated Education College</Link>
                        <Link textAlign={'center'} href='/al-ameen-estate-faq' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Al-Ameen Estate</Link>
                    </Flex>
                </Box>
            </Box>
            <Box className="accordion">
                <input type="checkbox" id="dropdown3" className='cursor-pointer hidden'/>
                <label htmlFor="dropdown3" className="cursor-pointer relative font-semibold">Pages</label>
                <Box className="content z-10 flex flex-col gap-3 absolute left-[50%] top-[50%] translate-x-[-60%] mt-10 h-[0px] md:w-[300px] w-[100%] shadow-md overflow-y-scroll duration-200" bgColor={useColorModeValue('gray.200', 'gray.800')}>
                    <Flex flexDirection={'column'} gap={6} color={useColorModeValue('gray.800', 'white')} pt={16} px={5}>
                        <Link textAlign={'center'} href='/ourhouses' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Our Houses</Link>
                        <Link textAlign={'center'} href='/estate-design' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Estate Design</Link>
                        <Link textAlign={'center'} href='/testimonial' fontSize={16} fontWeight={500} textDecoration={'underline'} _hover={{color: 'green.700'}}>Testimonial</Link>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </>
  )
}
