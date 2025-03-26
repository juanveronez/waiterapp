import { Platform, StatusBar } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fafafa;

  ${isAndroid &&
  css`
    margin-top: ${StatusBar.currentHeight}px;
  `}
`;

export const CategoriesContainer = styled.View`
  height: 72px;
  margin-top: 32px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterSafeArea = styled.SafeAreaView``;
