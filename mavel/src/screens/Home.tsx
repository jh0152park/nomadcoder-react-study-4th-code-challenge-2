import { useQuery } from "react-query";
import { getEntireCharacter } from "../api";
import { IEntireCharacterResponse } from "../types";

export default function Home() {
    // characters.data.data.results
    const characters = useQuery<IEntireCharacterResponse>(
        ["characters"],
        getEntireCharacter
    );

    if (!characters.isLoading) console.log(characters.data?.data.data.results);

    return null;
}
