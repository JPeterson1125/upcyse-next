import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/external/ThemeProvider";
import Hydrate from "@/components/external/Hydrate";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Upcyse - Property Management",
  description:
    "Upcyse - Property Management - Listing and Booking Renovation Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Hydrate>
        <body className={montserrat.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </Hydrate>
    </html>
  );
}
