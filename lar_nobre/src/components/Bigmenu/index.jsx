export const Bigmenu = ({onclick}) => {
    const homeRef = document.getElementById('home');
    const aboutRef = document.getElementById('about');
    const servicesRef = document.getElementById('services');
    const contactRef = document.getElementById('contact');

    return (
    <div className='big-menu'>
        <ul>
            <li onClick={() => onclick(homeRef)}>Home</li>
            <li onClick={() => onclick(aboutRef)}>Sobre</li>
            <li onClick={() => onclick(servicesRef)}>Serviços</li>
            <li onClick={() => onclick(contactRef)}>Contato</li>
        </ul>
    </div>
    )
}