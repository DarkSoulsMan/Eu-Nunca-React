import icon from '../../assents/icons/icon.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImagem = styled.img`
    height: 85px;
    margin-right: 10px;
`




function Logo(){
    return(
        <LogoContainer>
            <LogoImagem 
                src={icon}      
                alt='logo'
            />
            <p>Eu <strong>Nunca</strong></p>
        </LogoContainer>
    );
}

export default Logo