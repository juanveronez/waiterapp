import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Container, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Container>
      <OrderModal
        order={selectedOrder}
        visible={isModalVisible}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        {!!orders.length && <span>({orders.length})</span>}
      </header>

      <OrdersContainer>
        {orders.map((order) => (
          <button
            onClick={() => handleOpenModal(order)}
            key={order._id}
            type="button"
          >
            <strong>{order.table}</strong>
            <span>
              {order.products.length === 1
                ? `${order.products.length} item`
                : `${order.products.length} itens`}
            </span>
          </button>
        ))}
      </OrdersContainer>
    </Container>
  );
}
