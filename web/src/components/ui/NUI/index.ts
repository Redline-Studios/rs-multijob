import styled from "styled-components";
import { ITheme } from "../../../types/theme";
import { ThemeConfig } from "../ThemeConfig/config";

export const NUIContainer = styled.div<ITheme>`
  position: absolute;
  top: 0;
  left: 0;

  width: 20vw;
  height: 100vh;

  background-color: ${(props) =>
    props.theme === "redline"
      ? ThemeConfig.redline.NUIBackground
      : props.theme === "qbox"
      ? ThemeConfig.qbox.NUIBackground
      : props.theme === "nopixel"
      ? ThemeConfig.nopixel.NUIBackground
      : ThemeConfig.default.NUIBackground};

  overflow: hidden;

  @media (max-width: 1920px) {
    width: 23vw;
  }
`;
