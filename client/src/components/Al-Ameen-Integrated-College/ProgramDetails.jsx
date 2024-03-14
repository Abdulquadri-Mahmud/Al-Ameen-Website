import React from 'react';
import { Box, Button,Flex, Heading, Text, UnorderedList,ListItem } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function ProgramDetails() {
  return (
    <Box px={{md:10, base: 3}} py={{md:10, base: 5}}>
        <Box>
            <Heading fontSize={25}>
                Program Details
            </Heading>
            <Text pt={7} fontWeight={600} lineHeight={2} fontSize={{md: 16, base: 16}}>
                At the end of the first 4 years after completing the thanawiyyah program, 1.5 years will be spent on the key JSS subjects of Mathematics, English, Civics, Business Studies and Basic Science & Technology (5 subjects) after which students will proceed into a 2.5 Senior Secondary Education in pursuance of whatever career he or she chooses. A child should thus be graduating from us at about age 17 as a bonafide Alfa or Alfaress moving into the University to study his or her choice course of study with potential to graduate at 22/23. In the long run, we plan to add A level school (1yr). This A’ level school may enable anyone who is particularly age centric cut back 1 year in the university although for us, we think age 23 is great enough as there are even advantages in maturity.
            </Text>
        </Box>
        <Box pt={7}>
            <Heading fontSize={25}>Who is this for (Admission Requirements)</Heading>
            <Text pt={3} fontSize={{md: 16, base: 16}} fontWeight={600}>
                For parents who wants their kids to have best of both worlds.
            </Text>
            <UnorderedList pt={3} fontWeight={600} fontSize={{md: 16, base: 16}}>
                <ListItem lineHeight={2}>To be admitted, a child must have completed primary school education (Pry 5 or 6 depending)</ListItem>
                <ListItem lineHeight={2}>Must already be able to read the Qur'an</ListItem>
                <ListItem lineHeight={2}>He or she must be at least 9 years old and aged 11 max</ListItem>
                <ListItem lineHeight={2}>Mode of instruction is Arabic and English to maximize learning but leraner does not need to know any Arabic at resumption.</ListItem>
            </UnorderedList>
        </Box>
    </Box>
  )
}
