import Loading from "../components/common/Loading";
import { Suspense } from "react";
import Banner from "../components/home/Banner";
import Paint from "../components/home/Paint";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Nomad Mavel Characters</title>
            </Helmet>
            <Banner />
            <Suspense fallback={<Loading />}>
                <Paint />
            </Suspense>
        </>
    );
}
