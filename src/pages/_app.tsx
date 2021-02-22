import '../styles/globals.css';
import { NavBar } from '../components';
import { ThemeProvider } from 'next-themes';
import { Html } from 'next/document';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider attribute="class">
                <NavBar />
                <div className="dark:bg-black dark:text-green-500 h-screen">
                    <div className="container-main ">
                        <Component {...pageProps} />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
};
export default App;
