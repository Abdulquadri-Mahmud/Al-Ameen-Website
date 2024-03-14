import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import quran from '../assets/img/Quran.png';

export default function ACMQ() {
  return (
    <>
        <Flex py={{base: 0, md: 10}} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} px={{base: 3, md: 5, xl: 10}} bg={useColorModeValue('gray.200', 'gray.700')}>
            <Box width={'100%'} mx={'auto'}>
                <Heading fontSize={{base:20, md:25}} textAlign={'center'}>Al-Ameen Centre for Qur'an Memorization (ACQM)</Heading>
                <Flex justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} mt={10}>
                    <Box w={{md:'45%', base: '100%'}} bg={useColorModeValue('gray.100', 'gray.800')} borderRadius={10} maxW={'full'}>
                        <img src={quran} alt="quran" />
                    </Box>
                    <Box w={{md:'50%', base: '100%'}}>
                        <Box>
                            <Heading fontSize={25} textAlign={'center'} pt={5} textDecor={'underline'}>-خَيْرُکُم مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ-</Heading>
                            <Box mt={{base:5, md: 7}}>
                                <Text fontSize={16} fontWeight={600} lineHeight={2} textAlign={{base: 'center', md: 'start'}}>We, at "Al-Ameen Centre for Qur'an Memorization" are glad to provide an opportunity to support our parents on the challenging journey of getting their children to become protectors of the words  of Allah. We prioritize the raising memorizers of the Qur'an who are morally upright and spiritually sound. And that explains our motto: “Qur’an & Character”. </Text>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Heading  fontSize={25} textDecor={'underline'} textAlign={'center'}>Key Program Highlights</Heading>
                            <Flex flexDir={'column'} gap={3} pt={7}>
                                <Text fontSize={16} fontWeight={600} textAlign={'start'}>We take care to ensure that the basis of the learner’s character development is modelled on the teachings of the Qur’an and Sunnah of prophet </Text>
                                <Text fontSize={16} fontWeight={600} textAlign={'start'}>We do not neglect traditional Nigerian home trainings taught by our parents to enhance our pupils, as virtuous and confident representatives of Islam both in expression and, in attitude.</Text>
                                <Text fontSize={16} fontWeight={600} textAlign={'start'}>We do the above in a conducive living environment which encourages the use of Arabic in day-to-day communication as part of setting up the foundations that will enable the understanding of the Quran in future.</Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </>
  )
}
