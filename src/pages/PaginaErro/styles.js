import styled from 'styled-components';

export const ImageField = styled.div`
    display: flex;  
    justify-content: center;
    flex-direction: column;
`;

export const Image = styled.img` 
    object-fit: scale-down;
    height: 60vh;
    align-self: center;
`;

export const Link = styled.a` 
    color: var(--primary);
    font-size: 14px;
    text-decoration: none;
    align-self: center;
    margin-bottom: 20px;
`;