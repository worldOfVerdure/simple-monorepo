//components
import { Footer } from '../components/footer';
import { Header } from '../components/header/';
//data
import { staticHeaderData } from '../components/header/header-data/staticHeaderData';
//fonts
import { Noto_Sans, Work_Sans } from 'next/font/google';
//metadata
import { metadata } from './metadata';
//styles
import '@simple-monorepo/design-system/src/reset.css';
import '@simple-monorepo/design-system/src/tokens.css';
import './styles/theme-base.css';
import './styles/theme-light.css';
import './styles/theme-dark.css';
import '@simple-monorepo/design-system/src/base.css';
import './styles/app-base.css';
import '@simple-monorepo/design-system/src/utilities.css';

export { metadata };

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans'
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-work-sans'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${workSans.variable} ${notoSans.variable}`} lang="en-US">
      <body>
        <Header links={staticHeaderData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
