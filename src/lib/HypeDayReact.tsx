import { useEffect, useState } from "react";
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

      <section className={classes.reqSection}>
        <header>
          <h3>Twitter</h3>
          <button className={classes.hypeButton}>Connect</button>
        </header>
        <span className={classes.sectionInfo}>
          Have an account created before <b>1/1/2020</b>
        </span>
        <span className={classes.sectionInfo}>
          Follow these account(s):
          <ul>
            <li>
              <b>@_emirsavran_</b>
            </li>
            <li>
              <b>@hypedotday</b>
            </li>
          </ul>
        </span>
        <span className={classes.sectionInfo}>
          Have at least <b>5 follower(s)</b>
        </span>
        <span className={classes.sectionInfo}>
          Retweet <b>this tweet</b>
        </span>
      </section>

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
