import HypeDayReact from "./lib/HypeDayReact";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwiZXhwIjoxNjY1ODcxOTg4LCJpYXQiOjE2NjUwMDc5ODh9.JeaFby5DGfkmZL90nnuDmX7p7C48CC0G5xxgv42y_mgSfM0D2GJE4OdGVGoJqeC8Me2Mi5ehpHKNwiPQs9Fn5w";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <HypeDayReact
        appId="123"
        projectId="OqdTSUuzrCIbapvSQWbL"
        userToken={testToken}
      />
    </div>
  );
}

export default App;
