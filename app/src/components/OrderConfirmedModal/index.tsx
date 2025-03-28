import { Modal } from "react-native";
import { Text } from "../Text";
import { Button } from "../Button";
import { Container } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";

interface OrderConfirmedModalProps {
  visible: boolean;
  onClose: () => void;
}

export function OrderConfirmedModal({
  visible,
  onClose,
}: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <CheckCircle />
        <Text color="#fff" size={20} weight="600" style={{ marginTop: 12 }}>
          Pedidio confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O pedidio entrou na fila de produção!
        </Text>
        <Button variant onPress={onClose} style={{ marginTop: 24 }}>
          OK
        </Button>
      </Container>
    </Modal>
  );
}
