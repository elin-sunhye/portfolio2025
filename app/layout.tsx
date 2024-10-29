import RecoilRootProvider from '@/providers/RecoilRootProvider';
import '@/style/globals.scss';
import localFont from 'next/font/local';

// font
const Termina = localFont({
  src: [
    {
      path: '../fonts/TerminaThin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaDemi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaHeavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/TerminaBlack.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--Termina',
  display: 'fallback',
});
const Brice = localFont({
  src: [
    {
      path: '../fonts/BriceExtraLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/BriceLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/BriceRegular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/BriceSemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/BriceBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/BriceBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--Brice',
  display: 'fallback',
});

const BriceSemiEx = localFont({
  src: [
    {
      path: '../fonts/BriceExtraLightSemiExpanded.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/BriceLightSemiExpanded.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/BriceRegularSemiExpanded.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/BriceSemiBoldSemiExpanded.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/BriceBoldSemiExpanded.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/BriceBlackSemiExpanded.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--BriceSemiEx',
  display: 'fallback',
});

// 메타 데이터 설정
export const metadata = {
  title: 'PORTFOLIO',
  description: 'PORTFOLIO',
  openGraph: {
    type: 'website',
    title: 'PORTFOLIO',
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
  // https://www.dopplepress.com/
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
      <body
        className={`${Termina.variable} ${Brice.variable} ${BriceSemiEx.variable}`}
      >
        {/* <ErrorBoundary> */}

        <RecoilRootProvider>{children}</RecoilRootProvider>

        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}
