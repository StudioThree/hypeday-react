import type { GetProjectResponse } from "../../types";
import Section from "./Section";

export default function TwitterSection({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  if (!projectData?.twitter?.enabled) return null;

  const { twitter, userInfo } = projectData;
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

  return (
    <Section
      title="Twitter"
      onClick={() => console.log("twitter button clicked")}
      info={infoArray}
      buttonLabel={userInfo?.twitter?.username}
    />
  );
}
