import { useEffect, useState } from "react";
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";
import "./App.css";

function App() {
  const [appId, setAppId] = useState("123");
  const [projectId, setProjectId] = useState("OqdTSUuzrCIbapvSQWbL");
  const [userToken, setUserToken] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAppId(params.get("appId") || "123");
    setProjectId(params.get("projectId") || "OqdTSUuzrCIbapvSQWbL");
    setUserToken(params.get("userToken") || "");
    setLoadingInitial(false);
  }, []);

  if (loadingInitial) return <div>Loading...</div>;

  return (
    <div className="App">
      <HypeDayReact appId={appId} projectId={projectId} userToken={userToken} />
    </div>
  );
}

export default App;
