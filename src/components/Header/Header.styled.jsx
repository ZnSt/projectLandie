import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 60px;

  :last-child {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #505f98;
`;

export const HeaderBtn = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 160px;
  height: 26px;
  border-radius: 2px;
  text-align: center;
  border-color: transparent;
  background-color: #111b47;

  color: #ffffff;
`;
