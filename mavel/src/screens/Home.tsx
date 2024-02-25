import { useQuery } from "react-query";
import { getEntireCharacter } from "../api";
import { IEntireCharacterResponse } from "../types";
import Loading from "../components/common/Loading";

export default function Home() {
    const characters = useQuery<IEntireCharacterResponse>(
        ["characters"],
        getEntireCharacter
    );

    // if (!characters.isLoading) console.log(characters.data?.data.data.results);
    console.log(characters.data);

    return (
        <>
            <Loading />
        </>
    );
}
