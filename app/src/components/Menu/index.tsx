import { FlatList } from "react-native";
import { products } from "../../mocks/products";

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

export function Menu() {
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
                uri: `http://192.168.15.49:3001/uploads/${product.imagePath}`,
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

            <AddToCardButton>
              <PlusCircle />
            </AddToCardButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
