import Layout from '../../components/Layout';
import Link from 'next/Link';

export default function About() {

    let posts = [
        { id: 1, title: 'My day at the park', content: 'It was a lovely day at the park walking my dog.' },
        { id: 2, title: 'Trip to the beach', content: 'I love the smell of sea water.' }
    ]

    function PostsList(props) {
        const listItems = posts.map((post) => 
            <li>
                <Link href={`./posts/${post.id}`}>
                    <a>{ post.title }</a>
                </Link>
            </li>
        );

        return (
            <ul>{ listItems }</ul>
        )
    }

    return (
        <Layout>
            <h1>Posts</h1>
            
            <PostsList></PostsList>
            
        </Layout>
    );
}