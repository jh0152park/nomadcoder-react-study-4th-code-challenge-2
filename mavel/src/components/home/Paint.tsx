import { useQuery } from "react-query";
import { Center, Grid } from "@chakra-ui/react";
import { getEntireCharacter } from "../../api";
import { IEntireCharacterResponse } from "../../types";
import Thumbnail from "./Thumbnail";

export default function Paint() {
    const characters = useQuery<IEntireCharacterResponse>(
        ["characters"],
        getEntireCharacter
    );

    return (
        <Center w="100%" minH="100vh" my="50px">
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(5, 1fr)",
                }}
                gap={10}
            >
                {characters.data?.data.data.results.map((character) => (
                    <Thumbnail
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        imagePath={character.thumbnail.path}
                        imageExtension={character.thumbnail.extension}
                    />
                ))}
            </Grid>
        </Center>
    );
}
