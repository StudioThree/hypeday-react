import Section from "./Section";

// @TODO: Properly type projectData
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DiscordSection({ projectData }: any) {
  const { discord, discord2 } = projectData;

  if (!discord?.enabled && !discord2?.enabled) return null;

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
                {new Date(field.shouldJoinBefore).toLocaleString()}
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
          and have the &quot;{field?.roleDisplayNames?.join(", ")}&quot; role(s)
        </>
      );
      infoArray.push(roleReq);
    }
  });

  return (
    <Section
      title="Discord"
      onClick={() => console.log("discord button clicked")}
      info={infoArray}
    />
  );
}
