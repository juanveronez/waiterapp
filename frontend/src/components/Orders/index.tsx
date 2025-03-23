import { orders } from "../../mocks/orders";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕓" orders={orders} title="Fila de espera" />
      <OrdersBoard icon="🧑‍🍳" orders={[]} title="Em preparação" />
      <OrdersBoard icon="✅" orders={[]} title="Pronto!" />
    </Container>
  );
}
