export const Bigmenu = ({onclick}) => {

    return (
    <div className='big-menu'>
        <ul>
            <li onClick={() => onclick('home')}>Home</li>
            <li onClick={() => onclick('about')}>Sobre</li>
            <li onClick={() => onclick('services')}>Serviços</li>
            <li onClick={() => onclick('contact')}>Contato</li>
        </ul>
    </div>
    )
}