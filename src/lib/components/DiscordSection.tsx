import { useMemo, useState } from "react";
import { getOauthUrl } from "../api";
import type { SectionProps } from "../types";
import Section from "./Section";

export default function DiscordSection({
  projectData,
  appId,
  hasUser,
  logger,
}: SectionProps) {
  const [isLoading, setIsLoading] = useState(false);

  const info = useMemo(() => {
    if (!projectData?.discord?.enabled && !projectData?.discord2?.enabled) {
      return [];
    }

    const { discord, discord2 } = projectData;
    const discordFields = [];
    if (discord?.enabled) discordFields.push(discord);
    if (discord2?.enabled) discordFields.push(discord2);

    const infoArray: JSX.Element[] = [];

    discordFields.forEach((field) => {
      if (field.isServerRequired) {
        const serverReq = (
          <>
            <div className="hypeday-req-list-item">
              <div>
                Join the{" "}
                <a href={field?.serverLink} target="_blank" rel="noreferrer">
                  <strong>{field?.serverDisplayName}</strong>
                </a>{" "}
                server on Discord
                {field.isShouldJoinBeforeRequired ? (
                  <>
                    {" "}
                    before{" "}
                    <strong>
                      {new Date(
                        field?.shouldJoinBefore || ""
                      ).toLocaleDateString()}
                    </strong>
                  </>
                ) : null}
              </div>

              <a
                className="hypeday-button-gray hypeday-discord-req-action-button"
                href={field?.serverLink || "/"}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Join the <b>{field?.serverDisplayName || "test"}</b>
                </span>
              </a>
            </div>
          </>
        );
        infoArray.push(serverReq);
      }

      if (field.isRoleRequired) {
        const roleReq = (
          <>
            and have the &quot;{field?.roleDisplayNames?.join(", ")}&quot;
            role(s)
          </>
        );
        infoArray.push(roleReq);
      }
    });

    return infoArray;
  }, [projectData]);

  const handleConnect = async () => {
    if (!appId || !hasUser || !projectData?.id) return;

    try {
      setIsLoading(true);
      const { url } = await getOauthUrl({
        provider: "discord",
        appId,
        projectId: projectData.id,
        returnUrl: window.location.href,
      });

      window.location.assign(url);
    } catch (err) {
      console.error(err);
      logger?.error(
        "HypeDayReact: Error getting Discord oauth url",
        "hype05",
        err
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!projectData?.discord?.enabled && !projectData?.discord2?.enabled) {
    return null;
  }

  return (
    <Section
      title="Discord"
      onClick={handleConnect}
      info={info}
      rightText={projectData?.userInfo?.discord?.username}
      buttonDisabled={!hasUser}
      isLoading={isLoading}
    />
  );
}
