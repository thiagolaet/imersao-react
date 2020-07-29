import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    border: none;
    font-weight: bold;
    font-size: 16px;
    background-color: var(--primary);
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    }
    &:hover,
    &:focus {
    opacity: .5;
`;

export default Button;