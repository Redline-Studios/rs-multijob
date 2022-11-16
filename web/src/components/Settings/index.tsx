import React from "react";
import { TextContainer, TextSmaller, TextBold } from "../ui/Generic";
import {
  SettingsContainer,
  SettingsThemeDropdown,
  SettingsThemeDropdownOption,
} from "../ui/Settings";

export default function Settings() {
  return (
    <SettingsContainer>
      <TextContainer style={{ paddingLeft: "1rem" }}>
        <TextSmaller>CATEGORY</TextSmaller>
        <TextBold>Settings</TextBold>
      </TextContainer>
      <SettingsThemeDropdown >
       <SettingsThemeDropdownOption disabled selected>Pick a Theme</SettingsThemeDropdownOption>
        <SettingsThemeDropdownOption>QBox</SettingsThemeDropdownOption>
        <SettingsThemeDropdownOption>QBCore</SettingsThemeDropdownOption>
        <SettingsThemeDropdownOption>Project Sloth</SettingsThemeDropdownOption>
      </SettingsThemeDropdown>
    </SettingsContainer>
  );
}
