import "@ui/styles/style.css";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "../ui/components/theme-provider";
import { Toaster } from "sonner";

export default function RootLayout({
    children,
}: Readonly<PropsWithChildren>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster richColors theme="light" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
