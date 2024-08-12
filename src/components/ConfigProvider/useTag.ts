import { useId, useLayoutEffect, useMemo, useRef } from "react";
import { ConfigProviderProps } from "./ConfigProvider";
import { createCssRuleFromTheme } from "./createCssRuleFromTheme";


export const useTag = ({ theme }: Partial<ConfigProviderProps>) => {
  const id = useId();
  const escapedId = id.replace(/:/g, '');

  const themeClassName = `a-ui-configProvider-${escapedId}`;

  // 根据theme生成css规则
  const rule = useMemo(() => {
    return createCssRuleFromTheme('.' + themeClassName, theme)
  }, [themeClassName, theme])

  const tagRef = useRef<HTMLStyleElement | null>(null);
  useLayoutEffect(() => {
    // 创建style标签
    const tag = document.createElement('style');
    tag.setAttribute('id', themeClassName);
    document.head.appendChild(tag);
    tagRef.current = tag;
    if(tagRef.current) {
      const sheet = tagRef.current.sheet;
      if(sheet) {
        // 插入css规则
        sheet.insertRule(rule)
      }
    }
    return () => {
      if (tagRef.current) {
        document.head.removeChild(tagRef.current);
      }
    };
  }, [themeClassName, rule])

  return { themeClassName }
}