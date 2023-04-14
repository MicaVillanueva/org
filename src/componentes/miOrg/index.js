import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {

    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title" >Mi organización</h3>
        <img src="/img/boton-add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg 