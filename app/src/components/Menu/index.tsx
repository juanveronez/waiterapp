import { FlatList } from "react-native";
import { products } from "../../mocks/products";

import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCardButton,
} from "./styles";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

export function Menu() {
  return (
    <FlatList
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={products}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
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
        </Product>
      )}
    />
  );
}
