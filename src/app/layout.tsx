import "./globals.css";

export const metadata = {
  title: "Blog Post",
  description: "Blog Post Created using Contentful",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
