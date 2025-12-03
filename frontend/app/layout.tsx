import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GG Tax Services",
  description: "Professional tax preparation and consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100 font-sans flex flex-col`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-gray-800 border-b border-gray-700 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/">
                <img src="/logo.png" alt="GG Tax Logo" className="h-10 w-10" />
              </a>
              <h1 className="text-xl font-bold text-green-400">GG Tax Services</h1>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <a href="/services" className="text-gray-300 hover:text-green-400">Services</a>
              <a href="/pricing" className="text-gray-300 hover:text-green-400">Pricing</a>
              <a href="/scheduling" className="text-gray-300 hover:text-green-400">Schedule</a>
              <a href="/contact" className="text-gray-300 hover:text-green-400">Contact</a>

              {/* Divider */}
              <span className="border-l border-gray-600 h-6"></span>

              {/* Login / Sign Up */}
              <a href="/login" className="text-gray-300 hover:text-green-400 font-semibold">Login</a>
              <a
                href="/signup"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
              >
                Sign Up
              </a>
            </nav>
          </header>


          {/* Main content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-400 text-center py-6">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.instagram.com/ggtaxpreparationservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6 inline" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582094297032"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6 inline" />
              </a>
              <a
                href="https://share.google/6EWZ0fv9gCbniIfqF"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <img src="/icons/google-review.svg" alt="Google Review" className="h-6 w-6 inline" />
              </a>
            </div>
            <p className="text-sm">
              &copy; 2025 GG Tax Preparation Services LLC. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
