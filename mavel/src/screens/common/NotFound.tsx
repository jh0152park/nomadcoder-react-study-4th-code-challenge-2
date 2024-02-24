import { Center, Heading, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Center w="100%" h="100vh">
            <Image
                w="100%"
                h="100%"
                src="resource/images/notfound.jpg"
                objectFit="cover"
                position="fixed"
                zIndex="98"
            />
            <VStack zIndex="99">
                <Heading fontSize="70px" fontFamily="Bungee Spice">
                    Page Not Found
                </Heading>
                <Heading
                    fontSize="70px"
                    fontFamily="Bungee Spice"
                    _hover={{ cursor: "pointer", transform: ["scale(1.1)"] }}
                    transition="all 0.1s linear"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    GO TO HOME
                </Heading>
            </VStack>
        </Center>
    );
}
