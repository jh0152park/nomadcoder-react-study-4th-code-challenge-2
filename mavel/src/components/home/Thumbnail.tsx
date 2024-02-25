import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
    name: string;
    imagePath: string;
    imageExtension: string;
}

export default function Thumbnail({ name, imagePath, imageExtension }: IProps) {
    let characterName = [];
    const [isHover, setIsHover] = useState(false);

    if (name.includes("(")) {
        characterName.push(name.split("(")[0]);
        characterName.push("(" + name.split("(")[1]);
    } else {
        characterName.push(name);
    }

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
                {characterName.map((n, i) => (
                    <Text key={i} fontWeight="bold" fontSize="20px">
                        {n}
                    </Text>
                ))}
            </Box>
        </VStack>
    );
}
