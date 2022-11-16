import styled from "styled-components";

export const SettingsContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
`;

export const SettingsThemeDropdown = styled.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #222033;
  color: #e8e8e8;
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
