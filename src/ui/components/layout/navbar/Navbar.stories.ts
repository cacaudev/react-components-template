import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { Home } from "@pages/home/Home";

const meta = {
  title: "Example/Navbar",
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: {},
      routing: [
        { path: "/", handle: Home },
      ],
    }),
  },
  args: {
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type StoryNavbar = StoryObj<typeof meta>;

export const base: StoryNavbar = {
  args: {},
};
