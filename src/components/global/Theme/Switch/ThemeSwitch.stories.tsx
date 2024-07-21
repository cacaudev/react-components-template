import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitch } from "./ThemeSwitch";

const meta = {
  title: "UI/Theme Switch",
  component: ThemeSwitch,
  tags: ["autodocs"],  
  args: {
  },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type StoryNavbar = StoryObj<typeof meta>;

let defaultArgs = {
  checked: false,
  onChange: (checked) => {}
}

export const Light: StoryNavbar = {
  args: {
    ...defaultArgs
  }
};
export const Dark: StoryNavbar = {
  args: {
    ...defaultArgs,
    checked: true
  }
};
