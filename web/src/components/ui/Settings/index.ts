import styled from "styled-components";
import { ITheme } from "../../../types/theme";
import { ThemeConfig } from "../ThemeConfig/config";

export const SettingsContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
`;

export const SettingsThemeDropdown = styled.select<ITheme>`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => 
    props.theme === "redline"
      ? ThemeConfig.redline.settingsThemeDropdownBackground
      : props.theme === "qbox"
      ? ThemeConfig.qbox.settingsThemeDropdownBackground
      : ThemeConfig.default.settingsThemeDropdownBackground};
  color: ${(props) =>
    props.theme === "redline"
      ? ThemeConfig.redline.settingsThemeDropdownTextColor
      : props.theme === "qbox"
      ? ThemeConfig.qbox.settingsThemeDropdownTextColor
      : ThemeConfig.default.settingsThemeDropdownTextColor};

  font-size: 1rem;
  font-weight: 500;
  margin: 1rem;
  height: 3rem;
`;

export const SettingsThemeDropdownOption = styled.option`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
`;
