import React from "react";

// Chakra imports
import {Flex, Image, useColorModeValue} from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
        <Image src="https://navigatorbusinesscenter.rs/images/logoheader.png" width="200px" height="70px"/>
        <br/>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
