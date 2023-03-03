import React from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Text,
  Heading,
  VStack,
  HStack,
  Container,
  Box
} from "@chakra-ui/react";
import foto from "../assets/imagen/MUNDOHENRY-1.jpg";




const Home = () => {
  return (
    <>
      <VStack bgImage={foto} bgSize="cover" bgPosition="center" 
      h="1010px"
      >
          <VStack>
          <HStack> 
          <Box
            mt={["250px", "200px", "150px", "70px", "70px"]}
            display="flex"
            pt="50px"
            bgGradient='linear(to-l, yellow, white)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
            textAlign="center"
  
          >
              HENRY GAME ON
              
              </Box>
              
              </HStack> 
          <Text
            color="white"
            textAlign="center"
            fontSize="20"
          >
            Un espacio donde podras codear jugando
          </Text>
        </VStack>


        <HStack justifyContent="space-evenly" >
          <VStack h="310px" color="white" justify="flex-start" fontSize="20px">
            <Link to="/games">
              <Button
                variant="ghost"
                _hover={{ bg: "yellow", color: "black" }}
                color="yellow"
                fontSize="22px"
                as="u"
                mt={["0px", "0px", "0px", "393px", "393px"]}
              >
                Games👾
              </Button>
            </Link>
           
            <Container
              w="80%"
              textAlign="center"
              _hover={{
                bg: "rgba(201, 201, 59, 0.455)",
                transition: "0.2s ease",
              }}
            >
              HenryGames es una plataforma de juegos tematicos de programacion
              ,construidos con javascript, para entretenerse y aprender mientras
              tanto.
            </Container>
            
          </VStack> 


           <VStack h="300px" color="white" justifyContent="flex-start" fontSize="20px" >
            <Link to="/docs">
              <Button
                variant="ghost"
                _hover={{ bg: "yellow", color: "black" }}
                color="yellow"
                fontSize="22px"
                as="u"
                mt={["0px", "0px", "0px", "274px", "274px"]}
              >
                HenryDocs 📑
              </Button>
            </Link>
            
            <Container
              w="80%"
              textAlign="center"
              _hover={{
                bg: "rgba(201, 201, 59, 0.455)",
                transition: "0.2s ease",
                
              }}
             
            >
              HenryDocs es una plataforma social en la que puedes compartir
              documentos, resumenes, informacion util y demas a la comunidad y
              esta a su vez dar feedback con su like👍
            </Container>
          
          </VStack>
        </HStack>
        </VStack>
     
    </>
  );
};

export default Home;

//
//
//
//
//
