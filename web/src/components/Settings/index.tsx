import React from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { TextContainer, TextSmaller, TextBold } from "../ui/Generic";
import {
  SettingsContainer,
  SettingsThemeDropdown,
  SettingsThemeDropdownOption,
} from "../ui/Settings";

export default function Settings() {

  const { theme, setTheme } = useTheme();

  function handleThemeChange(e: any) {
    setTheme(e.target.value);
  }

  return (
    <SettingsContainer>
      <TextContainer style={{ paddingLeft: "1rem" }}>
        <TextSmaller>CATEGORY</TextSmaller>
        <TextBold>Settings</TextBold>
      </TextContainer>
      <SettingsThemeDropdown onChange={handleThemeChange} theme={theme}>
        <SettingsThemeDropdownOption value='redline' selected={theme === 'redline' ? true : false}>redline</SettingsThemeDropdownOption>
        <SettingsThemeDropdownOption value='qbox' selected={theme === 'qbox' ? true : false}>qbox</SettingsThemeDropdownOption>
      </SettingsThemeDropdown>
    </SettingsContainer>
  );
}
