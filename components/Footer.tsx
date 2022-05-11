import { Box, useColorModeValue, Container, Stack, SimpleGrid,Text, Image, Heading, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaDiscord, FaTelegram} from 'react-icons/fa'

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

const Footer:React.FC = () => {    
    return (
        <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        >
        <Container as={Stack} maxW={'10xl'} py={10} px={10} >
            <SimpleGrid
            templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
            spacing={8} >
            <Stack spacing={6} align={{base:'center' ,md:'flex-start'}}>
                <Image
                  borderRadius='full'
                  boxSize='100px'
                  w={200}
                  alt='Chainwhiz'
                  src={'https://app.chainwhiz.app/static/media/new-logo.debd7864.svg'}>
                </Image>
                <Box w='80%'>
                    <Text fontSize={'sm'}>
                    Chainwhiz is an open-source bounty marketplace connecting Web3 projects with builders and communities.
                    </Text>
                    <Text fontSize={'sm'}>
                    Our mission is to build a transparent and community-centric bounty platform for scaling and forming communities.
                    </Text>
                </Box>

            </Stack>
            <Stack align={{base:'center' ,md:'flex-start'}}>
                <Link href={'#'}>Launch App</Link>
                <Link href={'#'}>White Paper</Link>
                <Link href={'#'}>Documentation</Link>
                <Link href={'#'}>Polygon Network</Link>
                <Link href={'#'}>Product Guidelines</Link>
                <Link href={'#'}>Brand Kit</Link>
            </Stack>
            <Stack align={{base:'center' ,md:'flex-start'}}>
                <Link href={'#'}>Collective Intelligence</Link>
                <Link href={'#'}>Articles</Link>
                <Link href={'#'}>Newsletter</Link>
                <Link href={'#'}>Disclaimer</Link>
                <Link href={'#'}>FAQs</Link>
                <Link href={'#'}>hello@chainwhiz.app</Link>
            </Stack>
            <Stack align={{base:'center' ,md:'flex-start'}}>
                <Link href={'#'}>Help Center</Link>
                <Link href={'#'}>Terms of Service</Link>
                <Link href={'#'}>Legal</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={{base:'center' ,md:'flex-start'}}>
                <Image
                src={'https://app.chainwhiz.app/static/media/footer.ea2982a1.png'}
                boxSize='200px'>
                </Image>
                <Flex as='span' gap={9} justifyContent='space-center'>
                    <Icon as={FaTelegram} />
                    <Icon as={FaDiscord} />
                    <Icon as={AiOutlineTwitter} />
                </Flex>
            </Stack>
            </SimpleGrid>
        </Container>
        </Box>
    )
}
export default Footer;