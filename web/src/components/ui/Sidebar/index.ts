import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 3vw;
    height: 100vh;

    background-color: #222033;
    border-right: 1px solid #424057;
`;

export const SidebarInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
`;

export const SidebarTabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SidebarTabContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:hover {
        cursor: pointer;
        background-color: #131121;
    }
`;

export const SidebarTabSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-left: 4px solid #02f1b5;
    background-color: #131121;
`;