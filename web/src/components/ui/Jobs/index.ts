import styled, { keyframes } from "styled-components";
import { ITheme } from "../../../types/theme";
import { ThemeConfig } from "../ThemeConfig/config";

export const JobsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 3vw;

  width: 17vw;
  height: 100vh;

  @media (max-width: 1920px) {
    width: 20vw;
  }
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

export const JobDisplayContainer = styled.div<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3rem;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  animation: ${fadeIn} 0.3s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  border-radius: 5px;
`;

export const JobCardContainer = styled.div<ITheme>`
  display: flex;
  background-color: ${(props) =>
    props.theme === "redline"
      ? ThemeConfig.redline.jobCardContainer
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardContainer
      : ThemeConfig.default.jobCardContainer};
  border-radius: 0.5rem;
  border: ${(props) =>
    props.theme === "redline"
      ? ThemeConfig.redline.jobCardBorder
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardBorder
      : ThemeConfig.default.jobCardBorder};
`;

export const JobCardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
`;

export const JobCardDataDisplay = styled.div<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: ${(props) =>
    props.theme === "redline"
      ? ThemeConfig.redline.jobCardBorder
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardBorder
      : ThemeConfig.default.jobCardBorder};
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
  selected: boolean;
  theme: ITheme;
}

export const JobCardSelectButton = styled.div<IJobCardBottonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.selected
      ? props.theme === "redline"
        ? ThemeConfig.redline.jobCardSelectButtonBGSelected
        : props.theme === "qbox"
        ? ThemeConfig.qbox.jobCardSelectButtonBGSelected
        : ThemeConfig.default.jobCardSelectButtonBGSelected
      : props.theme === "redline"
      ? ThemeConfig.redline.jobCardSelectButtonBGUnselected
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardSelectButtonBGUnselected
      : ThemeConfig.default.jobCardSelectButtonBGUnselected};
  border: ${(props) =>
    props.selected
      ? props.theme === "redline"
        ? ThemeConfig.redline.jobCardSelectButtonBorderSelected
        : props.theme === "qbox"
        ? ThemeConfig.qbox.jobCardSelectButtonBorderSelected
        : ThemeConfig.default.jobCardSelectButtonBorderSelected
      : props.theme === "redline"
      ? ThemeConfig.redline.jobCardSelectButtonBorderUnselected
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardSelectButtonBorderUnselected
      : ThemeConfig.default.jobCardSelectButtonBorderUnselected};
  border-radius: 0.5rem;
  height: 3rem;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) =>
    props.selected
      ? props.theme === "redline"
        ? ThemeConfig.redline.jobCardSelectButtonTextColorSelected
        : props.theme === "qbox"
        ? ThemeConfig.qbox.jobCardSelectButtonTextColorSelected
        : ThemeConfig.default.jobCardSelectButtonTextColorSelected
      : props.theme === "redline"
      ? ThemeConfig.redline.jobCardSelectButtonTextColorUnselected
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardSelectButtonTextColorUnselected
      : ThemeConfig.default.jobCardSelectButtonTextColorUnselected};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: ${(p) => (p.selected ? "not-allowed" : "pointer")};
    background-color: ${(props) =>
    props.selected
      ? props.theme === "redline"
        ? ThemeConfig.redline.jobCardSelectButtonHoverBGSelected
        : props.theme === "qbox"
        ? ThemeConfig.qbox.jobCardSelectButtonHoverBGSelected
        : ThemeConfig.default.jobCardSelectButtonHoverBGSelected
      : props.theme === "redline"
      ? ThemeConfig.redline.jobCardSelectButtonHoverBGUnselected
      : props.theme === "qbox"
      ? ThemeConfig.qbox.jobCardSelectButtonHoverBGUnselected
      : ThemeConfig.default.jobCardSelectButtonHoverBGUnselected};
  }
`;
