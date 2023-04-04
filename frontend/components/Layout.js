import Footer from "./Footer";
import Navbar from "./Navbar";
import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
    <Grid templateColumns="1fr 2fr 2fr 2fr" bg="gray.200">
        <GridItem colSpan="4">
          <Navbar />
        </GridItem>

        <GridItem as="aside" colSpan={{sm: 3, md:2, lg:1}} bg="purple.400" minHeight="100vh" rounded={5} >
          <Sidebar />
        </GridItem>

        <GridItem as="main" colSpan={{md:2, lg:3}} pl="15px">
          {children}
        </GridItem>

        <GridItem colSpan="4">
          <Footer />
        </GridItem>

    </Grid>
  )
}
