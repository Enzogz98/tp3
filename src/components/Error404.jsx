import { Link } from "react-router-dom"
const Error404 = () => {
  return (
    <div>
        <img src="https://programacion.net/files/article/20170203090249_404.jpg" alt="100px" />
        <h1>El elemento aun no ha sido creado en este momento</h1>
        <Link className="btn btn-primary" to="/">Regrese a la pagina principal</Link>
    </div>
  )
}

export default Error404