import { useMemo, useState } from "react";
import { getOauthUrl } from "../api";
import useUserContext from "../context/user.context";
import { getErrorMessage, isMobile } from "../helpers";
import type { SectionProps } from "../types";
import HypeModal from "./HypeModal";
import RequiredIndicator from "./RequiredIndicator";
import Section from "./Section";

export default function TwitterSection({
  projectData,
  appId,
  hasUser,
  logger,
}: SectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileModalVisible, setIsMobileModalVisible] = useState(false);
  const [error, setError] = useState("");
  const { twitterData } = useUserContext();

  const info = useMemo(() => {
    if (!projectData?.twitter?.enabled) return [];

    const { twitter } = projectData;
    const infoArray = [];

    if (twitter?.isFollowRequired) {
      const followList = twitter?.follow?.split(",");
      const followReq = (
        <>
          <ul className="hypeday-req-list">
            {followList?.map((account: string) => (
              <li key={account} className="hypeday-req-list-item">
                <span>
                  Follow <strong>@{account}</strong> on Twitter
                  <RequiredIndicator required={!twitter.isFollowOptional} />
                </span>
                <a
                  href={`https://twitter.com/${account.trim()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hypeday-button-gray"
                >
                  Follow
                </a>
              </li>
            ))}
          </ul>
        </>
      );
      infoArray.push(followReq);
    }

    if (twitter?.isRetweetRequired) {
      const retweetReq = (
        <>
          <div className="hypeday-req-list-item">
            <div>
              Retweet{" "}
              <a
                href={twitter.retweetUrl}
                className="hypeday-a-text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                <strong>this</strong>
              </a>{" "}
              on Twitter
              <RequiredIndicator required={!twitter.isRetweetOptional} />
            </div>

            <a
              href={twitter.retweetUrl}
              target="_blank"
              rel="noreferrer"
              className="hypeday-button-gray"
            >
              Retweet
            </a>
          </div>
        </>
      );
      infoArray.push(retweetReq);
    }

    if (twitter?.isLikeRequired) {
      const likeReq = (
        <>
          <div className="hypeday-req-list-item">
            <div>
              Like{" "}
              <a
                href={twitter.likeUrl}
                className="hypeday-a-text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                <strong>this</strong>
              </a>{" "}
              on Twitter
              <RequiredIndicator required={!twitter.isLikeOptional} />
            </div>

            <a
              href={twitter.likeUrl}
              target="_blank"
              rel="noreferrer"
              className="hypeday-button-gray"
            >
              Like
            </a>
          </div>
        </>
      );
      infoArray.push(likeReq);
    }

    if (twitter?.isAccountCreatedRequired) {
      const creationReq = (
        <>
          Have an account created before{" "}
          <strong>
            {new Date(twitter?.accountCreated || "").toLocaleDateString()}
          </strong>
          <RequiredIndicator required={!twitter.isAccountCreatedOptional} />
        </>
      );
      infoArray.push(creationReq);
    }

    if (twitter?.isMinFollowersRequired) {
      const minFollowersReq = (
        <>
          Have at least <b>{twitter.minFollowers} follower(s)</b>
          <RequiredIndicator required={!twitter.isMinFollowersOptional} />
        </>
      );
      infoArray.push(minFollowersReq);
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
      setError(getErrorMessage(err));
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
        rightText={twitterData?.username}
        buttonDisabled={!hasUser}
        isLoading={isLoading}
        errorMessage={error}
      />
    </>
  );
}
