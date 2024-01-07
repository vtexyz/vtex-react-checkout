import { useEffect, useState } from "react";

const useHashValue = (): string => {
  const [hashValue, setHashValue] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setHashValue(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hashValue;
};

export default useHashValue;
