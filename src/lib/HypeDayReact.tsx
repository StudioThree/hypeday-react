import { useEffect, useState } from "react";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import classes from "./style.module.css";

interface HypeDayReactProps {
  projectId: string;
}

export default function HypeDayReact({ projectId }: HypeDayReactProps) {
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    if (!projectId) return;

    fetch(`https://apitest.hype.day/getProject?projectid=${projectId}`)
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <div className={classes.wrapper}>
      <WalletSection projectData={projectData} />
      <TwitterSection projectData={projectData} />

      <section className={classes.reqSection}>
        <header>
          <h3>Discord</h3>
          <button className={classes.hypeButton}>Connect</button>
        </header>
        <span className={classes.sectionInfo}>
          Join the <b>HYPE.DAY</b> server before <b>1/1/2020, 3:00:00 PM</b>
          <br />
          and have the &quot;<b>Hype Team</b>&quot; role(s)
        </span>
      </section>

      <section className={classes.reqSection}>
        <header>
          <h3>Email</h3>
          <button className={classes.hypeButton}>Connect</button>
        </header>
        <span className={classes.sectionInfo}>
          Have a verified email address
        </span>
      </section>

      <section className={classes.reqSection}>
        <header>
          <h3>Open Response</h3>
        </header>
        <span className={classes.sectionInfo}>Write us something!</span>
        <input className={classes.responseInput} type="text" />
      </section>

      <button className={`${classes.hypeButton} ${classes.registerButton}`}>
        Click to Register
      </button>
    </div>
  );
}
