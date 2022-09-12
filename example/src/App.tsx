import { useEffect, useState } from "react";
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";
import "./App.css";

function App() {
  const [projectId, setProjectId] = useState("OqdTSUuzrCIbapvSQWbL");
  const [walletAddress, setWalletAddress] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProjectId(params.get("projectId") || "OqdTSUuzrCIbapvSQWbL");
    setWalletAddress(params.get("walletAddress") || "");
    setLoadingInitial(false);
  }, []);

  if (loadingInitial) return <div>Loading...</div>;

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
