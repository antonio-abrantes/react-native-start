import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Forms/Button";
import { categories } from "../../utils/categories";

import { 
  Category,
  Container, 
  Header, 
  Icon, 
  Name, 
  Separator, 
  Title,
  Footer
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory?: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {

  function handleCategorySelect(item: Category) {
    setCategory(item);
  }

  return (
    <Container>
      <Header>
        <Title>{category?.name}</Title>
      </Header>

      <FlatList
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key }
        renderItem={({item}) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isAcative={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator/>}
      />
 
      <Footer>
        <Button
          title="Selectionar"
          onPress={closeSelectCategory}
        />
      </Footer>

    </Container>
  );
}
