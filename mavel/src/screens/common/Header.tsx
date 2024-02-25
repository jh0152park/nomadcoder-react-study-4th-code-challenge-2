import { Center, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToTop } from "../../libs/util";

export default function Header() {
    const navigate = useNavigate();
    const logo =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/220px-Marvel_Logo.svg.png";

    return (
        <Center w="100%" h="70px">
            <Image
                w="200px"
                h="100%"
                src={logo}
                objectFit="cover"
                _hover={{ cursor: "pointer" }}
                transition="all 0.1s linear"
                onClick={() => {
                    goToTop();
                    navigate("/");
                }}
            />
        </Center>
    );
}
