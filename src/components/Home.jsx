import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btc from "../assets/btc.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.700"} w={"full "} h={"85vh"}>
      <motion.div
        style={{height: '80vh',
      }}
        
        animate={{
          translateY: "20px"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',

        }}
        
        >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={["2xl", '6xl']}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-19"}
      >
        DeCrypto - A Trading Application
      </Text>
    </Box>
  );
};

export default Home;
