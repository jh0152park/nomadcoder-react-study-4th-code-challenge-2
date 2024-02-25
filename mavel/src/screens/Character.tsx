import { useParams } from "react-router-dom";
import Detail from "../components/character/Detail";

export default function Character() {
    const { id: characterId } = useParams();

    return <Detail characterId={characterId!} />;
}
