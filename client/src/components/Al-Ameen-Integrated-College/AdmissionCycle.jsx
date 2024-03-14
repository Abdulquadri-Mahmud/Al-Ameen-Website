import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function AdmissionCycle() {
  return (
    <Box>
        <Box maxW={{md:'85%', base: '95%'}} p={4} borderRadius={8} bg={useColorModeValue('gray.200', 'white')} color={useColorModeValue('black', 'black')} mx={'auto'} my={8}>
          <Heading fontSize={25} textAlign={'center'} pb={4}>Admission Cycle</Heading>
          <Text fontSize={17} fontWeight={600} textAlign={'center'}>Al-Ameen Integrated College</Text>
          <Flex justifyContent={'space-around'} mt={5} gap={4} fontWeight={600} width={'100%'} flexWrap={'wrap'}>
            <Box w={{md:'45%', base: '100%'}}>
              <Text fontSize={20} pb={4} textDecor={'underline'}>First Semester</Text>
              <Box>
                <Text py={2}>8<sub>th</sub> January: School Resumption</Text>
                <Text py={2}>9<sub>th</sub> January: Oriention & Commencement of academic activities</Text>
                <Text py={2}>27<sub>th</sub> January: First Fortnight test series </Text>
                <Text py={2}>10<sub>th</sub> January: 2nd Fortnight Test series </Text>
                <Text py={2}>24<sub>th</sub> February: 3rd Fortnight Test Series</Text>
                <Text py={2}>25<sub>th</sub> February Visit Day </Text>
                <Text py={2}>10<sub>th</sub> March: Integrated Test</Text>
                <Text py={2}>17<sub>th</sub> March: Semester Revision Commencement and final touch ups</Text>
                <Text py={2}>24<sub>th</sub> March: ExaminaƟon (4 days) </Text>
                <Text py={2}>27<sub>th</sub> March: 3 days in-house holidays (Fun Time)</Text>
              </Box>
            </Box>
            <Box w={{md:'45%', base: '100%'}}>
              <Text fontSize={20} pb={4} textDecor={'underline'}>Second Semester</Text>
              <Box>
                <Text py={2}>31<sub>st</sub> March: School ResumpƟon</Text>
                <Text py={2}>1<sub>st</sub> April: OrientaƟon & Commencement of academic acƟviƟes</Text>
                <Text py={2}>7<sub>th</sub> April: First Fortnight test series </Text>
                <Text py={2}>14<sub>th</sub> April: 2nd Fortnight Test series </Text>
                <Text py={2}>5<sub>th</sub> May: 3rd Fortnight Test Series</Text>
                <Text py={2}>19<sub>th</sub> May Visit Day </Text>
                <Text py={2}>26<sub>th</sub> May: Integrated Test</Text>
                <Text py={2}>17<sub>th</sub> March: Semester Revision Commencement and final touch ups</Text>
                <Text py={2}>2<sub>nd</sub> June: Integrated Test </Text>
                <Text py={2}>10<sub>th</sub> june: ExaminaƟon (4 days)</Text>
                <Text py={2}>15<sub>th</sub> june: Second semester holiday/Eid break</Text>
              </Box>
            </Box>
            <Box w={'100%'} textAlign={'center'}>
              <Text textDecor={'underline'}>25th June: Commencement of second session (Semester 1) for returning students</Text>
              <Text textDecor={'underline'}>August 15: Commencement of session for new students</Text>
            </Box>
          </Flex>
        </Box>
    </Box>
  )
}
