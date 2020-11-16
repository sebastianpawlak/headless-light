function Home({ stars }) {
    return <div>Test app: {stars}</div>
}

Home.getInitialProps = async (ctx) => {
    await new Promise(r => setTimeout(r, 20000))
    return { stars: 20000 }
}

export default Home;
