import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAUX — Graphic Designer & Photo Editor",
  description:
    "TAUX (Midhun Vijay KM) — A 20-year-old visual creator from Kerala, India. Creating cinematic visuals, esports posters, YouTube thumbnails & digital experiences.",
  keywords: [
    "TAUX",
    "graphic designer",
    "photo editor",
    "esports",
    "cinematic",
    "poster design",
    "thumbnail design",
    "Kerala",
    "India",
  ],
  openGraph: {
    title: "TAUX — Graphic Designer & Photo Editor",
    description: "Creating cinematic visuals & digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0D0D0D] text-[#EDEDED] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
