import React from 'react';
import { Box, Button,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export default function FAQ() {
  return (
    <Box py={10}>
      <Heading fontSize={{md:30, base: 25}} textDecor={'underline'} textAlign={'center'} pb={4}>
        Frequently Asked Question
      </Heading>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                            Question 1: What drove you and your team to think about setting up an estate such as Al-Ameen Estate
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel p={5} fontWeight={600} lineHeight={2}>
                <Text>In its simplest form, I will say “value for life”. An 
                  Arabic proverb says, choose your neighbor 
                  before you build your house. There are so many 
                  things we as Muslims do together which garnish 
                  our lives positively and ensure we and our kids 
                  are able to have a fair life, we find difficult today 
                  even when we can afford them simply because 
                  of the way our neighborhoods are structured. 
                  We find ourselves turning our sitting-rooms, 
                  perhaps better described as our Television-Rooms into our living-rooms. These living rooms 
                  ultimately become the place where the TV 
                  imprisons the average Muslim household since 
                  we don’t even go clubbing like some others. We 
                  hardly find a space where we can share a bottle 
                  of juice with a brother or sister as the case may 
                  be. The health effect of this lifestyle is up for 
                  debate but while that debate is going on, we at 
                  Al-Ameen asked ourselves how we can make a 
                  difference at least for the sake of our kids. It is 
                  these thoughts that led to the product Allah SWT 
                  has blessed us with today. 
                </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                          Question 2: What do I stand to gain from 
                          living in Al-Ameen Estate
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>Great question but indeed the answer is not 
                  about just you rather It is about you and the 
                  quality of life you provide for your own self and 
                  your entire household. An environment where 
                  your kids can cycle outside safely, where you can 
                  network excellently with peers, where your aged 
                  mum can take a stroll safely, where you can go
                  to the mosque at the early hours of our solah and 
                  an environment where you can drop your keys 
                  with your neighbor or at the gate in case 
                  Abdullah returns from school while you are 
                  away, an environment where you can return 
                  from the village and send some tubers of yam to 
                  Ummu Abdurrahman living next door if you 
                  chose. All in all, an environment where you will 
                  enjoy your lives as muslims by Allah's mercies. 
                </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                          Question 3: What options do I have to come 
                          into Al-Ameen Estate? Is it only Land that I can 
                          buy? How about if I want to buy a house? Are 
                          there restrictions on the type of house I can 
                          build?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                  We are quite flexible. We understand the 
                  challenges of the economy so we do not demand 
                  for a hand and a leg to get for subscribers to key 
                  into Al-Ameen Estate. We have ready made 
                  apartments and in case you call in at a period 
                  when all available apartments are taken, we 
                  would in shaa Allah deliver within record time. 
                  The most appropriate way to work out a deal 
                  that works for you is to engage our Customer 
                  Service Desk on 09074248867. 
              </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                          Question 4: Do you have any payment 
                          structure? Do I need to look for all the money 
                          before I can buy into Al-Ameen Estate? 
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                Certainly not. But the best way to approach this 
                and ensure you have a deal that can work for you 
                and your family is to approach our Customer 
                Service desk. Your discussions will lead to 
                options being laid on your table in a win-win
                mode within which you should in shaa Allah be 
                able to find one that works for you. 
              </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                          Question 5: What is your plan to ensure 
                          Al-Ameen Estate remains a lovely place to live?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                This is a question that is dear to us at Al-Ameen 
                Estate. It is made alive in the agreements that we 
                set-up today and the facilities we put in place 
                today to ensure we begin on a great note. Our 
                approach is such that our systems provide our 
                subscribers access that is free of burden to their 
                property which they have paid for, yet protect 
                them from any potential misuse of the group 
                space in a way that ensures collective interest 
                remain protected over time. 
              </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                          Question 6: For someone who lives abroad 
                          or maybe in distant locations within Nigeria 
                          such as Port-Harcourt but have aged parents 
                          based in Lagos, what value will Al-Ameen Estate 
                          bring to having such parents live within the 
                          Estate
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                  This area is indeed one of the unique add-ons 
                  that Al-Ameen Estate brings. What better 
                  environment can we situate our parents than 
                  amongst Muslims who will treat them with 
                  respect and afford them community protection 
                  in a location not yet fully artificial (where the 
                  kind of markets they are used to is still within a 
                  short distance off). This is a location where we 
                  can safely delegate a cleaner to clean the house 
                  once in a while, have someone go chat with them 
                  officially or organize hospital visits. Where does 
                  it get better? 
                </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'red.600'}>
                          Question 7: Alright, can you please tell us 
                          some more about this Estate?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                  Al-Ameen Estate is a gated Muslim 
                  community located along Oluodo Road, at the 
                  adjunct behind FRCN and Nichemtex, Oluodo 
                  Road, Ebute, Ikorodu, Lagos. Its perimeter is 
                  secured with electrical systems Ratibi masjid and 
                  playground is provided. Typical plot sizes are 
                  600, 450 and 300 square-meters and prices 
                  compete excellently with what obtains in 
                  neighbourhood Oluodo area which are even 
                  non-gated, undrained and essentially un-serviced. A huge opportunity for Muslim families 
                  that want to live in a serene, safe, secure, 
                  serviced Muslim environment.
              </Text>
              </AccordionPanel>
          </AccordionItem>
      </Accordion>
      </Box>
    </Box>
  )
}
