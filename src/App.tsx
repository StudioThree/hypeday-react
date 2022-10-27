import HypeDayReact from "./lib/HypeDayReact";

const testToken =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL21hdGNoZGF5LmNvbSIsImF1ZCI6Imh0dHBzOi8vaHlwZS5kYXkiLCJzdWIiOiJ0ZXN0dXNlcmlkIiwiZXhwIjoxNjY3MTI3NzE2LCJpYXQiOjE2NjYyNjM3MTZ9.M91IVLQvVorij7T_WHx7lGTpoBzGheWYSBcfaFvnFFmkfXvv99_FGFJ52JrDQYzjvJ_4B1IGtqUgIAkQjdxnmw";

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
