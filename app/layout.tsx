import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import FloatingButtons from '@/components/global/floatingButtons';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Repair Centers | Home Appliance Repair & Maintenance',
  description:
    'Home appliance repair across the UAE. Refrigerators, washing machines, ovens, dishwashers, dryers and cooking ranges, repaired by trained technicians. Message us on WhatsApp.',
  keywords: [
    'home appliance repair',
    'refrigerator repair',
    'washing machine repair',
    'oven repair',
    'dishwasher repair',
    'dryer repair',
  ],
  openGraph: {
    title: 'Repair Centers | Home Appliance Repair',
    description:
      'Home appliance repair across the UAE. Same-day service, upfront quotes, trained technicians.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn('h-full', 'antialiased', openSans.variable, 'font-sans')}
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
