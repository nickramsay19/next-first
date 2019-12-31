import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Post() {
    let posts = [
        { id: 1, title: 'My day at the park', content: 'It was a lovely day at the park walking my dog.' },
        { id: 2, title: 'Trip to the beach', content: 'I love the smell of sea water.' }
    ]

    function getPost(id){
        for(let i = 0; i < posts.length; i++){
            if(id == posts[i].id){
                return posts[i]
            }
        }
        return { id: -1, title: 'Post not found', content: 'Page not found' }
    }

    const router = useRouter();

    const post = getPost(router.query.id)

    return (
        <Layout>
            <h1>{ post.title }</h1>
            <p>{ post.content }</p>
        </Layout>
    )
}