import './style.css';

export const Formcontato = () => {
    return (
        <form className="formcontato">
            <label>Nome:</label>
            <input type="text" placeholder='Digite seu nome aqui...'></input>
            <label>Celular:</label>
            <input type="text" placeholder='Digite seu celular aqui...'></input>
            <label>Email:</label>
            <input type="text" placeholder='Digite seu melhor email!'></input>
            <button type='submit'>Enviar</button>
        </form>
    );
}