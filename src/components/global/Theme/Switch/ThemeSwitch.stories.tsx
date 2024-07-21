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

export const Dark: StoryNavbar = {
  args: {
    checked: false,
    onChange: (checked: boolean) => {
      console.log('Toggle it.')
    }
  }
};
export const Light: StoryNavbar = {
  args: {
    checked: true,
    onChange: (checked: boolean) => {
      console.log('Toggle it.')
    }
  }
};
