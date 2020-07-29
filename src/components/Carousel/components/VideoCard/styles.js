import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  /* transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  } */
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  p {
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
    font-size: 18px;
  }

  &:hover p {
    opacity: 1;
  }

  span {
    transition: opacity 0.3s;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &:hover span {
    opacity: 1;
  } 
  
`;
