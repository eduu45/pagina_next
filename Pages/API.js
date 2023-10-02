import Link from 'next/link';

const cargarPaises = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
}


import { useRouter } from 'next/router';

async function Page() {
    const router = useRouter();

    const paises = await cargarPaises();

    return (
        <>
            <h2 style={{
                fontFamily: 'monospace',
                color: 'blue',
                textAlign: 'center',
                fontSize: '25px'
            }}>API PAISES Eduardo</h2>
            {paises.then(paises => paises.map((valor, indice) => (
                <div
                    key={indice}
                    style={{
                        margin: '10px 0',
                        padding: '5px',
                        backgroundColor: 'lightblue',
                        borderRadius: '5px',
                        textAlign: 'center',
                        color: 'navy',
                        listStyle: 'none',
                    }}
                >
                    <Link href={`/pais/${valor.name.common}`}>
                        <a>{valor.name.common}</a>
                    </Link>
                </div>
            )))
            }
        </>
    );
}



export default Page;
