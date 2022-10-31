import { useMemo, useState } from "react";
import { getOauthUrl } from "../api";
import { isMobile } from "../helpers";
import type { SectionProps } from "../types";
import HypeModal from "./HypeModal";
import Section from "./Section";

export default function TwitterSection({
  projectData,
  appId,
  hasUser,
  logger,
}: SectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileModalVisible, setIsMobileModalVisible] = useState(false);

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
    if (!appId || !hasUser || !projectData?.id) return;

    try {
      setIsLoading(true);
      const { url } = await getOauthUrl({
        provider: "twitter",
        appId,
        projectId: projectData.id,
        returnUrl: window.location.href,
      });

      if (isMobile()) {
        // workaround for android
        // https://twittercommunity.com/t/web-oauth-2-0-is-broken-on-android-if-twitter-app-is-installed/169698/10
        window.open(url, "_blank");
        window.open(url, "_blank");
      }
      // for ios and desktop
      window.location.assign(url);
    } catch (err) {
      console.error(err);
      logger?.error(
        "HypeDayReact: Error getting Twitter oauth url",
        "hype04",
        err
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!projectData?.twitter?.enabled) return null;

  return (
    <>
      <HypeModal
        isOpen={isMobileModalVisible}
        onRequestClose={() => setIsMobileModalVisible(false)}
      >
        <p className="hypeday-modal-p">
          Next, you will be redirected to Twitter to complete the connection
          request. Please ignore the &apos;Open in the app&apos; prompts and
          stay in the browser. Twitter app does not support
          establishing/authorizing connections in the app.
        </p>
        <button
          className="hypeday-button hypeday-modal-button"
          onClick={() => {
            setIsMobileModalVisible(false);
            handleConnect();
          }}
        >
          Ok
        </button>
      </HypeModal>
      <Section
        title="Twitter"
        onClick={() => {
          if (isMobile()) {
            return setIsMobileModalVisible(true);
          }
          handleConnect();
        }}
        info={info}
        rightText={projectData?.userInfo?.twitter?.username}
        buttonDisabled={!hasUser}
        isLoading={isLoading}
      />
    </>
  );
}
