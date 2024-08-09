import React from "react";

import "./styles.css";
const timestamp = new Date().toLocaleString();
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>{timestamp}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
