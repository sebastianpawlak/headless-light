async function waitAMoment() {
    await new Promise(r => setTimeout(r, 20000));
}

waitAMoment();

const Home = () => <h2>Test app</h2>;

export default Home;
