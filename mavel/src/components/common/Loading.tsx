import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Center w="100%" h="100vh" position="fixed" top="0" bottom="0" m="auto">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="red.500"
                size="xl"
            />
        </Center>
    );
}
