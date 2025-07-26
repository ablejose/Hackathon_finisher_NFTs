import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import FallbackImage from "../Image/FallbackImage";

interface Props {
    children?: ReactNode;
    img?: string;
    link: string;
}

const CardOutline: FC<Props> = (props) => {
    const { children, link, img } = props;
    return (
        <Box 
            border="1px solid" 
            borderColor="primary.700" 
            p={5} 
            borderRadius="lg"
            bg="rgba(26, 0, 51, 0.6)"
            backdropFilter="blur(10px)"
            position="relative"
            _hover={{
                borderColor: "primary.500",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 20px -5px var(--chakra-colors-primary-500)",
            }}
            transition="all 0.2s ease"
        >
            <Link href={link}>
                <FallbackImage 
                    src={img} 
                    alt="Image" 
                    borderRadius="lg" 
                    cursor='pointer' 
                    _hover={{
                        transform: 'scale(1.05)'
                    }}
                    transform='auto' 
                    transition='ease-in' 
                    transitionProperty='all' 
                    transitionDuration='150ms' 
                />
            </Link>
            <Box justifyContent="space-between" mt="3">
                {children}
            </Box>
        </Box>
    )
}

export default CardOutline;