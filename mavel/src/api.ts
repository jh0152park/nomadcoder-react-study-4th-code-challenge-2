import axios from "axios";

export async function getEntireCharacter() {
    return await axios.get(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    );
}
