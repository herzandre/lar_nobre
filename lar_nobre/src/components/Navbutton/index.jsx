import './style.css';

export const Navbutton = ({ onClick, className }) => {
    return (
        <div id="nav-icon" onClick={ onClick } className={ className }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}