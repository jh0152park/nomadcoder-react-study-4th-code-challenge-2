import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
    name: string;
    imagePath: string;
    imageExtension: string;
}

export default function Thumbnail({ name, imagePath, imageExtension }: IProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <VStack
            w="230px"
            h="300px"
            bg="black"
            position="relative"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            _hover={{ cursor: "pointer" }}
        >
            <Box
                w="100%"
                h={isHover ? "100%" : "62%"}
                bg="red.500"
                transition="all 0.2s linear"
            />
            <Box overflow="hidden" w="100%" h="60%" position="absolute">
                <Image
                    src={`${imagePath}.${imageExtension}`}
                    objectFit="cover"
                    transform={isHover ? "scale(1.1)" : "scale(1.0)"}
                    transition="all 0.2s linear"
                />
            </Box>
            <Box w="100%" position="absolute" top="66%" left="5%">
                <Text fontWeight="bold" fontSize="20px">
                    {name}
                </Text>
            </Box>
        </VStack>
    );
}
