import "./globals.css";
import "../src/scss/Global.scss";

export const metadata = {
  title: "Santosh Sah | Senior Software Engineer",
  description: "Senior Software Engineer & AI Specialist with 5 years of experience building scalable enterprise SaaS and AI intelligence pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
