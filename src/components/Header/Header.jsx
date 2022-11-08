import logo from "../../image/logo.png";

import { HeaderStyle, List, Item, Link, HeaderBtn } from "./Header.styled";
export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <nav>
          <List>
            <Item>
              <Link href="/home">Home</Link>
            </Item>
            <Item>
              <Link href="/about">About</Link>
            </Item>
            <Item>
              <Link href="/contacts">Contacts</Link>
            </Item>
          </List>
        </nav>

        <a href="/home">
          <img src={logo} alt="logo company" />
        </a>

        <HeaderBtn>Buy Now</HeaderBtn>
      </HeaderStyle>
    </>
  );
};
