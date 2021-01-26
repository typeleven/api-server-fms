export default (props) => {
    return (
        <>
            <h1>Next JS</h1>
            <h2>getServerSideProps</h2>
            <pre>{props.message}</pre>
            <h2>URL Query</h2>
            <pre>{JSON.stringify(props.query)}</pre>
        </>
    );
};

export const getServerSideProps = (context) => {
    return { props: { message: 'OK?', query: context.query } };
};
