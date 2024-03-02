import React from "react";
import { render } from "@testing-library/react";
import App from "./App"; // assuming your component is named App and the file is app.tsx

test("renders content in App component", () => {
  const { getByText } = render(<App />);
  const contentElement = getByText(/William Frisk/i); // Replace with the text or element you expect in your App component

  expect(contentElement).toBeInTheDocument();
});
