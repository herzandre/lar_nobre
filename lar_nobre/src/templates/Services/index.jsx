import './style.css';
import vigia from '../../assets/Images/icon_vigia.png'
import patrimonio from '../../assets/Images/icon_patrimonio.png'


export const Services = () => {
    return (
        <div id='services' className="services">
            <h2> SERVIÇOS </h2>
            <span className='separator'></span>

            <div className='grid-container'>
                <div>
                    <img src={vigia} alt='Símbolo de vigia'></img>
                    <h2>Vigia</h2>
                    <p>
                        Nossos profissionais são orientados e treinados para o exercício de suas funções e passam por pesquisa social, criminal, médica e psicológica de forma a manter a segurança de nossos clientes e a licitude de nossos serviços. Atuamos de forma profissional e responsável. Encarregados Operacionais supervisionam constantemente os postos com a finalidade de acompanhar as atividades e corrigir possíveis e falhas, além de manter aberta e eficaz a linha de comunicação entre a <strong>LARNOBRE SEGURANÇAS</strong> e seus clientes, podendo trocar imediatamente de profissional, caso o contratante não se sinta bem. 
                    </p>
                </div>

                <div>
                    <img src={patrimonio} alt='Símbolo de vigilância de patrimônio'></img>
                    <h2>Vigilância Patrimonial</h2>
                    <p>
                        Prestamos serviços de segurança e vigilância patrimonial desarmada, oferecendo ao cliente uma completa assessoria técnica e excelência em controle operacional realizado por equipe de supervisão qualificada e experiente de modo a manter o maior nível de qualidade. A divisão de Segurança Patrimonial desenvolve também uma completa análise de risco, manual de normas e procedimentos, bem como planos de contingência para todos os seus clientes, procurando sempre adequar às normas de segurança e a realidade operacional de cada um deles. A confiança e credibilidade alinhada com a transparência do trabalho resultam em soluções ideais para suas necessidades. Atuamos em diversas áreas com enorme número de profissionais devidamente treinados e capacitados para atender suas expectativas.
                    </p>
                </div>
            </div>
            
        </div>
    );
}