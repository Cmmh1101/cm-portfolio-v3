import { createContext } from "react";

export interface IThemeModeContext {
  dark: string;
  light: string;
  themes: {};
  darkMode: boolean;
  handleToggleTheme: () => void;
}

export const ThemeModeContext =
  createContext<IThemeModeContext | undefined>(undefined);
