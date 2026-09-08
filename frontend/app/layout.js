import "./globals.css";

export const metadata = {
  title: "Atik English Academy",
  description: "A English teacher website.",
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
