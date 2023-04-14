import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}> 
    <div className="redes">
        < a href="https://www.linkedin.com/in/micaela-villanueva/" target="_blank">
            <img src="/img/linkedin.png" alt="LinkedIn"/>
        </a>
        <a href="https://app.aluracursos.com/user/micav95" target="_blank" >
            <img src="/img/alura.png" alt="Alura"/>
        </a>
    </div>
    <img src="/img/Logo.png" alt="org" className="logo" />
    <strong>Desarrollado por Micaela Villanueva</strong>
    </footer>
}

export default Footer
