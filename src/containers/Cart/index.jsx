
import Logo from "../../assets/Logo.svg"
import { CartItems, CartResume } from "../../components";
import {Container, Banner, Content, Title} from "./style";

export function Cart(){
    return(
        <Container>
            <Banner>
                <img src={Logo} />  
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    )
}