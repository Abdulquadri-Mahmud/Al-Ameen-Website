import { Box, Button,Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export default function Contact() {
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.800')} py={{base: 10, md:20}} px={{base: 2, md: 10}}>
        <div className='contactBgImage'>
            <Box  p={{md:4, base: 2}} bg={'gray.200'} w={{xl:'65%', base: '95%'}} rounded={10} margin={1} >
                <h1 className="pt-3 pb-4 text-green-600 text-3xl font-semibold text-center">Connect With Us</h1>
                <form className="md:p-3 p-2 grid grid-cols-1 md:gap-5 gap-2">
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3">
                        <div className="">
                            <input id="name" type="text" className="w-full rounded p-3 text-1xl font-semibold bg-gray-50 outline-2 outline-green-600" placeholder="Name..."/>
                        </div>
                        <div className="">
                            <input id="mobile" type="text" className="w-full rounded p-3 text-1xl font-semibold bg-gray-50 outline-2 outline-green-600" placeholder="Phone..."/>
                        </div>
                        <div className="">
                            <input id="email" type="text" className="w-full rounded p-3 text-1xl font-semibold bg-gray-50 outline-2 outline-green-600" placeholder="Email..."/>
                        </div>
                    </div>
                    <div className="">
                        <select className="w-full md:mt-3 mt-2 rounded p-3 font-semibold text-1xl bg-gray-50 outline-2 outline-green-600">
                            <option>Purpose</option>
                            <option value="property">Property</option>
                            <option value="inquiry">Inquiry</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="">
                        <textarea className="w-full text-1xl font-semibold md:mt-3 mt-2 rounded md:h-36 h-36 p-3 outline-2 outline-green-600 bg-slate-100" placeholder="Type Message" id="message" >

                        </textarea>
                    </div>
                    <div className="flex justify-center">
                        <Button bgColor={'green.600'} _hover={{bg: 'green.500'}} color={'white'} type="submit" className="w-[200px] p-2 font-semibold text-gray-50 rounded">Send Message</Button>
                    </div>
                </form>
                <Flex justifyContent={'space-between'} flexWrap={''} px={2} py={3}>
                    <Box mt={{md: 4, base: 2}} display={{base: 'none', md: 'block'}}>
                        <Button bg={'green.600'} _hover={{bg: 'green.500'}} color={'white'}>Phone Number:&nbsp;
                            <Link to='tel:+234-907-424-8867 '>+234-907-424-8867 </Link>
                        </Button>
                    </Box>
                    <Box mt={{md: 4, base: 2}} display={{md: 'block', base: 'none'}}>
                        <Button bg={'green.600'} _hover={{bg: 'green.500'}} color={'white'}>Email:&nbsp;
                            <Link to='mailto:+234'>almeencenter@gmail.com</Link>
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </div>
    </Box>
  )
}
