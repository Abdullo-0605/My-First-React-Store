import styled from "styled-components";

export const Form = styled.form `
    width: 400px;
    margin: auto;
    display: ${({ open }) => open ? "block" : "none"};
    input, textarea, button{
        padding: 10px;
        display: block;
        width: 100%;
        margin: 10px 0;
    }
    button{
        cursor: pointer;
    }
`;

export const Card = styled.div `
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    background-color: gold;
    margin-top: 50px;
    p{

    }
    button{
        padding: 10px;
        color: white;
        display: block;
        width: 100%;
        border: none;
        background-color: black;
        border-radius: 10px;
        margin: 2px;
        cursor: pointer;
    }
`;

export const CardsWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
`;

export const Button = styled.button `
    cursor: pointer;
    background-color: gold;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
    width: 400px;
    margin-left: 37%;
    margin-top: 10px;
`