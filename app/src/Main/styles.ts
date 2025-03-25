import { Platform, StatusBar } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  ${isAndroid &&
  css`
    margin-top: ${StatusBar.currentHeight}px;
  `}
`;
