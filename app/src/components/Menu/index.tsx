import { FlatList } from "react-native";

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCardButton,
} from "./styles";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModa";
import { useState } from "react";
import { Product } from "../../types/Product";
import { getProductUri } from "../../utils/getProductUri";

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ products, onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [focusedProduct, setFocusedProduct] = useState<Product | null>(null);

  function handleOpenProduct(product: Product) {
    setIsModalVisible(true);
    setFocusedProduct(product);
  }

  function handleCloseProduct() {
    setIsModalVisible(false);
    setFocusedProduct(null);
  }

  return (
    <>
      <ProductModal
        product={focusedProduct}
        visible={isModalVisible}
        onClose={handleCloseProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        data={products}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenProduct(product)}>
            <ProductImage
              source={{
                uri: getProductUri(product),
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#999">
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCardButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCardButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
