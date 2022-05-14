import { useColorMode, Box, useColorModeValue, Flex, Stack, Button, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, HStack, Link, Image } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { ReactNode, useEffect, useState } from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
// import { useAuth } from '../context/AuthContext';

const Links = ['Post a Bounty', 'Solve a Bounty', 'Vote a Solutions'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );

const Navbar:React.FC = () => {

    const [sprite, setSprite] = useState("human");
    const [seed, setSeed] = useState(Math.floor(Math.random() * 1000));
      
    // Function to set the current sprite type
    function handleSprite(spritetype: string) {
        setSprite(spritetype);
    }
      
    // Function to generate random seeds for the API
    function handleGenerate() {
        let x = Math.floor(Math.random() * 1000);
        setSeed(x);
    }

    const connectWithMetamask = useMetamask()  
    const address = useAddress();
    const disconnect = useDisconnect()

    const { colorMode, toggleColorMode } = useColorMode();
    return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
                <Image
                  borderRadius='full'
                  boxSize='200px'
                  alt='Chainwhiz'
                  src={'https://app.chainwhiz.app/static/media/new-logo.debd7864.svg'}>
                </Image>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={8}>
            <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
            
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              { !address ? (
                  <Button
                  px={2}
                  colorScheme={'#d6ff1eba'}
                  bg={'#d4ff1e'}
                  _hover={{ bg: '#d6ff1eba' }}
                  color={'black'}
                  onClick={() => connectWithMetamask()}>
                  Connect
                </Button>
                ) : (<Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{`${address.slice(0,4)}...${address.slice(-4)}`}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => handleGenerate()}>Change Avatar</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => disconnect()}>Logout</MenuItem>
                </MenuList>
              </Menu>)}
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </>
    )
}
export default Navbar;