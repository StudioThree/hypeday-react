import Section from "./Section";

// @TODO: Properly type projectData
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TwitterSection({ projectData }: any) {
  const { twitter } = projectData;

  if (!twitter?.enabled) return null;

  const infoArray = [];

  if (twitter?.isAccountCreatedRequired) {
    const creationReq = (
      <>
        Have an account created before{" "}
        <strong>{new Date(twitter.accountCreated).toLocaleDateString()}</strong>
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
    />
  );
}
