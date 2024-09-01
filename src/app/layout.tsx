import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/core/molecules/navbar.molecule";
import Footer from "@/components/core/molecules/footer.molecule";
import { Toaster } from "@/components/ui/toaster";
import Cart from "./_utils/cart/cart";
import ContextWrapper from "@/lib/context/context-wrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hotel Omni Residency",
  description:
    "Welcome to Hotel Omni Residency, where luxury meets comfort in the vibrant city of Dhaka. Established in 2019, we are proud to offer two branches located in teh prestigious neighborhoods of Baridhara and Banani, each designed to provide an exceptional hospitality experience for both business and leisure travelers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextWrapper>
        <body className={poppins.className}>
          <Navbar />
          <main>{children}</main>
          <Cart />
          <Footer />
          <Toaster />
        </body>
      </ContextWrapper>
    </html>
  );
}
