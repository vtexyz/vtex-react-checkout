import { useEffect } from "react";

const useHandleMessage = (messageName: string, callback: () => void) => {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      const { name } = event.data ?? {};
      if (name === messageName) {
        callback();
      }
    };

    window.addEventListener("message", listener);

    return () => window.removeEventListener("message", listener);
  }, [callback, messageName]);
};

export { useHandleMessage };
