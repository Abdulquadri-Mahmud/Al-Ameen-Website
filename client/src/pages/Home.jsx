import Hero from '../components/Hero'
import { Box } from '@chakra-ui/react'
import ACMQ from '../components/ACMQ'
import AlAmeenCenter from '../components/Al-Ameen-Center'
import Contact from '../components/Contact'
import Whatsapp from '../components/Whatsapp'
import OurProgram from '../components/OurProgram'
import Page from '../components/Al-Ameen-Integrated-College/Page';
import Page3 from '../components/Al-Ameen-estate/Page3';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box position={'relative'}>
        <Header/>
        <Hero/>
        <AlAmeenCenter/>
        <ACMQ/>
        <OurProgram/>
        <Contact/>
        <Whatsapp/>
        <Page/>
        <Page3/>
        <Footer/>
    </Box>
  )
}
