import './style.css';
import image from '../../assets/Images/img_about.jpg'

export const About = () => {
    return (
        <div id='about' className="about grid-container">
            <img src={image} alt="teste"/>  
            <div>
                <h1> SOBRE </h1>
                <span className='separator'></span>
                <div className='about-text'>
                    <p>
                        Atuando a mais de 20 anos em Segurança de Eventos e Segurança Patrimonial, a <strong>LARNOBRE SEGURANÇA</strong> presta serviços terceirizados aos principais órgãos públicos, empresas de seguro, construtoras, casas, eventos e lojas. 
                    </p>

                    <p>
                        Somos uma das empresas mais eficientes em prestação de serviços de Segurança Patrimonial no Estado de São Paulo, buscando sempre atender as necessidades dos clientes com a máxima agilidade e dinamismo, utilizando método baseados na capacitação profissional de nossos colaboradores, bem como na sofisticação de nossos equipamentos garantindo assim a qualidade dos serviços prestados. 
                    </p>
                </div>
            </div>
           

            {/* <h2>A solução para a segurança do seu empreendimento! </h2> */}
        </div>
    );
}