import { useColorMode } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { MoonIcon,SunIcon } from '@chakra-ui/icons';

export default function Themes() {
    const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button onClick={toggleColorMode} color={'white'} bg={useColorModeValue('white', 'gray.700')} _hover={{bg: useColorModeValue('white', 'gray.700')}}>
        {
            colorMode === 'light' ? 
            <MoonIcon color={useColorModeValue('gray.600', '')}/> : 
            <SunIcon color={useColorModeValue('', 'white')}/>
        }
      </Button>
    </Box>
  )
}
