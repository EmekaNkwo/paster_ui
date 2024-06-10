import type { Metadata } from "next";
import { Karla } from "next/font/google";
import 'react-quill/dist/quill.snow.css';
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paster - Quick Online Clipboard",
  description: "Quick Online Clipboard is a web-based tool that allows you to easily share and store text or code snippets or files across multiple devices. With Quick Online Clipboard, you can copy and paste text or code from one device to another in a matter of seconds. Simply log in or sign up, or use visitor mode to paste your content, and share the unique URL with others. Quick Online Clipboard is perfect for collaborating with colleagues, sharing code snippets, or simply storing text or files for later reference. Try it out today and see how it can simplify your workflow!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
