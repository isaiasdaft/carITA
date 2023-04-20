import React from "react";
import {Text, Checkbox, Center, NativeBaseProvider } from "native-base";

const Historial = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  return <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
      <Text>Trabajos completos</Text>
      <Checkbox value="one" my={2}>
        Alex - Nissan
      </Checkbox>
      <Checkbox value="two">Andrea - Versa</Checkbox>
      <Checkbox value="tree">Leonor - Chevy</Checkbox>
    </Checkbox.Group>;
};

export default Historial;