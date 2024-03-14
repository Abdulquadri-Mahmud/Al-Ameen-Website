import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function SidebarAccordion() {
  return (
    <Flex flexDirection={'column'} gap={5}>
        <Box className="accordion">
            <input type="checkbox" id="sideDropdown1" className='cursor-pointer hidden'/>
            <label htmlFor="sideDropdown1" className="cursor-pointer relative font-semibold">About Us</label>
            <Box className="sidebarContent flex flex-col gap-3 absolute left-4 h-[0px] w-[90%] overflow-hidden shadow-md duration-200 z-10" 
              bgColor={useColorModeValue('green.600', 'gray.800')}>
                <Flex flexDirection={'column'} gap={6} pt={10} px={5}>
                    <Link href='/about-al-ameen-estate' fontSize={16} fontWeight={500} textDecoration={'underline'} color={'white'} transitionDuration={'0.3s'} _hover={{color: 'gray.800'}}>Al-Ameen Estate</Link>
                    <Link href='/about-al-ameen-quran-memo' fontSize={16} fontWeight={500} textDecoration={'underline'} color={'white'} transitionDuration={'0.3s'} _hover={{color: 'gray.800'}}>Al-Ameen Center For <br /> Quran Memorisation (ACQM)</Link>
                    <Link href='/about-al-ameen-integrated-edu' fontSize={16} fontWeight={500} textDecoration={'underline'} color={'white'} transitionDuration={'0.3s'} _hover={{color: 'gray.800'}}>Al-Ameen Integrated Education College</Link>
                </Flex>
            </Box>
        </Box>
        <Box className="accordion">
            <input type="checkbox" id="sideDropdown2" className='cursor-pointer hidden'/>
            <label htmlFor="sideDropdown2" className="cursor-pointer relative font-semibold">FAQ</label>
            <Box className="sidebarContent flex flex-col gap-3 absolute left-4 h-[0px] w-[90%] overflow-hidden shadow-md duration-200 z-10" 
              bgColor={useColorModeValue('green.600', 'gray.800')}>
                <Flex flexDirection={'column'} gap={6} pt={10} px={5}>
                    <Link href='/about-al-ameen-estate' fontSize={16} fontWeight={500} textDecoration={'underline'} color={'white'} transitionDuration={'0.3s'} _hover={{color: 'gray.800'}}>Al-Ameen Estate FAQ</Link>
                    <Link href='/about-al-ameen-integrated-edu' fontSize={16} fontWeight={500} textDecoration={'underline'} color={'white'} transitionDuration={'0.3s'} _hover={{color: 'gray.800'}}>Al-Ameen Integrated Education College FAQ</Link>
                </Flex>
            </Box>
        </Box>
    </Flex>
  )
}
