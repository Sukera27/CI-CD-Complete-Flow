import {Link} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import Card from '../components/Card'

export default function Historial() {
    const {isPending, error, data, refetch } = useQuery({
        queryKey: ['historial'],
        queryFn: () =>
          fetch(import.meta.env.VITE_AUDIT_API + 
                import.meta.env.VITE_ENDPOINT)
            .then(res => res.json())
      })
    
    if (isPending) return (
        <>
            <p>Cargando...</p>
            <Link to='/'>Volver</Link>
        </>
    )

    if (error) return (
        <>
            <p>An error has occurred: {error.message}</p>
            <button onClick={refetch}>Reintentar</button>
            <Link to='/'>Volver</Link>
        </>
    )
    return (
        <>
            <div className='flex flex-wrap gap-4'>
                {data.map(e => 
                    <Card key={e.id} id={e.id} name={e.name} picUrl={e.picUrl} fechaConsulta={e.fechaConsulta}/>
                )}
            </div>
            <Link to='/'>Volver</Link>
        </>       
    )
}