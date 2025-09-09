import styled from 'styled-components'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'


const HeaderContainer = styled.header`
    background-color: #302b63;
    color: #fff; /* garante que o texto fique visível */
    display: flex;
    justify-content: center;

`



function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
        </HeaderContainer>

    )
}

export default Header