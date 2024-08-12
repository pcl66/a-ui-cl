import { ChildContextProvider, createContext, HTMLAttributes } from "react";
import { PartialTheme, Theme, webLightTheme } from "a-ui-cl";
import { useStyles } from "./useStyles";

export type ConfigProviderValue = Theme | PartialTheme | undefined;
export type ConfigProviderProps = HTMLAttributes<ChildContextProvider<ConfigProviderValue>> & {
  theme?: Theme | PartialTheme;
};

const ThemeContext = createContext<Theme | PartialTheme | undefined>(undefined);
export const ConfigProvider = ({
  className,
  theme = webLightTheme,
  children,
  ...restProps
}: ConfigProviderProps) => {
  const cls = useStyles({ className, theme })
  return (
    <ThemeContext.Provider
      value={theme}
      {...restProps}
    >
      <div className={cls}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};