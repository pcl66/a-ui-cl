import { mergeClasses } from "@griffel/react";
import { ConfigProviderProps } from "./ConfigProvider";
import { useTag } from "./useTag";

export const useStyles = ({ className, theme }: Partial<ConfigProviderProps>) => {
  const { themeClassName }  = useTag({ theme })
  return mergeClasses(
    'a-ui-configProvider',
    themeClassName,
    className
  )
}