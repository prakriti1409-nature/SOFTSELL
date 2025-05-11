import './globals.css';
export const metadata = {
  title: "SoftSell | Resell Unused Software Licenses",
  description: "Sell your unused software licenses quickly and securely with SoftSell.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
