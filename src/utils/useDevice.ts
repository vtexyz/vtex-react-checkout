import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 768;

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const device: "desktop" | "mobile" = isMobile ? "mobile" : "desktop";
  return { isMobile, device };
};

export default useDevice;
