import { useMemo, useState } from "react";
import { getOauthUrl } from "../api";
import type { GetProjectResponse } from "../types";
import Section from "./Section";

export default function TwitterSection({
  projectData,
  appId,
  walletAddress,
  doesTokenExist,
}: {
  projectData?: GetProjectResponse;
  appId: string;
  walletAddress?: string;
  doesTokenExist: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const info = useMemo(() => {
    if (!projectData?.twitter?.enabled) return [];

    const { twitter } = projectData;
    const infoArray = [];

    if (twitter?.isAccountCreatedRequired) {
      const creationReq = (
        <>
          Have an account created before{" "}
          <strong>
            {new Date(twitter?.accountCreated || "").toLocaleDateString()}
          </strong>
        </>
      );
      infoArray.push(creationReq);
    }

    if (twitter?.isFollowRequired) {
      const followList = twitter?.follow?.split(",");
      const followReq = (
        <>
          Follow these account(s):
          <ul>
            {followList?.map((account: string) => (
              <li key={account}>
                <a
                  href={`https://twitter.com/${account.trim()}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>@{account}</strong>
                </a>
              </li>
            ))}
          </ul>
        </>
      );
      infoArray.push(followReq);
    }

    if (twitter?.isMinFollowersRequired) {
      const minFollowersReq = (
        <>
          Have at least <b>{twitter.minFollowers} follower(s)</b>
        </>
      );
      infoArray.push(minFollowersReq);
    }

    if (twitter?.isRetweetRequired) {
      const retweetReq = (
        <>
          Retweet{" "}
          <a href={twitter.retweetUrl} target="_blank" rel="noreferrer">
            <strong>this tweet</strong>
          </a>
        </>
      );
      infoArray.push(retweetReq);
    }

    return infoArray;
  }, [projectData]);

  const handleConnect = async () => {
    if (!appId || (!walletAddress && !doesTokenExist) || !projectData?.id)
      return;

    try {
      setIsLoading(true);
      const { url } = await getOauthUrl({
        provider: "twitter",
        appId,
        walletAddress,
        chain: projectData.chain,
        projectId: projectData.id,
        returnUrl: window.location.href,
      });

      window.location.assign(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!projectData?.twitter?.enabled) return null;

  return (
    <Section
      title="Twitter"
      onClick={handleConnect}
      info={info}
      rightText={projectData?.userInfo?.twitter?.username}
      buttonDisabled={!walletAddress && !doesTokenExist}
      isLoading={isLoading}
    />
  );
}
