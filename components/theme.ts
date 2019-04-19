export interface ThemeInterface {
  background: (isDarkMode?: boolean) => string;
  fontColor: (isDarkMode?: boolean) => string;

  fontFamilySansSerif: string;
  fontFamilyMonospace: string;

  containerWidth: number;
}

export const theme: ThemeInterface = {
  background: isDarkMode => {
    return isDarkMode ? "#282c34" : "#fff";
  },
  fontColor: isDarkMode => {
    return isDarkMode ? "#fff" : "#282c34";
  },

  fontFamilySansSerif:
    '"Nunito Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;',
  fontFamilyMonospace:
    '"Roboto Mono", "SF Mono", "Segoe UI Mono", "Droid Sans Mono", Menlo, monospace;',
  containerWidth: 1100
};
