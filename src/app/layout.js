import { Jost } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import GlobalStyles from "@/components/GlobalStyles";
import { DESCRIPTION, TITLE } from "@/constants";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body className={`${jost.variable}`}>
          <MaxWidthWrapper>
            <Header />
            {children}
          </MaxWidthWrapper>
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
