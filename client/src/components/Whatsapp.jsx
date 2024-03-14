import { Flex, Link } from '@chakra-ui/react';
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} zIndex={10} position={'fixed'} bottom={{md:10, base: 5}} right={{md:10, base: 5}} width={'45px'} h={'45px'} rounded={'full'} bg={'green.600'}>
        <Link href='/'>
            <FaWhatsapp className='text-gray-100 text-2xl'/>
        </Link>
    </Flex>
  )
}
