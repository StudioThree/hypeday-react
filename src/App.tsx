import HypeDayReact from "./lib/HypeDayReact";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwiZXhwIjoxNjY2MDEyNTYyLCJpYXQiOjE2NjUxNDg1NjJ9.Fv3sKVKuFtpQW5tK_rOsY91KjEaQvCO99lXXInqzQJ9_CkTcx5wN_Z7hiDpI_-jEVb4DHyvwhf9uFHV_n4Itvw";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <HypeDayReact
        testing={true}
        appId="123"
        projectId="OqdTSUuzrCIbapvSQWbL"
        userToken={testToken}
      />
    </div>
  );
}

export default App;
