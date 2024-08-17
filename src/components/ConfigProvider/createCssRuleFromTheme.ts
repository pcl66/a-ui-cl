import { PartialTheme, Theme } from "../../tokens";

export const createCssRuleFromTheme = (
  selector: string,
  theme: Theme | PartialTheme | undefined
): string => {
  if(theme) {
    const cssVarsAsString = (
      Object.keys(theme) as (keyof typeof theme)[]
    ).reduce((cssVarRule, cssVar) => {
      return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
    }, "");

    return `${selector} { ${cssVarsAsString} }`;
  }
  return `${selector} {}`;
}