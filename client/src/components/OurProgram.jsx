import React, { useState } from 'react'
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function OurProgram() {

  return (
    <>
        <Box my={{base:10, md: 10}} p={3} width={{base: '100%', md:'70%'}} mx={'auto'}>
            <Heading fontSize={25} textAlign={'center'} pb={7}>Our Progam</Heading>
            <Accordion allowMultiple>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            1.1. Our flagship program 
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={5} fontWeight={600} lineHeight={2}>
                    Our flagship program is a full-time boarding program which should last at least 1 year subject to the learning rate of each individual learner and the basics that has been learnt before admission into ACQM. As a minimum, a learner should prepare for one year. 
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            1.2. Weekend Program
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                    We run a weekend only program for learners who have not yet decided to commit to the full-time program. Resumption is immediately after Asr on Fridays and departure is after Asr on Sundays. 
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            1.3. Holiday Program
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                        We run short Full Time boarding Programs during the school holidays available on request. Please contact our Customer Service desk early enough to reserve a place for your ward ahead of any school holidays.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            1.4 Holiday in Nigeria Program
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                    This is a dedicated fun filled learning program for our diaspora over the summer holidays. It has to be fun-filled because of the huge change in environment for these kids and to enhance their learning. Particular attention is also paid to the diet of such kids not necessarily in terms of nutrients but in terms of options
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                                1.5. Key Deliverables (in-shaa Allah)
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                        <Text>Qur’an memorisation program</Text>
                        <Text>Excellent behavioural adabs</Text>
                        <Text>Confidence in using transactional Arabic words in basic conversations</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    </>
  )
}
