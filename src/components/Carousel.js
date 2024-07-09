import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.carousel}>
      <Button title="Prev" onPress={goToPrevSlide} />
      <Image source={images[currentIndex]} style={styles.image} />
      <Button title="Next" onPress={goToNextSlide} />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Carousel;
