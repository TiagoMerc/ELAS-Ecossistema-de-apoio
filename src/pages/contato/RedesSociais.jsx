import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import RedesIMG from '../../images/redes.png'
import InstagramIcon from '../../images/instagram.svg'
import FacebookIcon from '../../images/facebook.svg'
import WhatsappIcon from '../../images/whatsapp.svg'
import TikTokIcon from '../../images/tiktok.svg'


function RedesSociais() {
  return(
    <Container
    as="section"
    mt={["50px", "50px", "50px", "150px"]}
    maxW="100vw"
    display="flex"
    flexDir={["column", "column", "column", "row"]}
    justifyContent="space-between"
    alignItems="flex-start"
    padding={[
      "0 30px 30px 30px",
      "0 30px 30px 30px",
      "0 30px 30px 30px",
      "0 50px 30px 50px",
      "0 170px 30px 170px",
    ]}
  >
    <Box
      maxW={["100%", "100%", "100%", "800px"]}
      display="flex"
      flexDir="column"
    >
      <Heading
        color="#5F40A6"
        mb="12px"
        fontWeight="700"
        fontSize={["4xl", "4xl", "4xl", "40px"]}
        lineHeight={["4xl", "4xl", "4xl", "53px"]}
      >
        Ou acesse o nosso <br/>Instagram
      </Heading>
      <Text
        color="#5F40A6"
        fontWeight="400"
        fontSize={["md", "md", "md", "16px"]}
        lineHeight={["md", "md", "md", "32px"]}
        mr={["0", "0", "0", "132px"]}
        textAlign="justify"
        mb="30px"
      >
       Estamos no Instagram para que você participe e esteja próxima do Ecossistema. 

      <Text fontWeight="700">TODXS SÃO BEM-VINDXS</Text>

      Nosso compromisso é promover um Ecossistema seguro e acolhedor para todxs.

      <Text fontWeight="700">EXPLORE AS NOVIDADES</Text>

      Podemos oferecer para você novidades sobre negócios e tecnologia. 

      <Text fontWeight="700">DESTAQUE-SE NO ECOSSISTEMA</Text>

      Conecte-se com mulheres empreendedoras, aumente sua influência e participe de uma rede de apoio.

      <Text fontWeight="700">CRESÇA CONOSCO</Text>

      Compartilhe e expanda seu potencial em nossso Ecossistema.
      </Text>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap='20px'
      >
        <Image 
        src={InstagramIcon}
        alt="Icone da rede social Instagram"
        w="27.5px" 
        />
        {/* <Image 
        src={TikTokIcon}
        alt="Icone da rede social TikTok"
        w="27.5px" 
        />
        <Image 
        src={WhatsappIcon}
        alt="Icone da rede social Whatsapp"
        w="27.5px" 
        />
        <Image 
        src={FacebookIcon}
        alt="Icone da rede social Facebook"
        w="27.5px" 
        /> */}
      </Box>
    </Box>
    <Box 
      maxW={["100%", "100%", "100%", "800px"]}
      display="flex"
      w='70%'
      flexDir="column"
      padding="30px"

    
    >
      <Image
      src={RedesIMG}
      alt="Imagem de algumas mãos segurando telefone acessando redes sociais"
      objectFit='cover'
      maxW={["300px", "300px", "400px", "400px", "627px"]}
      // h={["218px", "218px", "291px", "291px", "456px"]}
   
      />
    </Box>
   
  </Container>
  )
}

export default RedesSociais;
