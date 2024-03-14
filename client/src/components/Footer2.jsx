import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import logo1 from '../assets/logo/logo2.png';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'


export default function Footer2() {
  return (
    <Box className='py-10 px-6 mt-10' color={useColorModeValue('white', 'white')} bg={useColorModeValue('purple.900', 'gray.700')}>
        {/* <Flex justifyContent={'center'} boxSize={20} bg={'white'} rounded={10}>
            <Link to='/'>
                <Image src={logo1} alt='logo' maxW={'full'} maxH={'full'} rounded='5px'/>
            </Link>
        </Flex> */}
        <div className='mt-7 grid md:grid-cols-4 grid-cols-1 gap-10'>
            <Box>
                <Heading fontSize={25} fontWeight={500} textDecor={'underline'}>About Us</Heading>
                <Box mt={4}>
                    <Text fontWeight={600}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to nurture the development of Muslim minds, within a fun-filled but... </Text>
                    <Box mt={2}>
                        <Link to={'/about'} className='text-center underline font-semibold text-white'>Read More</Link>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Heading fontSize={25} fontWeight={500} textDecor={'underline'}>Social Links</Heading>
                <Flex flexDirection={'row'} gap={2} mt={4}>
                    <Link to='#'><FaFacebookF className="text-[20px] hover:text-black-600 duration-200 hover:-translate-y-1 translate-y-1"/></Link>
                    <Link to='#'><FaInstagram className="text-[20px] hover:text-black-600 duration-200 hover:-translate-y-1 translate-y-3"/></Link>
                    <Link to='#'><FaTwitter className="text-[20px] hover:text-black-600 duration-200 hover:-translate-y-1 translate-y-4"/></Link>
                    <Link to='#'><IoLogoYoutube className="text-[20px] hover:text-black-600 duration-200 hover:-translate-y-1 translate-y-3"/></Link>
                    <Link to='#'><FaWhatsapp className="text-[20px] hover:text-black-600 duration-200 hover:-translate-y-1 translate-y-1"/></Link>
                </Flex>
            </Box>
            <Box pt={3}>
                <Heading fontSize={25} fontWeight={500} textDecor={'underline'}>Quick Links</Heading>
                <Box pt={2} pb={3} pl={0}>
                    <Link to={'/'} className='font-semibold underline'>Home</Link>
                </Box>
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                        <AccordionButton pl={-4}>
                            <Box fontWeight={600} as="span" textAlign='right'>
                                About Us
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box py={1}>
                                <Link to='/about-al-ameen-quran-memo' className='underline font-semibold py-2'>Al-Ameen Center For Qur'an Memorisation (ACQM)</Link> <br />
                            </Box>
                            <Box py={1}>
                                <Link to='/about-al-ameen-integrated-edu' className='underline font-semibold py-2'>Al-Ameen Integrated Education College</Link><br />
                            </Box>
                            <Box py={1}>
                                <Link to='/about-al-ameen-estate' className='underline font-semibold py-2'>Al-Ameen Estate</Link>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton pl={-4}>
                            <Box fontWeight={600} as="span" textAlign='right'>
                                FAQ
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Link to='/about-al-ameen-integrated-edu' className='underline font-semibold py-2'>Al-Ameen Integrated Education College</Link><br />
                            <Link to='/about-al-ameen-estate' className='underline font-semibold py-2'>Al-Ameen Estate</Link>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Box pt={2} pb={3} pl={0}>
                    <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                </Box>
            </Box>
            <Box>
                <Heading fontSize={25} fontWeight={500} textDecor={'underline'}>Contact Us</Heading>
                <Box mt={4}>
                    <Box>
                        <span className='font-semibold'>Address: </span>
                        <Text className='font-semibold'>1, Lateef Akingbade Street, Oluodo Rd, Ikorodu, Lagos</Text>
                    </Box>
                    <Box>
                        <span className='font-semibold'>Email: </span>
                        <Link to='mailto:alameencenter@gmail.com' className='font-semibold'>alameencenter@gmail.com</Link>
                    </Box>
                    <Box pt={2}>
                        <span className='font-semibold'>Phone: </span>
                        <Link to='tel:+234-907-424-8867' className='font-semibold'>+234-907-424-8867 </Link>
                    </Box>
                    <Box pt={2}>
                        <span className='font-semibold'>Phone: </span>
                        <Link to='tel:+234-807-746-5423' className='font-semibold'>+234-807-746-5423 </Link>
                    </Box>
                </Box>
            </Box>

        </div>
    </Box>
  )
}
