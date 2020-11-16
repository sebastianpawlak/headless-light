const Home = () => <h2>Test app</h2>;

export const getStaticProps = async () => {
    console.log('fetching data')
    await new Promise(r => setTimeout(r, 20000))
    return {
        props: {},
    }
}

export default Home;
