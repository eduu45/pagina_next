import { useRouter } from 'next/router';

function DynamicPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Página Dinámica</h1>
            <p>ID: {id}</p>
        </div>
    );
}

export default DynamicPage;
