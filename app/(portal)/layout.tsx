// import SubTop from '@/component/common/Sub/SubTop/SubTop';
import Header from '@/component/common/Header/Hedaer';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
