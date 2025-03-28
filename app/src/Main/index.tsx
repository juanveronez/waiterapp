import { ActivityIndicator } from "react-native";
import { useState } from "react";

import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Cart } from "../components/Cart";
import { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";
import { products as mockedProducts } from "../mocks/products";

import {
  Container,
  CategoriesContainer,
  Footer,
  MenuContainer,
  FooterSafeArea,
  CenteredContainer,
} from "./styles";
import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";

export function Main() {
  const [isLoading] = useState(false);
  const [products] = useState(mockedProducts);

  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<null | string>(null);

  const productsEmpty = products.length === 0;

  const { cartItems, onDecrementCart, onIncrementCart, onClearCart } =
    useCart();

  function handleOpenModal() {
    setIsTableModalVisible(true);
  }

  function handleResetOrder() {
    setIsTableModalVisible(false);
    setSelectedTable(null);
    onClearCart();
  }

  function handleSelectTable(table: string) {
    setIsTableModalVisible(false);
    setSelectedTable(table);
  }

  function handleCancelTableSelection() {
    setIsTableModalVisible(false);
    onClearCart();
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      handleOpenModal();
    }

    onIncrementCart(product);
  }

  function handleDecrementCart(product: Product) {
    onDecrementCart(product);
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        )}

        {productsEmpty && (
          <CenteredContainer>
            <Empty />
            <Text color="#666" style={{ marginTop: 24 }}>
              Nenhum produto foi encontrado!
            </Text>
          </CenteredContainer>
        )}

        {!isLoading && !productsEmpty && (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            <MenuContainer>
              <Menu products={products} onAddToCart={handleAddToCart} />
            </MenuContainer>
          </>
        )}
      </Container>
      <Footer>
        <FooterSafeArea>
          {selectedTable ? (
            <Cart
              onConfirmOrder={handleResetOrder}
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCart}
            />
          ) : (
            <Button
              disabled={isLoading || productsEmpty}
              onPress={handleOpenModal}
            >
              Novo pedido
            </Button>
          )}
        </FooterSafeArea>
      </Footer>

      <TableModal
        onSave={handleSelectTable}
        onCancel={handleCancelTableSelection}
        visible={isTableModalVisible}
      />
    </>
  );
}
