import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";

interface IExtraInfoProps {
    title: string;
    numOfWork: number;
    works: {
        name: string;
    }[];
}

export default function ExtraInformation({
    title,
    numOfWork,
    works,
}: IExtraInfoProps) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                        {title}: {numOfWork}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            {works.map((work, index) => (
                <AccordionPanel key={index}>{work.name}</AccordionPanel>
            ))}
        </AccordionItem>
    );
}
