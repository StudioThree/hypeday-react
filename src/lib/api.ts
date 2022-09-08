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
  userId,
}: {
  appId: string;
  projectId: string;
  userId?: string;
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
        userid: userId || "",
        projectid: projectId,
      }),
    requestOptions
  ).then(handleResponse);
}

export function getOauthUrl({
  provider,
  appId,
  projectId,
  userId,
  returnUrl,
}: {
  provider: "twitter" | "discord";
  appId: string;
  projectId: string;
  userId: string;
  returnUrl: string;
}) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    `https://us-central1-hype-testing.cloudfunctions.net/${
      provider === "twitter" ? "t" : "d"
    }GetUrlForApp?` +
      new URLSearchParams({
        appid: appId,
        userid: userId,
        projectid: projectId,
        returnurl: returnUrl,
      }),
    requestOptions
  ).then(handleResponse);
}
