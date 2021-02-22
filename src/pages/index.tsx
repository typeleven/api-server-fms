import { useTheme } from 'next-themes';

const Home = (props) => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <h1 className="text-5xl">Next JS</h1>
            <h2>getServerSideProps</h2>
            <pre>{props.message}</pre>
            <h2>URL Query</h2>
            <pre>{JSON.stringify(props.query)}</pre>
            <pre>{JSON.stringify(theme)}</pre>
        </>
    );
};

export const getServerSideProps = (context) => {
    return { props: { message: 'OK?', query: context.query } };
};

export default Home;
