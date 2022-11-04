# Hype.Day React Component

React component to embed Hype.Day project registration into your website.

## Preview

You can test the library on: https://hypeday-react.vercel.app/

## Development

Run `npm run dev` to start Vite in development mode. `main.tsx` and `App.tsx` are only for development purposes. The bundle entry point is `lib/HypeDayReact.tsx`.

## Example Usage

To install:

```bash
npm i github:StudioThree/hypeday-react#v0.0.7
```

Or with yarn:

```bash
yarn add https://github.com/StudioThree/hypeday-react.git#v0.0.7
```

```tsx
import HypeDayReact from "hypeday-react";
import "hypeday-react/dist/style.css";

<HypeDayReact
  appId="YOUR_APP_ID" // required, you can request this from Hype.Day
  projectId="OqdTSUuzrCIbapvSQWbL" // required, Hype.Day project ID
  userToken="JWT_TOKEN_OF_THE_USER" // optional, JWT token of the user
  logger={{
    info(
      message: string,
      eventCode: string,
      data: { [key: string]: string | number | boolean | undefined }
    ) {
      console.log(message, eventCode, data);
    },
    warning(
      message: string,
      eventCode: string,
      data: { [key: string]: string | number | boolean | undefined }
    ) {
      console.log(message, eventCode, data);
    },
    error(message: string, eventCode: string, error: unknown) {
      console.log(message, eventCode, error);
    },
  }} // optional, logger object with info, warning, and error methods.
  // These methods will be called with 3 parameters: message, eventCode, and data/error.
/>;
```

#### Token

Token algo should be an ES256

Token payload format (see https://jwt.io/ for details):

```
{
  iss: "https://your-web-site.com",
  aud: "https://hype.day",
  sub: "testuserid",
  // exp is optional
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 10,
}
```

To get the project id go to https://hype.day/ and create a project. The project id will be in the url once you click "Create my Project" button. For instance vy6kki7aU5EBZf5GC8pf in https://hype.day/projects/vy6kki7aU5EBZf5GC8pf/edit is the project id. It is unique for each project.

To override the default styles, you can inject your own CSS **after** importing the css file. See [style.css](src/lib/style.css) for the default styles.
