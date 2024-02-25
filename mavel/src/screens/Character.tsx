import { useParams } from "react-router-dom";

export default function Character() {
    const { id: characterId } = useParams();

    return <h1>{characterId}</h1>;
}
