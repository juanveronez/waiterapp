import { FlatList, Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/Product";
import {
  CloseButton,
  ProductImage,
  ModalBody,
  ModalHeader,
  IngredientsContainer,
  IngredientContent,
  FooterSafeArea,
  Footer,
  PriceContainer,
} from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { formatCurrency } from "../../utils/formatCurrency";
import { getProductUri } from "../../utils/getProductUri";

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({
  visible,
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  if (!product) return null;

  function handleAddToCart() {
    if (!product) throw new Error("product should be deffined before use it.");

    onAddToCart(product);
    onClose();
  }

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}
      onRequestClose={onClose}
    >
      <ProductImage
        source={{
          uri: getProductUri(product),
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ProductImage>
      <ModalBody>
        <ModalHeader>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666">{product.description}</Text>
        </ModalHeader>

        {!!product.ingredients.length && (
          <IngredientsContainer>
            <Text weight="600" color="#666">
              Ingredientes
            </Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={({ _id }) => _id}
              showsVerticalScrollIndicator={false}
              style={{ marginVertical: 16 }}
              renderItem={({ item: ingredient }) => (
                <IngredientContent>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666">
                    {ingredient.name}
                  </Text>
                </IngredientContent>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterSafeArea>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>
          <Button onPress={handleAddToCart}>Adicionar ao carrinho</Button>
        </FooterSafeArea>
      </Footer>
    </Modal>
  );
}
