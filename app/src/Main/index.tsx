import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import {
  Container,
  CategoriesContainer,
  Footer,
  MenuContainer,
  FooterSafeArea,
} from "./styles";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<null | string>(null);

  function handleCancelOrder() {
    setSelectedTable(null);
    setIsTableModalVisible(false);
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterSafeArea>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo pedido
            </Button>
          )}
        </FooterSafeArea>
      </Footer>

      <TableModal
        onSave={setSelectedTable}
        onClose={() => setIsTableModalVisible(false)}
        visible={isTableModalVisible}
      />
    </>
  );
}
