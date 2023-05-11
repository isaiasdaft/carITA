import React, { useState } from "react";
import { FlatList, Image } from "react-native";
import { Box, Text, Icon, Button, HStack, Center } from "native-base";

const carBrands = [
  {
    name: "Toyota",
    subtitle: "En mantenimiento",
    image:
      "https://www.toyota.mx/sites/default/files/modelos/galeria/CorollaHyb_1200x660_01_0.jpg",
  },
  {
    name: "Nissan Sentra",
    subtitle: "Cambio de piezas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlzTaaMGGFcuxFr8bc29WrXfvg7qv7otOrw&usqp=CAU",
  },
  {
    name: "Chevrolet Spark",
    subtitle: "En reparación",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFHWuEqyHt05KOYlPXLX4rIBfA5vVwfw0ZA&usqp=CAU",
  },
  {
    name: "Kia Rio",
    subtitle: "En mantenimiento",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJ9BgdLqtFjUNadzhStaZCiv1UPgRbzL8vQ&usqp=CAU",
  },
];

const Storec = () => {
  const [brands, setBrands] = useState(carBrands);

  const handleDeleteBrand = (index) => {
    const newBrands = [...brands];
    newBrands.splice(index, 1);
    setBrands(newBrands);
  };

  const renderItem = ({ item, index }) => (
    <Box
      p={2}
      flexDirection="row"
      alignItems="center"
      _dark={{ bg: "gray.700" }}
      _light={{ bg: "gray.100" }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 70, height: 70, marginRight: 10 }}
      />
      <Box flex={1}>
        <Text fontSize="lg" color="gray.600" fontWeight="bold">
          {item.name}
        </Text>
        <Text fontSize="sm" color="gray.500" fontWeight="normal">
          {item.subtitle}
        </Text>
      </Box>
      <Button
        onPress={() => handleDeleteBrand(index)}
        variant="ghost"
        colorScheme="danger"
        startIcon={
          <Icon
            size={4}
            color="red.500"
            as={
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/000000/trash.png",
                }}
              />
            }
          />
        }
      >
        Eliminar
      </Button>
    </Box>
  );

  return (
    <Box>
      <FlatList
        data={brands}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Box>
  );
};

export default Storec;
