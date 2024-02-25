import { Box, Center, Grid, GridItem } from "@chakra-ui/react";

export default function Paint() {
    const dummy = new Array(40).fill(0);

    console.log(dummy);

    return (
        <Center w="100%" minH="100vh" justifyContent="center" my="50px">
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(5, 1fr)",
                }}
                gap={10}
            >
                {dummy.map((t, i) => (
                    <Box w="200px" h="270px" bg="pink" key={i} />
                ))}
            </Grid>
        </Center>
    );
}
