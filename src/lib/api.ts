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
