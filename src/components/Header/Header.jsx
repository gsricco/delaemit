import {HeaderContainer, Title} from "@/components/Header/Header.styled";

export const Header = ({ title, children }) => (
    <HeaderContainer>
        <Title>{title}</Title>
        {children}
    </HeaderContainer>
);

