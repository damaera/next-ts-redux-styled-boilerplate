import styled from "../styledComponents";

interface ContainerProps {
  flex?: boolean;
  maxWidth?: number;
}

export const Container = styled.div<ContainerProps>`
  max-width: ${props =>
    props.maxWidth ? props.maxWidth : props.theme.containerWidth}px;
  margin: 0 auto;
  padding: 16px;
  display: ${props => (props.flex ? "flex" : "inherit")};

  @media (max-width: 820px) {
    .hide-tablet {
      display: none;
    }
  }

  @media (max-width: 820px) {
    .hide-mobile {
      display: none;
    }
  }
`;
