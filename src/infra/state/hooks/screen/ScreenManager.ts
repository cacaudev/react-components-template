import useResponsiveWidth from "./useResponsiveWidth";

export const ScreenManager = () => {
  const isTablet = useResponsiveWidth() < 786;

  return {
    isTablet,
  };
};
