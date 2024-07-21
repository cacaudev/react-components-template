import useResponsiveWidth from "./useResponsiveWidth";

export const ScreenManager = () => {
  const isTablet = useResponsiveWidth() <= 768;
  const isMobile = useResponsiveWidth() <= 480; 

  return {
    isTablet,
    isMobile
  };
};
