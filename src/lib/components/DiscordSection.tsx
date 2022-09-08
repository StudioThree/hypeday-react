import { useMemo } from "react";
import type { GetProjectResponse } from "../types";
import Section from "./Section";

export default function DiscordSection({
  projectData,
  appId,
  userId,
}: {
  projectData?: GetProjectResponse;
  appId: string;
  userId?: string;
}) {
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
                  {new Date(field?.shouldJoinBefore || "").toLocaleString()}
                </strong>
              </>
            ) : null}
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

  const handleConnect = () => {
    console.log(appId);
    alert("This is going to redirect user to Discord");
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
      buttonDisabled={!userId}
    />
  );
}
