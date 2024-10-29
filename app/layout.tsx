import Header from '@/component/common/Header/Hedaer';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import RecoilRootProvider from '@/providers/RecoilRootProvider';
import '@/style/globals.scss';
import localFont from 'next/font/local';

// font
const Radiate = localFont({
  src: [
    {
      path: '../fonts/radiatesansLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/radiatesansRegular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/radiatesansBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/radiatesansExtrabold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--Radiate',
  display: 'fallback',
});
const RadiateSemiEx = localFont({
  src: [
    {
      path: '../fonts/radiatesansLightsemiexpanded.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/radiatesansRegularsemiexpanded.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/radiatesansBoldsemiexpanded.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/radiatesansExtraboldsemiexpanded.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--RadiateSemiEx',
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
      <body
        className={`${Radiate.variable} ${RadiateSemiEx.variable} ${Brice.variable} ${BriceSemiEx.variable}`}
      >
        {/* <ErrorBoundary> */}

        <RecoilRootProvider>
          {/* header */}
          <Header />
          {/* content */}
          <ReactQueryProvider>
            <div>
              {/* <SubTop /> */}
              {children}
            </div>
            {/* <div className="wrap"></div> */}

            {/* autoAlert */}
            {/* <AutoAlert /> */}
          </ReactQueryProvider>
          {/* footer */}
          {/* <Footer /> */}
        </RecoilRootProvider>

        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}
