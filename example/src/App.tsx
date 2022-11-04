import { useEffect, useState } from "react";
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";
import "./App.css";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwid2FsbGV0cyI6eyJzb2xhbmEiOiI5UlRKYXc2N2RneVZFaHZ4WjczQnZpbVU2ZFhnM004YTJETTdVUURaa3IxTSIsImV0aGVyZXVtIjoiMHg2OUU1RjgzNDlEMTg5MzBmOTk0MzI2MTJlQ0MxMEU5QTdCOEZiM0IyIn0sImV4cCI6MTY3NjAyMzU5NCwiaWF0IjoxNjY3MzgzNTk0fQ.abFhWoc6lSEDS3mG9oFcbTz-fcCv6RpoukAMbxjXjAaqiv1XFnqIZMFsyjk71GIS-HDWZPxCbUyRPVuN6vqliw";

function App() {
  const [appId, setAppId] = useState("MMYGytREfQnxQqpX7Byy");
  const [projectId, setProjectId] = useState("0aYbsCbSE0gxsgQqbaRf");
  const [userToken, setUserToken] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAppId(params.get("appId") || "MMYGytREfQnxQqpX7Byy");
    setProjectId(params.get("projectId") || "0aYbsCbSE0gxsgQqbaRf");
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
