import { useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
    const [resp, setResp] = useState({
        name: "",
        picUrl: ""
    });
    const inputRef = useRef(null);

    const handleClick = () => {
        let id = inputRef.current.value
        if (id > 0 && id < 1026) {
            fetch(import.meta.env.VITE_CORE_API + 
                import.meta.env.VITE_ENDPOINT + 
                "/" + id)
            .then(response => response.json())
            .then(json => setResp(json))
        } else {
            console.log("El id tiene que ser entre 1 y 1025")
        }
    }

    return (
    <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <label htmlFor="id">Numero Simpsons: </label>
            <input type="text" id="id" name="id" ref={inputRef}></input>
            <button onClick={handleClick}>Buscar</button>
        </div>
        <Card name={resp.name} picUrl={resp.picUrl} />
        <Link to='/historial'>Historial</Link>
    </div>
    )
}