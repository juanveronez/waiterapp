import { Modal, Platform, TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { ModalBody, Overlay, Header, Form, Input } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onCancel, onSave }: TableModalProps) {
  const [tableInput, setTableInput] = useState("");

  function handleSave() {
    onSave(tableInput);
    setTableInput("");
  }

  function handleCancel() {
    onCancel();
    setTableInput("");
  }

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={handleCancel}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTableInput}
            />
          </Form>

          <Button onPress={handleSave} disabled={!tableInput}>
            Salvar
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
