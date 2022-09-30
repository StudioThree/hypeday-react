import HypeDayReact from "./lib/HypeDayReact";

const testToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Rlc3QuY29tIiwiYXVkIjoiaHR0cHM6Ly9oeXBlLmRheSIsInN1YiI6InRlc3R1c2VyaWQiLCJleHAiOjE2NjUzMzQxODIsImlhdCI6MTY2NDQ3MDE4Mn0.NtWXhwpoBXwQfUucA_m38RT-bptgmlenDzdGN4iO172KCS95Ye_tynGRUnAYYLECfL_FeZ5TVzqj0KSj8Dip9eXRJasTdyeSuMt66i6DkD-JKk7y9xDFPIAP2gOo5riD23bmU8KgBlYMSFdThIQdvXyU78GtryxD06gfAT0E4xLJ9lUOoo7nrwzmPYez0Lkn2NkCMGW4bdx7l02dey6bBlkI1u2JBKnLzmhoJsdB7JNQVhatWcGXvHCLGawIAPXZRsXKsO9LtvzFaYjTZhIyO3VmNhe5RyFIcBY9stG7oc6yuciAVmEx1wsOtfAsl3w07Eb6yBItJPIEPoHBlAxyTbjLcKsiRaEQVIum5-16SormmbQqr9O5Q6HEDiT8-g7Qa9-TDwXJERW_wMJWtXjPYzLnc-eTKoAaaOfhdAimPsR1h2K4e1GhpP3lil50Y9kPEK39Fa8oDDHiZUzhmMfOYvv_YFdaKrfooHgw8DlQoyIcC-kh4hcF2lKU6ckznqP1DWkgFXk85_5eiRfyLVQoflBx3_bpcC2AXjEQRzUA34Qp2uMx60W_qr_jn1ybvAbLdtb7YvXB_TpGaW3y98lbBf9WkAQ3MXJGaq7cJsXUZBP-gXPEenkInCA7bNPWwuUYn9i-SFySLxyDthBjJuFDYCfTdQs19vAnbs6oX1enmXg";

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
