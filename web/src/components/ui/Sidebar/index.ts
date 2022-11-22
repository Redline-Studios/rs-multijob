import styled from "styled-components";
import { ITheme } from "../../../types/theme";
import { ThemeConfig } from "../ThemeConfig/config";

export const SidebarContainer = styled.div<ITheme>`
    position: absolute;
    top: 0;
    left: 0;

    width: 3vw;
    height: 100vh;

    background-color: ${(props) =>
        props.theme === "redline"
            ? ThemeConfig.redline.sidebarBackground
            : props.theme === "qbox"
            ? ThemeConfig.qbox.sidebarBackground
            : ThemeConfig.default.sidebarBackground};
            
    border-right: 1px solid ${(props) =>
        props.theme === "redline"
            ? ThemeConfig.redline.sidebarBorderRight
            : props.theme === "qbox"
            ? ThemeConfig.qbox.sidebarBorderRight
            : ThemeConfig.default.sidebarBorderRight};

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

export const SidebarTabContainer = styled.div<ITheme>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:hover {
        cursor: pointer;
        background-color: ${(props) =>
            props.theme === "redline"
                ? ThemeConfig.redline.sidebarTabHoverBG
                : props.theme === "qbox"
                ? ThemeConfig.qbox.sidebarTabHoverBG
                : ThemeConfig.default.sidebarTabHoverBG};

    }
`;

export const SidebarTabSelectedContainer = styled.div<ITheme>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-left: ${(props) => 
        props.theme === "redline"
            ? ThemeConfig.redline.sidebarTabSelectedBorderLeft
            : props.theme === "qbox"
            ? ThemeConfig.qbox.sidebarTabSelectedBorderLeft
            : ThemeConfig.default.sidebarTabSelectedBorderLeft};

    background-color: ${(props) =>
        props.theme === "redline"
            ? ThemeConfig.redline.sidebarTabSelectedBG
            : props.theme === "qbox"
            ? ThemeConfig.qbox.sidebarTabSelectedBG
            : ThemeConfig.default.sidebarTabSelectedBG};
            

`;