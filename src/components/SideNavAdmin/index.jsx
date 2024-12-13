import { navLinks } from "./navLinks"
import Logo from '../../assets/Logo.svg'
import { SignOut } from "@phosphor-icons/react"
import { useResolvedPath } from 'react-router-dom';

import { Container, NavLinkContainer, NavLink, Footer } from "./styles"
import { useUser } from '../../hooks/UserContext'


export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    console.log(pathname)

    return (
        <Container>
            <img src={Logo} alt="Hamburguer Logo DevBurger" />
            <NavLinkContainer>
                {navLinks.map(link => (
                    <NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}