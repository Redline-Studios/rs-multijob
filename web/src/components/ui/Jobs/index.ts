import styled, { keyframes } from "styled-components";

export const JobsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 3vw;

  width: 17vw;
  height: 100vh;
`;

export const JobInnerContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const JobDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 3rem;
    height: 100%;
    padding: 1rem;
    overflow: auto;
    animation: ${fadeIn} 0.3s ease-in-out;


    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: #111213;
    }
`;

export const JobCardContainer = styled.div`
    display: flex;
    background-color: #222033;
    border-radius: 0.5rem;
`;

export const JobCardInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
`;

export const JobCardDataDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #4d4c5b;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    height: 64px;
`;

export const JobCardDataDisplayContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`;

interface IJobCardBottonProps {
    selected: boolean
}


export const JobCardSelectButton = styled.div<IJobCardBottonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${p => p.selected ? "" : "#02f1b5"};
    border: ${p => p.selected ? "2px solid #919099" : ""};
    border-radius: 0.5rem;
    height: 3rem;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    color: ${p => p.selected ? "#d5d5d6" : "#000"};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover {
        cursor: ${p => p.selected ? "not-allowed" : "pointer"};;
        background-color: ${p => p.selected ? "" : "#04c998"};
    }
`;
