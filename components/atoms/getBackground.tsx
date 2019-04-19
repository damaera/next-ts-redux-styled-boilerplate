import { ThemeInterface } from "../theme";
export const getBackground = (
  background?: string,
  theme?: ThemeInterface,
  bgDefault?: string
) => {
  if (background && theme[background]) {
    return theme[background];
  }
  if (bgDefault) {
    return bgDefault;
  }
  return theme.background();
};

export const getFontColor = (
  fontColor?: string,
  theme?: ThemeInterface,
  colorDefault?: string
) => {
  if (fontColor && theme[fontColor]) {
    return theme[fontColor];
  }
  if (colorDefault) {
    return colorDefault;
  }
  return theme.fontColor();
};
