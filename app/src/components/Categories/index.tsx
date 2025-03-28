import { FlatList } from "react-native";
import { Text } from "../Text";
import { Container, Icon } from "./styles";
import { useState } from "react";
import { Category } from "../../types/Category";

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string | null) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(category);
    onSelectCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = category._id === selectedCategory;

        return (
          <Container onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">
              {category.name}
            </Text>
          </Container>
        );
      }}
    />
  );
}
