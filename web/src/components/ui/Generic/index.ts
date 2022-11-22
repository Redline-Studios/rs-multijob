import styled from "styled-components";

export const Text = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
`;

export const TextLarger = styled(Text)`
    font-size: 1.5rem;
`;

export const TextSmaller = styled(Text)`
    font-size: 0.75rem;
`;

export const TextBold = styled(Text)`
    font-weight: 600;
`;

export const TextContainer = styled.div`
    padding: 1.5rem;
`;

export const TextFlexContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`;