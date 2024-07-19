import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Rodapé.png)" }}>
    <div className='redes'>
        <a href='https://www.aluracursos.com/'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Alura <br />
            Seguido por Luis Fernando <br />
            Henao Garcia
    </strong>
</footer>
}

export default Footer