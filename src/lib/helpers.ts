export function shortenWalletAddress(address?: string) {
  if (!address) return "";
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export function isMobile() {
  return (
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1
  );
}

export function getErrorMessage(error: unknown) {
  const defaultMessage = "Something went wrong. Please try again later.";

  if (typeof error === "string") {
    return error;
  } else if ((error as { message?: string })?.message) {
    return (error as { message: string }).message;
  } else {
    return defaultMessage;
  }
}
