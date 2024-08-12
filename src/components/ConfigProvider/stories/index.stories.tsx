import type { Meta } from "@storybook/react";
import { ConfigProvider } from "a-ui-cl";
import { Default } from "./Default.stories";
import DefaultRaw from './Default.stories?raw'

const meta = {
  title: '组件/ConfigProvider',
  component: ConfigProvider
} satisfies Meta<typeof ConfigProvider>;

export default meta;

// @ts-expect-error parameters is for storybook
Default.parameters = {
  docs: {
    source: {
      code: DefaultRaw,
    }
  }
}

export { Default };