import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggleButton } from "./ThemeToggleButton";

const meta = {
  title: "UI/Theme Toggle",
  component: ThemeToggleButton,
  tags: ["autodocs"],  
  args: {
  },
} satisfies Meta<typeof ThemeToggleButton>;

export default meta;
type StoryNavbar = StoryObj<typeof meta>;

let defaultArgs = {
  checked: false,
  onChange: (checked: boolean) => {}
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
