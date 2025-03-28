import styled from "styled-components/native";

export const Container = styled.View`
  padding: 8px 0;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
  margin-right: 12px;
`;

export const QuantityContainer = styled.View`
  display: block;
  min-width: 20px;
`;

export const ProductDetails = styled.View`
  gap: 4px;
`;

export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalContainer = styled.View`
  margin-right: 32px;
  flex: 1;
`;
