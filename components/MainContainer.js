import A from "./A";
import Head from "next/head";


const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs" + keywords}/>
                <title>Main Page</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Home"/>
                <A href="/users" text="Users"/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;