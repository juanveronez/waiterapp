import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect, useMemo } from "react";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleEscDown({ key }: KeyboardEvent) {
      if (key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscDown);

    return () => {
      document.removeEventListener("keydown", handleEscDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = useMemo(
    () =>
      order.products.reduce(
        (acc, { product, quantity }) => acc + quantity * product.price,
        0
      ),
    [order]
  );

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>{order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Close icon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕓"}
              {order.status === "IN_PRODUCTION" && "🧑‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em preparação"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="products-container">
            {order.products.map(({ _id, product, quantity }) => (
              <div key={_id} className="item">
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />

                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>🧑‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type="button" className="cancel">
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
