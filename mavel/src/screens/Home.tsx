import { useQuery } from "react-query";
import { getEntireCharacter } from "../api";
import { IEntireCharacterResponse } from "../types";
import Loading from "../components/common/Loading";
import { Suspense } from "react";
import Banner from "../components/home/Banner";
import Paint from "../components/home/Paint";

export default function Home() {
    const characters = useQuery<IEntireCharacterResponse>(
        ["characters"],
        getEntireCharacter
    );

    console.log(characters.data?.data.data.results);

    return (
        <>
            <Banner />
            <Suspense fallback={<Loading />}>
                <Paint />
            </Suspense>
        </>
    );
}
