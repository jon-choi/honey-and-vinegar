import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

import logoImage from '../assets/images/honey-vinegar.jpeg';

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Image src={logoImage} width={350} height={200} alt="logo" />
    <Box fontSize="3xl" color="blue.400" fontWeight="bold" justifyContent='center' display='flex' alignItems='center' marginLeft='100px'>
      <Link href='/' paddingLeft='2'>Honey & Vinegar Real Estate</Link>
    </Box>
    
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color='red.400'/>
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;