import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenuItem } from "./SidebarMenuItem";

const meta = {
  title: "Example/Sidebar/Item",
  component: SidebarMenuItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SidebarMenuItem>;

export default meta;
type StoryNavbar = StoryObj<typeof meta>;

export const base: StoryNavbar = {
  args: {
    icon: "",
    isActive: true,
    title: "Hello",
    link: "dashboard",
    itemClickedCallback: () => {},
  },
};
