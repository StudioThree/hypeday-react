import type { SupportedChains } from "./types";

const BASE_URL = "https://apitest.hype.day";

function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export function getProject({
  appId,
  projectId,
  walletAddress,
}: {
  appId: string;
  projectId: string;
  walletAddress?: string;
}) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    `${BASE_URL}/getProject?` +
      new URLSearchParams({
        appid: appId,
        userid: walletAddress || "",
        projectid: projectId,
      }),
    requestOptions
  ).then(handleResponse);
}

export function getOauthUrl({
  provider,
  appId,
  projectId,
  chain,
  walletAddress,
  returnUrl,
}: {
  provider: "twitter" | "discord";
  appId: string;
  projectId: string;
  chain: SupportedChains;
  walletAddress: string;
  returnUrl: string;
}) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      appId,
      chain,
      walletAddress,
      projectId,
      returnUrl,
    }),
  };

  return fetch(
    `${BASE_URL}/${provider === "twitter" ? "t" : "d"}GetUrlForApp`,
    requestOptions
  ).then(handleResponse);
}

export function register({
  appId,
  projectId,
  chain,
  wallet,
  customField,
}: {
  appId: string;
  projectId: string;
  chain: SupportedChains;
  wallet: string;
  customField: string;
}) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      appId,
      chain,
      wallet,
      projectId,
      customField,
    }),
  };

  return fetch(`${BASE_URL}/validateForAppProject`, requestOptions).then(
    handleResponse
  );
}
