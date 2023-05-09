import React from "react";
import { Text, Checkbox, Center, NativeBaseProvider } from "native-base";

const Historial = () => {
  const [groupValues, setGroupValues] = React.useState([]);

  return (
    <NativeBaseProvider>
      <Center>
        <Text fontSize="xl" fontWeight="bold" mb={4}>Trabajos completos</Text>
        <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
          <Checkbox value="one" my={2}>
            <Text>
              Alex - Nissan{"\n"}
              <Text fontSize="sm" color="gray.500">Fecha: 09/05/2023</Text>
            </Text>
          </Checkbox>
          <Checkbox value="two" my={2}>
            <Text>
              Andrea - Versa{"\n"}
              <Text fontSize="sm" color="gray.500">Fecha: 17/04/2023</Text>
            </Text>
          </Checkbox>
          <Checkbox value="tree" my={2}>
            <Text>
              Leonor - Chevy{"\n"}
              <Text fontSize="sm" color="gray.500">Fecha: 23/03/2023</Text>
            </Text>
          </Checkbox>
        </Checkbox.Group>
      </Center>
    </NativeBaseProvider>
  );
};

export default Historial;


