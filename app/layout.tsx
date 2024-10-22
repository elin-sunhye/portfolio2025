import AutoAlert from '@/component/common/AutoAlert/AutoAlert';
import NextAuthProvider from '@/providers/NextAuthProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import RecoilRootProvider from '@/providers/RecoilRootProvider';
import '@/style/globals.scss';
import localFont from 'next/font/local';
import ErrorBoundary from '@/component/common/ErrorBoundary/ErrorBoundary';

// font
const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--pretendard',
  display: 'fallback',
});
const Gmarket = localFont({
  src: [
    {
      path: '../fonts/Gmarket/GmarketSansLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Gmarket/GmarketSansMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Gmarket/GmarketSansBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--gmarket',
  display: 'fallback',
});

// 메타 데이터 설정
export const metadata = {
  title: 'PORTFOLIO',
  description: 'PORTFOLIO',
  openGraph: {
    type: 'website',
    title: 'WIKPORTFOLIO',
    description: 'PORTFOLIO',
    images: '',
    // url: "https://PORTFOLIO.com",
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: 'PORTFOLIO',
  viewport: { width: 'device-width', initialScale: 1.0 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // https://www.crosstarget.co.kr/main/
  return (
    // <html lang="en">
    //   <body>{children}</body>
    // </html>
    <html lang="ko">
      <head>
        {/* <script
          type={'text/javascript'}
          src={
            '//dapi.kakao.com/v2/maps/sdk.js?appkey=77df11cd6f0bce2eee8159226e7ca2e5&libraries=services,clusterer&autoload=false'
          }
          defer
        /> */}
      </head>
      <body className={`${pretendard.variable} ${Gmarket.variable}`}>
        <ErrorBoundary>
          <NextAuthProvider>
            <RecoilRootProvider>{children}</RecoilRootProvider>
          </NextAuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
