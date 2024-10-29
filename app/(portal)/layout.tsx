import Header from '@/component/common/Header/Hedaer';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
