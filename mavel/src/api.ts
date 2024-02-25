import axios from "axios";
import { QueryFunctionContext } from "react-query";

export async function getEntireCharacter() {
    return await axios.get(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    );
}

export async function getCharacterDetail({ queryKey }: QueryFunctionContext) {
    const [_, id] = queryKey;
    return await axios.get(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
}
