import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  word-spacing: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
`
