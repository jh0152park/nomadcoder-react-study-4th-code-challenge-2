import { HStack } from "@chakra-ui/react";
import { MyButton } from "./MyButton";
import { useNavigate } from "react-router-dom";

interface IProps {
    urls: {
        type: string;
        url: string;
    }[];
}

export default function ExtraLinks({ urls }: IProps) {
    const navigate = useNavigate();

    function onGoBackClick() {
        navigate(-1);
    }

    function onButtonClick(url: string) {
        window.open(url);
    }

    return (
        <HStack mt="10px">
            <MyButton onClick={onGoBackClick}>Go Back</MyButton>
            {urls.map((info, index) => (
                <MyButton key={index} onClick={() => onButtonClick(info.url)}>
                    {info.type.toUpperCase()}
                </MyButton>
            ))}
        </HStack>
    );
}
