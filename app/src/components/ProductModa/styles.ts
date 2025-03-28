import styled from "styled-components/native";

export const ProductImage = styled.ImageBackground`
  height: 200px;
  width: 100%;

  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  padding: 4px;
  margin: 24px;

  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  flex: 1;
  background: #fafafa;

  padding: 32px 24px 0px;
`;

export const ModalHeader = styled.View`
  gap: 8px;
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const IngredientContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;

  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  padding: 16px;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterSafeArea = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainer = styled.View``;
