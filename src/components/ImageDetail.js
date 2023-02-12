import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image style={styles.img} source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
  },
});

export default ImageDetail;
