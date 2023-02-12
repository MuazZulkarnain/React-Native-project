import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image style={styles.img} source={props.imageSource} />
      <Text>{props.title}</Text>
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
