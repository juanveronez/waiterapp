import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import {
  Actions,
  Container,
  Content,
  Image,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer,
} from "./styles";
import { getProductUri } from "../../utils/getProductUri";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";
import { Product } from "../../types/Product";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { useState } from "react";

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
}

export function Cart({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
}: CartProps) {
  const [isConfirmedModalVisible, setIsConfirmedModalVisible] = useState(false);
  const [isLoading] = useState(false);

  const isEmpty = cartItems.length === 0;

  const total = cartItems.reduce(
    (acc, { quantity, product: { price } }) => acc + quantity * price,
    0
  );

  function handleConfirmOrder() {
    setIsConfirmedModalVisible(true);
  }

  function handleCloseConfirmedModal() {
    onConfirmOrder();
    setIsConfirmedModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal
        onClose={handleCloseConfirmedModal}
        visible={isConfirmedModalVisible}
      />

      {!isEmpty && (
        <FlatList
          data={cartItems}
          keyExtractor={({ product }) => product._id}
          style={{ marginBottom: 20, maxHeight: 144 }}
          renderItem={({ item: { product, quantity } }) => (
            <Container>
              <Content>
                <Image
                  source={{
                    uri: getProductUri(product),
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color="#666">
                    {quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight="600">
                    {product.name}
                  </Text>
                  <Text size={14} color="#666">
                    {formatCurrency(product.price)}
                  </Text>
                </ProductDetails>
              </Content>
              <Actions>
                <TouchableOpacity onPress={() => onAdd(product)}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrement(product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Container>
          )}
        />
      )}
      <Summary>
        <TotalContainer>
          {!isEmpty ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>
        <Button
          loading={isLoading}
          onPress={handleConfirmOrder}
          disabled={isEmpty}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
