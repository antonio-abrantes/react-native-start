import React, { useState } from "react";
import { Modal } from "react-native";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

export function Register() {

  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria"
  }); 

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  // function handleCloseSelectCategoryModal () {
  //   setCategoryModalOpen(true);
  // }

  return ( 
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton 
              type="up" 
              title="Income"
              onPress={() => handleTransactionTypeSelect("up")} 
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down" 
              title="Outcome"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>
          <CategorySelectButton
            title={category.name}
            onPress={() => setCategoryModalOpen(true)}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={() => setCategoryModalOpen(false)}
        />
      </Modal>

    </Container>
  );
}
