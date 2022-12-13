const BASE_URL = "https://api.hype.day";
const headers = new Headers({
  "Content-Type": "application/json",
});

export function setAuthorizationHeader(token: string | undefined) {
  token
    ? headers.set("Authorization", `Bearer ${token}`)
    : headers.delete("Authorization");
}

function handleResponse(response: Response) {
  return response.text().then((text) => {
    if (text === "OK") return text;
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = data?.error?.message || response.statusText;
      console.error(error);
      return Promise.reject(error);
    }

    return data;
  });
}

export function getProject({
  appId,
  projectId,
}: {
  appId: string;
  projectId: string;
}) {
  const requestOptions = {
    method: "GET",
    headers,
  };

  return fetch(
    `${BASE_URL}/getProject?` +
      new URLSearchParams({
        appid: appId,
        projectid: projectId,
      }),
    requestOptions
  ).then(handleResponse);
}

export function addWallet(data: {
  appId: string;
  address: string;
  chain: string;
}) {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/addWallet`, requestOptions).then(handleResponse);
}

export function verifyWallet(data: {
  appId: string;
  address: string;
  signature: string;
  chain: string;
}) {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/verifyWallet`, requestOptions).then(handleResponse);
}

export function addNewEmail(data: {
  appId: string;
  email: string;
  emailPermission: boolean;
}) {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/addNewEmail`, requestOptions).then(handleResponse);
}

export function verifyNewEmail(data: {
  appId: string;
  email: string;
  otp: string;
}) {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/verifyNewEmail`, requestOptions).then(
    handleResponse
  );
}

export function getOauthUrl({
  provider,
  appId,
  projectId,
  returnUrl,
}: {
  provider: "twitter" | "discord";
  appId: string;
  projectId: string;
  returnUrl: string;
  userToken?: string;
}) {
  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify({
      appId,
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
  customField,
}: {
  appId: string;
  projectId: string;
  customField: string;
}) {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify({
      appId,
      projectId,
      customField,
    }),
  };

  return fetch(`${BASE_URL}/validateForAppProject`, requestOptions).then(
    handleResponse
  );
}
