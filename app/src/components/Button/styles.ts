import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  color: string;
}>`
  background-color: ${({ disabled, color }) => (disabled ? "#999" : color)};
  border-radius: 48px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
`;
