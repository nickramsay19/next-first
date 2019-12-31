import Layout from '../components/Layout';

export default function About() {

    let msg = 'hello there how are you?'

    return (
        <Layout>
            <h1>About page</h1>
            <p>
                { msg }
            </p>
        </Layout>
    );
}