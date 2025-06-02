import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "متجر VIP - تسوق المنتجات الفاخرة والحصرية | VIP Store",
  description: "اكتشف عالم الرفاهية في متجر VIP - أفخر المنتجات العالمية من مجوهرات، ساعات، حقائب، عطور وأزياء بأسعار حصرية. شحن مجاني وضمان مدى الحياة لأعضاء VIP.",
  keywords: "متجر فاخر, مجوهرات, ساعات, حقائب, عطور, أزياء, VIP, تسوق اونلاين, منتجات حصرية, الاردن",
  authors: [{ name: "متجر VIP" }],
  creator: "متجر VIP",
  publisher: "متجر VIP",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_JO",
    siteName: "متجر VIP",
    title: "متجر VIP - تسوق المنتجات الفاخرة والحصرية",
    description: "اكتشف عالم الرفاهية في متجر VIP - أفخر المنتجات العالمية بأسعار حصرية وخدمة VIP مميزة",
    images: [
      {
        url: "/app.png",
        width: 1200,
        height: 630,
        alt: "متجر VIP للمنتجات الفاخرة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "متجر VIP - تسوق المنتجات الفاخرة والحصرية",
    description: "اكتشف عالم الرفاهية في متجر VIP - أفخر المنتجات العالمية بأسعار حصرية",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#d97706",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="متجر VIP" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
