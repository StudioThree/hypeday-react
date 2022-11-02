/* eslint-disable @typescript-eslint/no-unused-vars */
import HypeDayReact from "./lib/HypeDayReact";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwiZXhwIjoxNjc1OTU4ODkzLCJpYXQiOjE2NjczMTg4OTN9.a2vlaObjo9rzSoO2PryR81piy0aEY-r9MHRfAGRcTw00KA85_-JACvBRRhre0py0mgdYgEAT17y19IAQPHcYDw";

const testTokenWithAddr =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwid2FsbGV0cyI6eyJzb2xhbmEiOiI5UlRKYXc2N2RneVZFaHZ4WjczQnZpbVU2ZFhnM004YTJETTdVUURaa3IxTSIsImV0aGVyZXVtIjoiMHg2OUU1RjgzNDlEMTg5MzBmOTk0MzI2MTJlQ0MxMEU5QTdCOEZiM0IyIn0sImV4cCI6MTY3NjAyMzU5NCwiaWF0IjoxNjY3MzgzNTk0fQ.abFhWoc6lSEDS3mG9oFcbTz-fcCv6RpoukAMbxjXjAaqiv1XFnqIZMFsyjk71GIS-HDWZPxCbUyRPVuN6vqliw";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <HypeDayReact
        testing={true}
        appId="AWGOvkDPkSzRxwebZ4Gv"
        projectId="ZymMrMJK1mrZbUPAbcMH"
        userToken={testTokenWithAddr}
      />
    </div>
  );
}

export default App;
