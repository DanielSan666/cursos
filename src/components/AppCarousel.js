import { Dimensions, StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

export default function AppCarousel() {
    const [pagingEnabled, setPagingEnabled] = useState(true);
    const width = Dimensions.get('window').width;
    const progressValue = useSharedValue(0);

    const list = [
        {
            id: 1,
            title: 'First Item',
            image: require('./images/img1.png')
        },
        {
            id: 2,
            title: 'Second Item',
            image: require('./images/img2.png')
        },
        {
            id: 3,
            title: 'Third Item',
            image: require('./images/img3.jpg')
        },
    ];

    const withPauseAdvancedParallax = (animationValue, index) => {
        "worklet";
    
        const MIN_SCALE = 0.85;
        const MAX_SCALE = 1;
    
        const scale = interpolate(
            animationValue.value,
            [-1, 0, 1],
            [MIN_SCALE, MAX_SCALE, MIN_SCALE],
            Extrapolate.CLAMP
        );
    
        return scale;
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                width={width}
                height={width / 2}
                data={list}
                autoPlay={true}
                pagingEnabled={pagingEnabled}
                scrollAnimationDuration={1000}
                onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                renderItem={({ item, animationValue }) => {
                    const animatedStyle = useAnimatedStyle(() => {
                        return {
                            transform: [
                                {
                                    scale: withPauseAdvancedParallax(animationValue, item.id),
                                },
                            ],
                        };
                    });

                    return (
                        <Animated.View key={item.id} style={[styles.CarouselItem, animatedStyle]}>
                            <Image style={styles.img} source={item.image} />
                        </Animated.View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    CarouselItem: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover' // Esta propiedad asegura que la imagen cubra el contenedor completamente
    }
});
