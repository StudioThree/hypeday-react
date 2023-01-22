import { useEffect, useState } from "react";
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";
import "./App.css";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2h5cGUuZGF5IiwiYXVkIjoiaHR0cHM6Ly9oeXBlLmRheSIsInN1YiI6Ik1ZLVRFU1QtVVNFUi1JRCIsIndhbGxldHMiOnsic29sYW5hIjoiOVJUSmF3NjdkZ3lWRWh2eFo3M0J2aW1VNmRYZzNNOGEyRE03VVFEWmtyMU0iLCJldGhlcmV1bSI6IjB4NjlFNUY4MzQ5RDE4OTMwZjk5NDMyNjEyZUNDMTBFOUE3QjhGYjNCMiJ9LCJleHAiOjE3NjA4MDIxNzEsImlhdCI6MTY3NDQwMjE3MX0.13g_iLSTkjjjjsu0pupfHY3ZCkNMxOF50NEKUTzzncTWY_ocQ6eoQgCi98WNDIkE7Du1hL6E1Bf6Yj3BwiHh2A";

function App() {
  const [appId, setAppId] = useState("jPKQoBHT0aQyucI4e8zS");
  const [projectId, setProjectId] = useState("TYjK36qiIzlJM8s0OYSC");
  const [userToken, setUserToken] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAppId(params.get("appId") || "jPKQoBHT0aQyucI4e8zS");
    setProjectId(params.get("projectId") || "TYjK36qiIzlJM8s0OYSC");
    setUserToken(params.get("userToken") || testToken);
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
