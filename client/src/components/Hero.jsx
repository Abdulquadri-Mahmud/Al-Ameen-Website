import React from 'react';
import { Box, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react';
import hero1 from '../assets/img/home.jpg';
import hero2 from '../assets/img/image12.jpg';
import hero3 from '../assets/img/image11.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", 
            
        }}
        onClick={onClick}
      />
    );
  }

export default function Hero() {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <Box h={{md:'85vh', base: '100vh'}} w={'full'} mt={0}>
        <Slider {...settings} className=''>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero1})`} h={{md:'85vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'center'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={'full'}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} lineHeight={{md:1.5, base: 1}} >Welcome <br /> To Al-Ameen</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={600}>Al-Ameen Centre is your best in <br /> class integrated Islamic Centre cultured to <br /> nurture the development of Muslim minds, within a <br /> fun-filled but controlled Islamic environment, amongst the young, <br /> the no so young and the not too old to want to live in a Muslim environment... </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>Read More</Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>Contact Us</Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero2})`} h={{md:'85vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'center'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={'full'}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={600}>Al-Ameen Centre is your best in <br /> class integrated Islamic Centre cultured to <br /> nurture the development of Muslim minds, within a <br /> fun-filled but controlled Islamic environment, amongst the young, <br /> the no so young and the not too old to want to live in a Muslim environment... </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>Read More</Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>Contact Us</Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero3})`} h={{md:'85vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'center'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={'full'}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={600}>Al-Ameen Centre is your best in <br /> class integrated Islamic Centre cultured to <br /> nurture the development of Muslim minds, within a <br /> fun-filled but controlled Islamic environment, amongst the young, <br /> the no so young and the not too old to want to live in a Muslim environment... </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>Read More</Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>Contact Us</Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
        </Slider>
    </Box>
  )
}
