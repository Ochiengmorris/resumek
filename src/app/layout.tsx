import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    absolute: "AI Resume Builder",
    template: "%s | AI resume builder",
  },
  description:
    "AI Resume Builder is a free tool that helps you create a professional resume in minutes.",
  keywords: [
    "AI Resume Builder",
    "AI resume builder",
    "AI resume generator",
    "AI resume",
    "resume builder",
    "resume generator",
    "resume",
    "cv",
    "curriculum vitae",
    "curriculum",
    "curriculum vitae builder",
    "curriculum vitae generator",
    "curriculum vitae maker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={` ${inter.className} antialiased`}>
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
