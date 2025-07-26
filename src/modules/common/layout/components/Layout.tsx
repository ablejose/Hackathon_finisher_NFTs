"use client";
import { Box, Divider } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import PoweredByLogo from "./PoweredByLogo";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box 
      minH="100vh"
      bg="linear-gradient(180deg, #14001f 0%, #2d004f 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="brand.700"
        opacity="0.1"
        filter="blur(40px)"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="accent.700"
        opacity="0.1"
        filter="blur(60px)"
        zIndex="0"
      />

      {/* Original layout structure */}
      <Box position="relative" zIndex="1">
        <Navbar />
      </Box>
      <Divider borderColor="primary.700" />
      <Box px="24" py="16" position="relative" zIndex="1">
        {children}
      </Box>
      <PoweredByLogo position="relative" zIndex="1" />
    </Box>
  );
};

export default Layout;