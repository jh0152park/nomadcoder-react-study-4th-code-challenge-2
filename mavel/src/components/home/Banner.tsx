import { Image } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Image
            w="100%"
            src={require("../../resource/images/characters_banner.jpg")}
            objectFit="cover"
        />
    );
}
