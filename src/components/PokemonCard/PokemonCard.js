import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {capitalizeWord} from '@/helpers/text';

const PokemonCard = ({imageURL, name, types, id}) => {
  const formattedTypes =
    types?.length === 1
      ? capitalizeWord(types[0].type.name)
      : types?.map(({type}) => capitalizeWord(type.name)).join(' / ');
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        style={styles.imageContainer}
        colors={['red', 'white']}
        locations={[0.5, 0.5]}>
        <Image style={styles.image} source={{uri: imageURL}} />
        <View style={styles.imageContainerLine} />
        <View style={styles.imageContainerCircle} />
      </LinearGradient>
      <Text style={styles.nameText}>{capitalizeWord(name)}</Text>
      <Text style={styles.sectionTitle}>{'PokeDex ID'}</Text>
      <Text style={styles.sectionContentText}>{id}</Text>
      <Text style={styles.sectionTitle}>{'Types'}</Text>
      <Text style={styles.sectionContentText}>{formattedTypes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  nameText: {
    marginTop: 20,
    fontSize: 36,
    fontWeight: '700',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '600',
    color: '#212121',
  },
  sectionContentText: {
    marginTop: 10,
    fontSize: 18,
    color: '#424242',
  },
  image: {
    zIndex: 20,
    width: 200,
    height: 200,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 100,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2,
    zIndex: 0,
  },
  imageContainerLine: {
    position: 'absolute',
    width: 200,
    backgroundColor: 'black',
    height: 6,
    top: 100,
  },
  imageContainerCircle: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    zIndex: 10,
    top: 88,
    right: 90,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 15,
  },
});

export default PokemonCard;
