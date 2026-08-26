import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Guy Pearson — guyp.me",
  description:
    "Guy Pearson — VP of Product, GEO Credential Services. Austin, Texas.",
  metadataBase: new URL("https://guyp.me"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
