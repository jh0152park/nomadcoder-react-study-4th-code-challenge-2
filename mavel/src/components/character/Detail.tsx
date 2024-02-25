import { useQuery } from "react-query";
import { ICharacterDetail, ICharacterDetailResponse } from "../../types";
import { getCharacterDetail } from "../../api";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Background from "./Background";
import { ProfileIamges } from "../../profileImage";
import Loading from "../common/Loading";

export default function Detail({
    characterId,
}: {
    characterId: string | number;
}) {
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

    return character.isLoading ? (
        <Loading />
    ) : (
        <>
            <Helmet>
                <title>{character.data?.data.data.results[0].name}</title>
            </Helmet>
            <VStack>
                <Background
                    url={
                        Object.keys(ProfileIamges).includes(
                            character.data?.data.data.results[0].name.toLocaleLowerCase()!
                        )
                            ? ProfileIamges[
                                  character.data?.data.data.results[0].name.toLocaleLowerCase()!
                              ]
                            : `${character.data?.data.data.results[0].thumbnail.path}.${character.data?.data.data.results[0].thumbnail.extension}`
                    }
                />
            </VStack>
        </>
    );
}
