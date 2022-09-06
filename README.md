# Hype.Day React Component

React component to embed Hype.Day project registration into your website.

## Preview

You can test the library on: https://hypeday-react.vercel.app/

## Development

Run `npm run dev` to start Vite in development mode. `main.tsx` and `App.tsx` are only for development purposes. The bundle entry point is `lib/HypeDayReact.tsx`.

## Example Usage

To install:

```bash
npm i github:StudioThree/hypeday-react
```

```tsx
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";

<HypeDayReact
  appId="YOUR_APP_ID" // required, you can request this from Hype.Day
  projectId="OqdTSUuzrCIbapvSQWbL" // required, Hype.Day project ID
  userId="OitNn0A1Ehs8sia1XwoN" // optional, encrypted user wallet address
/>;
```
To get the project id go to https://testing.hype.day/ and create a project, project id will be in the url.

To override the default styles, you can inject your own CSS **after** importing the css file. See [style.css](src/lib/style.css) for the default styles.
