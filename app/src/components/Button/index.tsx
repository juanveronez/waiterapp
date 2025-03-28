import { Text } from "../Text";
import { Container } from "./styles";

import { ActivityIndicator, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  variant?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  variant,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const primaryColor = "#d73035";
  const secundaryColor = "#fff";

  const backgroundColor = !variant ? primaryColor : secundaryColor;
  const textColor = !variant ? secundaryColor : primaryColor;

  return (
    <Container
      {...props}
      disabled={loading || disabled}
      color={backgroundColor}
    >
      {!loading ? (
        <Text weight="600" color={textColor}>
          {children}
        </Text>
      ) : (
        <ActivityIndicator color={textColor} />
      )}
    </Container>
  );
}
