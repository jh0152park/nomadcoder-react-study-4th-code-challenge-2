import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Center w="100%" h="100vh" position="fixed" top="0" bottom="0" m="auto">
            <Spinner size="xl" color="red.500" />
        </Center>
    );
}
