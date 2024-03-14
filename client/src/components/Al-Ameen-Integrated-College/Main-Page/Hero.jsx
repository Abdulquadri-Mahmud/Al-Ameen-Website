import React from 'react';
import { Box, Image, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react';
// import logo1 from '../assets/logo/logo1.png';
import hero from '../../Al-Ameen-estate/estate-design-img/image12.jpg';

export default function Hero() {
  return (
    <Box h={'85vh'} w={'full'}>
        <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero})`} h={'full'} w={'full'}>
            <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.4} bgBlendMode="multiply"/>
            <Flex justifyContent={'center'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                <Stack flexDirection={'column'} w={'full'}>
                    <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} lineHeight={1.5}>Welcome <br /> To Al-Ameen</Heading>
                    <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={600}>Al-Ameen Centre is your best in <br /> class integrated Islamic Centre cultured to <br /> nurture the development of Muslim minds, within a <br /> fun-filled but controlled Islamic environment, amongst the young, <br /> the no so young and the not too old to want to live in a Muslim environment... </Text>
                    <Flex gap={4} mt={8}>
                        <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>Read More</Button>
                        <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>Contact Us</Button>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    </Box>
  )
}
