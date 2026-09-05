import "./globals.css";

export const metadata = {
  title: "Atik Hasan",
  description: "Portfolio for a english teacher.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
