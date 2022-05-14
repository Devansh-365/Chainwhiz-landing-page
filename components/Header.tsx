import { Container, Stack, Heading, Button, Flex, Text, Link, useBreakpointValue, } from '@chakra-ui/react';
import React from 'react';


const Header:React.FC = () => {

    return (
        <Container width="100%" h='calc(100vh)'>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}>
            <Heading fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} w='calc(80vw)'>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: -1,
                left: 0,
                bg: '#d4ff1e',
                zIndex: -1,
              }}>
              Kickstart Your Journey
            </Text>
            <br />{' '}
              <Text as={'span'} color={'#d4ff1e'}>
                In Web3
              </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'} fontSize='20px'>
            Discover Bounties. Contribute to your favorite DAOs and Protocols. Earn in Crypto.
            </Text>
            <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
              <Button rounded={'full'} px={9} border="2px" borderColor="#d4ff1e">
              Post a Bounty
              </Button>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'#d6ff1eba'}
                bg={'#d4ff1e'}
                _hover={{ bg: '#d6ff1eba' }}
                color={'black'}>
                Start Solving Bounties
              </Button>
              <Button rounded={'full'} px={6} border="2px" borderColor="#d4ff1e">
                Vote on Solutions
              </Button>
            </Stack>
            <Text color={'gray.500'} maxW={'3xl'}>
            The mainnet is still a new product milestone. Report bugs and any improvements in our <Link color={'#d4ff1e'} href='https://discord.com/invite/NjxUxWAfuz' isExternal>
            Discord
              </Link>
            </Text>
          </Stack>
        </Container>
      );
}
export default Header;