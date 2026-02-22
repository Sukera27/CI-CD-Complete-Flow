import PropTypes from 'prop-types'

export default function Card({id, name, picUrl, fechaConsulta}) {
    console.log(name)
    return (
        <>
            { (name && picUrl) ? (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg max-w-sm" src={picUrl} alt={name} />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {id ? id + ".": ""} {name}
                        </h5>
                        {(fechaConsulta) ? (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {fechaConsulta}
                        </p>
                        ) : (<></>)}
                    </div>
                </div>
                ) : (<></>)
            }
        </>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    picUrl: PropTypes.string,
    fechaConsulta: PropTypes.string,
  };