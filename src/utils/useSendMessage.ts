const useSendMessage = () => {
  const sendMessage = (name: string) => {
    const event = new MessageEvent("message", { data: { name } });
    window.dispatchEvent(event);
  };

  return sendMessage;
};

export { useSendMessage };
