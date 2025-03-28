import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Cart } from "../components/Cart";
import { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";

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
import { Category } from "../types/Category";
import { api } from "../utils/api";

export function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      api<Category[]>("categories"),
      api<Product[]>("products"),
    ]).then(([categoriesResponse, productsResponse]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

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

  async function handleSelectCategory(categoryId: string | null) {
    const route = !categoryId
      ? "products"
      : `categories/${categoryId}/products`;

    setIsLoadingProducts(true);
    const { data } = await api.get<Product[]>(route);
    setProducts(data);
    setIsLoadingProducts(false);
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

        {!isLoading && (
          <>
            <>
              <CategoriesContainer>
                <Categories
                  categories={categories}
                  onSelectCategory={handleSelectCategory}
                />
              </CategoriesContainer>
            </>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#d73035" size="large" />
              </CenteredContainer>
            ) : productsEmpty ? (
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            ) : (
              <MenuContainer>
                <Menu products={products} onAddToCart={handleAddToCart} />
              </MenuContainer>
            )}
          </>
        )}
      </Container>
      <Footer>
        <FooterSafeArea>
          {selectedTable ? (
            <Cart
              cartItems={cartItems}
              selectedTable={selectedTable}
              onConfirmOrder={handleResetOrder}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCart}
            />
          ) : (
            <Button
              disabled={isLoading || isLoadingProducts}
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
