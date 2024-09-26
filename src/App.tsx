import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Button,
  ButtonGroup,
  SimpleGrid,
  HStack,
  Avatar, 
  AvatarBadge, 
  AvatarGroup,
  Wrap,
  WrapItem,
  extendTheme

} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Build your next idea even faster.</Heading>
    <Text>'Choose from over 180+ beautifully designed components, made by the creators of Chakra UI. The perfect starting line for your next project.</Text>
    <ButtonGroup gap='4'>
      <Button colorScheme='teal'size='lg'>Buy now</Button>
      <Button colorScheme='blackAlpha'size='lg'variant='outline'>View components</Button>
    </ButtonGroup>

 <AvatarGroup size='md' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>


    <Text fontSize='5xl' align='center'>What can you expect?</Text>
    <Text align='center'>'A bundle of 180+ ready-to-use, responsive and accessible components with clever structured sourcecode files.</Text>

    <SimpleGrid columns={2} spacing={10}>
      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>180+ Components</Heading>
          <Text>Chakra UI Pro has 180+ components with source code to help you develop your project faster.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>Production Ready</Heading>
          <Text>Effortlessly create your next production-ready experience with Chakra UI Pro components.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>Light & Dark</Heading>
          <Text>All our components come with a light and dark color mode by default.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>Themeable</Heading>
          <Text>Your style. Your brand. Customize the components as you need them. It's that simple.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>180+ Components</Heading>
          <Text>Chakra UI Pro has 180+ components with source code to help you develop your project faster.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>Responsive Design</Heading>
          <Text>Our components look great everywhere - whether on mobile, tablet or desktop</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>TypeScript</Heading>
          <Text>Each component is written in TypeScript, laying the foundation for scalability of your project.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>Developer Friendly</Heading>
          <Text>Chakra UI Pro has 180+ components with source code to help you develop your project faster.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>Accessible</Heading>
          <Text>Accessibility first. That's why we pay attention to accessibility right from the start.</Text>
          </Box>
      </HStack>
      </Box>

      <Box>
        <HStack spacing='24px'align='top'>
          <Box w='40px' h='40px' bg='yellow.200'>
          1
          </Box>
          <Box>
          <Heading size='md'>180+ Components</Heading>
          <Text>Chakra UI Pro has 180+ components with source code to help you develop your project faster.</Text>
          </Box>
      </HStack>
      </Box>

      
    </SimpleGrid>
    
  </ChakraProvider>
)
