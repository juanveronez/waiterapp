import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, OrderContainer, OrderHeader, Table } from "./styles";

interface HeaderProps {
  selectedTable: null | string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable ? (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER<Text size={24}>APP</Text>
          </Text>
        </>
      ) : (
        <OrderContainer>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text color="#d73035" size={14} weight="600">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </Table>
        </OrderContainer>
      )}
    </Container>
  );
}
