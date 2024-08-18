import { BorderRadiusTokens, webLightTheme } from 'a-ui-cl'

export const BorderRadius = () => {

  const borderRadiusTokens =
    Object.keys(webLightTheme).filter(v => v.startsWith('borderRadius')) as (keyof BorderRadiusTokens)[];

  return (
    <>
      {borderRadiusTokens.map(v => {
        return (
          <div style={{display: 'flex', alignItems: 'center', gap: '25px', margin: '20px'}} key={v}>
            <span>{v}</span>
            <span>{webLightTheme[v]}</span>
            <div
              key={`${v}-col2`}
              style={{
                border: `${webLightTheme.strokeWidthThin} solid black`,
                width: "3em",
                height: "3em",
                borderRadius: webLightTheme[v],
              }}
            />
          </div>
        )
      })}
    </>
  );
};

export default {
  title: '主题/Border Radius',
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: false,
      },
    },
  },
};