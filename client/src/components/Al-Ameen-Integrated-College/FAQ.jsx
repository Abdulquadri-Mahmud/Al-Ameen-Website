import { Box,Heading, Text } from '@chakra-ui/react';
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
      <Accordion allowMultiple>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}><strong className='text-black'>Question1: </strong> What is the real opportunity A-Ameen Education College Presents? </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel p={5} fontWeight={600} lineHeight={2}>
                <Text>Alhamdulillahi Rabbil Alameen.We are pleased 
                  to provide this exciting opportunity to parents 
                  whose dreams involve raising Muslim children 
                  who excel in both their Islamic knowledge and 
                  their chosen professions. Drawing from over 25 
                  years of experience, it has been relatively easy to 
                  produce skilled university graduates and young 
                  individuals who can speak Arabic or memorize 
                  the Qur'an. However, combining these 
                  achievements with creating "Alfas" or 
                  "Alfaresses" with sound knowledge of Islam 
                  while still becoming skilled professionals at a 
                  young age has remained a challenge. We at A-Ameen Integrated Education College have taken 
                  on this challenge with courage and we aim to 
                  deliver it, Inshallah.
                </Text>
              </AccordionPanel>
          </AccordionItem>

          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}><strong className='text-black'>Question2:</strong> You really sound courageous. How 
                        do you hope to deliver this successfully?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                  <Text>
                    Great question. It is our pleasure to share our 
                    plans with you. One small commitment you need 
                    to make, though, is that your child would not 
                    leave secondary school at 16 but at age 18. Good 
                    or bad idea, we'll discuss that shortly, in-shaa 
                    Allah. We admit pupils aged 9 -10 who have 
                    completed standard primary school (we'll asses 
                    their math and English skills, as this foundation is 
                    crucial).We take them through a four-year 
                    program that containing the "lle Kewu" syllabus 
                    up to thanawiyyah level in a 4-term-per-year 
                    system under a full boarding environment 
                    running a 6-day, 24/7 schedule. Holidays will be 
                    brief, totaling no more than 8 weeks in a calendar year. 
                </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                      <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}><strong className='text-black'>Question3:</strong> You have only spoken about the 
                          Madrassah aspect. How will they still manage 
                          to become Engineers or Medical Doctors if they 
                          wish?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                  Thanks, we will get to this shortly. In fact, we 
                  were about to get there before you cut in. After 
                  the initial four years, graduates will spend 18 
                  months(1-5years) in Junior Secondary School, 
                  focusing on Mathematics, Integrated Science, 
                  English, and Business Studies and following that, 
                  they will enter a 2.5-year Senior Secondary 
                  School Program. In total, a child joining us at age 
                  10 would finish at age 18 and then proceed to 
                  university potentially graduating at 23 (in shaa 
                  Allah). 
              </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                    <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}>
                      <strong className='text-black'>Question4:</strong> What gives you the confidence you 
                        can deliver this successfully. Particularly the 
                        Western education aspects?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                Our track record and involvement in Western 
                Education speak for themselves. Alhamdulillah 
                for that, and we won't dwell on it. We have been 
                at it for more than 20 years and alhamdulillahi, 
                everything Allah has made us touch has been 
                golden. We pray Allah SWT continues to sustain 
                them and the things we have all ventured into. 
              </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}>
                        <strong className='text-black'>Question5:</strong> Are you sure Al-Ameen Integrated 
                        Education College won't turn out too expensive?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                  <Text>
                  Being expensive is not an objective of ours but 
                  good all round quality costs money. The recent 
                  naira devaluation and attendant inflation in the
                  Nigerian economy also raises its own challenges. 
                  May Allah SWT help us. 
                </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}>
                        <strong className='text-black'>Question6:</strong> Can people living abroad send their 
                          kid to this school?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                This might be a perfect fit for those living abroad 
                actually. Homegrown, safe environment, strong 
                Muslim values. We can even add a touch of 
                Cambridge A Level education at the right time. 
                Note that A level studies are completed in 
                approximately 10months in Nigeria. 
              </Text>
              </AccordionPanel>
          </AccordionItem>
          <AccordionItem p={2}>
              <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                        <Heading fontSize={16} fontWeight={600} textDecor={'underline'} color={'purple.700'}>
                        <strong className='text-black'>Question7:</strong> What are the extra things that 
                          make you special to the extent that someone 
                          delays the university admission of his child by 
                          two years?
                        </Heading>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                <Text>
                  Please think about it. Don't you think you have 
                  seriously advantaged your child by having them 
                  leave university at 23 as a matured learned 
                  Ustadh/Ustadha? Don't you think you have 
                  prepared them stronger for life? Alhamdulillahi 
                  for the blessing of islam! 
              </Text>
              </AccordionPanel>
          </AccordionItem>
      </Accordion>
      <Box w={'100%'} px={5} mt={4} fontWeight={500} fontSize={16}>
          <Text>Program Director </Text>
          <Text>Engr.Tawfiq Temitope Agbaje.</Text>
      </Box>
    </Box>
  )
}
