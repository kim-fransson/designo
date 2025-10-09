import { Jost } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import GlobalStyles from "@/components/GlobalStyles";
import { DESCRIPTION, TITLE } from "@/constants";

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
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
        <body className={`${jost.variable}`}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
