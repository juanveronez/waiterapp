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

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ visible, product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}
      onRequestClose={onClose}
    >
      <ProductImage
        source={{
          uri: `http://192.168.15.49:3001/uploads/${product.imagePath}`,
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
          <Button onPress={() => alert("added")}>Adicionar ao carrinho</Button>
        </FooterSafeArea>
      </Footer>
    </Modal>
  );
}
