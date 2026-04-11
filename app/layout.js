import "./globals.css";

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
