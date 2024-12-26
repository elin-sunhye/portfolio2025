import Header from '@/component/common/Header/Hedaer';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import AutoAlert from "@/component/common/AutoAlert/Auto";

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header/>
            {/* content */}
            <ReactQueryProvider>
                <div>
                    {/* <SubTop /> */}
                    {children}
                </div>
                {/* <div className="wrap"></div> */}

                {/* autoAlert */}
                <AutoAlert/>
            </ReactQueryProvider>
            {/* footer */}
            {/* <Footer /> */}
        </>
    );
}
