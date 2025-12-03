export const metadata = {
  title: "PoliceBook",
  description: "Generate foto polisi dengan scene baru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen text-black">{children}</body>
    </html>
  );
}
