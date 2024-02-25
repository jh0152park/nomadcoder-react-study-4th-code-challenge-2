import { useQuery } from "react-query";
import { ICharacterDetail, ICharacterDetailResponse } from "../../types";
import { getCharacterDetail } from "../../api";
import { useEffect, useState } from "react";
import {
    Accordion,
    Box,
    Center,
    Heading,
    Image,
    Text,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Background from "./Background";
import { ProfileIamges } from "../../profileImage";
import Loading from "../common/Loading";
import ExtraLinks from "./ExtraLinks";
import ExtraInformation from "./ExtraInformation";

const spin = keyframes`
    100% {
        transform: rotateY(360deg);
    }
`;

export default function Detail({
    characterId,
}: {
    characterId: string | number;
}) {
    const spinAnimation = `${spin} 5s linear infinite`;

    const [charData, setCharData] = useState<ICharacterDetail>();
    const character = useQuery<ICharacterDetailResponse>(
        ["character", characterId],
        getCharacterDetail
    );

    useEffect(() => {
        if (!character.isLoading && character.data) {
            setCharData(character.data.data.data.results[0]);
        }
    }, [character]);

    return character.isLoading || !charData ? (
        <Loading />
    ) : (
        <Center w="100%" position="relative">
            <Helmet>
                <title>{charData.name}</title>
            </Helmet>
            <Background
                url={
                    Object.keys(ProfileIamges).includes(
                        charData.name.toLocaleLowerCase()!
                    )
                        ? ProfileIamges[charData.name.toLocaleLowerCase()!]
                        : `${charData.thumbnail.path}.${charData.thumbnail.extension}`
                }
            />
            <VStack position="absolute" top="70px" w="100%">
                <Heading>{charData.name}</Heading>
                <ExtraLinks urls={charData.urls} />
                <Box w="300px" h="300px" mt="30px" animation={spinAnimation}>
                    <Image
                        w="300%"
                        h="100%"
                        borderRadius="full"
                        objectFit="cover"
                        src={
                            Object.keys(ProfileIamges).includes(
                                charData.name.toLocaleLowerCase()!
                            )
                                ? ProfileIamges[
                                      charData.name.toLocaleLowerCase()!
                                  ]
                                : `${charData.thumbnail.path}.${charData.thumbnail.extension}`
                        }
                    />
                </Box>

                <Text
                    w="40%"
                    mt="20px"
                    fontWeight="bold"
                    fontSize="20px"
                    textAlign="center"
                    mb="50px"
                >
                    {charData.description ? charData.description : "-"}
                </Text>

                <Accordion allowToggle w="40%" mb="50px">
                    <ExtraInformation
                        title="Related Events"
                        numOfWork={charData.events.available}
                        works={charData.events.items}
                    />
                    <ExtraInformation
                        title="Related Comics"
                        numOfWork={charData.comics.available}
                        works={charData.comics.items}
                    />
                    <ExtraInformation
                        title="Related Series"
                        numOfWork={charData.series.available}
                        works={charData.series.items}
                    />
                    <ExtraInformation
                        title="Related Stories"
                        numOfWork={charData.stories.available}
                        works={charData.stories.items}
                    />
                </Accordion>
            </VStack>
        </Center>
    );
}
