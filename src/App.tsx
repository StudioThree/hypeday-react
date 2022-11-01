import HypeDayReact from "./lib/HypeDayReact";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwiZXhwIjoxNjc1OTU4ODkzLCJpYXQiOjE2NjczMTg4OTN9.a2vlaObjo9rzSoO2PryR81piy0aEY-r9MHRfAGRcTw00KA85_-JACvBRRhre0py0mgdYgEAT17y19IAQPHcYDw";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <HypeDayReact
        testing={true}
        appId="AWGOvkDPkSzRxwebZ4Gv"
        projectId="ZymMrMJK1mrZbUPAbcMH"
        userToken={testToken}
      />
    </div>
  );
}

export default App;
