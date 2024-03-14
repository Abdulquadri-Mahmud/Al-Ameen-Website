import React, { useState } from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value,
        })
    }
    const {name, email, mobile, message, purpose} = formData;
    const myEmail = 'abdulquadrimahmud06@gmail.com'
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:${myEmail}?subject=Regarding ${name}&body=${message}`;
    }
    return (
        <>
            <Header/>
            <Box>
                <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
                    <Heading color={'white'} fontSize={30} fontWeight={500}>Connect With Us</Heading>
                    <Box color={'white'} mt={5}>
                        <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                        <span> / </span>
                        <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                    </Box>
                </Flex>
                <Box w={{xl: '50%', md: '70%', base: '100%'}} mx={'auto'} mt={10}>
                    <Flex justifyContent={'center'} flexWrap={'wrap'} gap={4} >
                        <Flex justifyContent={'center'} gap={3} flexDirection={'column'}
                        alignItems={'center'} w={{md:'45%', base: '90%'}} rounded={'lg'} bgColor={useColorModeValue('gray.200', 'gray.700')}h={'250px'} p={3}>
                            <Box className="">
                                <FaPhoneVolume className="text-3xl text-green-600"/>
                            </Box>
                            <Box textAlign={'center'}>
                                <h1 className="pb-3 text-2xl text-center font-semibold">Phone</h1>
                                <Text>
                                    <Link to='tel:+2347047594667' className='font-semibold'>(+234) 704-7594-667</Link>
                                </Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent={'center'} gap={3} flexDirection={'column'}
                        alignItems={'center'} w={{md:'45%', base: '90%'}} rounded={'lg'} bgColor={useColorModeValue('gray.200', 'gray.700')} h={'250px'} p={3}>
                            <Box className="">
                                <MdAttachEmail className="text-3xl text-green-600"/>
                            </Box>
                            <Box textAlign={'center'}>
                                <h1 className="pb-3 text-2xl font-semibold">E-MAIL</h1>
                                <Text>
                                    <Link to='mailto:alameencenter@gmail.com' className='font-semibold'>alameencenter@gmail.com</Link>
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Flex justifyContent={'space-around'} flexWrap={'wrap'} alignItems={'center'} gap={4} mt={10} bg={useColorModeValue('gray.200', 'gray.700')} py={{base: 10, md:20}} px={{base: 2, md: 10}}>
                <Box w={{xl:'40%', base: '95%'}} h={{xl: '400px',md:'400px', base: '300px'}} rounded={5}>
                <iframe className='h-full w-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5688363113463!2d3.4991928!3d6.5759704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bedfd470fc865%3A0xe21b408e847dfbb1!2s1%20Lateef%20Akingbade%20St%2C%20Ikorodu%2C%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710369492844!5m2!1sen!2sng" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
                <Box p={{md:4, base: 2}} bg={useColorModeValue('gray.200', 'gray.800')} flex={1} rounded={10} h={''} margin={1} >
                    <form className="md:p-3 p-2 grid grid-cols-1 md:gap-5 gap-2" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3">
                            <div className="">
                                <input id="name" onChange={handleChange} type="text" className="w-full rounded p-3 text-1xl font-semibold bg-gray-50 outline-2 outline-green-600" placeholder="Name..."/>
                            </div>
                            <div className="">
                                <input id="mobile" onChange={handleChange} type="tel" className="w-full rounded p-3 text-1xl font-semibold bg-gray-50 outline-2 outline-green-600" placeholder="Phone..."/>
                            </div>
                            <div className="">
                                <input id="email" onChange={handleChange} type="email" className="w-full rounded p-3 text-1xl font-semibold bg-gray-50 outline-2 outline-green-600" placeholder="Email..."/>
                            </div>
                        </div>
                        <div className="">
                            <select onChange={handleChange} className="w-full md:mt-3 mt-2 rounded p-3 font-semibold text-1xl bg-gray-50 outline-2 outline-green-600">
                                <option>Purpose</option>
                                <option value="Al-Ameen Integrated Education">Al-Ameen Integrated Education</option>
                                <option value="Al-Ameen Estate">Al-Ameen Estate</option>
                                <option value="Al-Ameen Arabic and Qur'an Memorisation">Al-Ameen Arabic and Qur'an Memorisation</option>
                            </select>
                        </div>
                        <div className="">
                            <textarea onChange={handleChange} className="w-full text-1xl font-semibold md:mt-3 mt-2 rounded md:h-36 h-31 p-3 outline-2 outline-green-600 bg-slate-100" placeholder="Type Message" id="message" >
    
                            </textarea>
                        </div>
                        <div className="flex justify-center">
                            <Button bgColor={useColorModeValue('green.600', 'gray.600')} type="submit" color={'white'} _hover={{bg: 'green.700'}} className="w-[200px] p-2 font-semibold rounded">Send Message</Button>
                        </div>
                    </form>
                </Box>
            </Flex>
            <Footer/>
        </>
    )
  }
  