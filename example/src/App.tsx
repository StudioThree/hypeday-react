import { useEffect, useState } from "react";
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";
import "./App.css";

function App() {
  const [projectId, setProjectId] = useState("OqdTSUuzrCIbapvSQWbL");
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProjectId(params.get("projectId") || "OqdTSUuzrCIbapvSQWbL");
    setWalletAddress(params.get("walletAddress") || "");
  }, []);

  return (
    <div className="App">
      <HypeDayReact
        appId="9zUeQuZ2IYUVR6DOousn"
        projectId={projectId}
        walletAddress={walletAddress}
      />
    </div>
  );
}

export default App;
