import { styled } from "styled-components";

export const MyButton = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    padding-top: 4px;
    font-weight: bold;
    font-family: "Roboto Condense";
    background: linear-gradient(-45deg, transparent 15px, #e53e3e 0) right,
        linear-gradient(135deg, transparent 15px, #e53e3e 0) left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
    &:hover {
        color: white;
        cursor: pointer;
        background: linear-gradient(-45deg, transparent 15px, #c53030 0) right,
            linear-gradient(135deg, transparent 15px, #c53030 0) left;
        background-size: 50% 100%;
        background-repeat: no-repeat;
    }
`;
