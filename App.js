import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function App() {
  const caroselRef = useRef(null);

  const [lista, setLista] = useState([
    {
      título: "O Justiceiro",
      texto: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará conhecido conhecido como O Justiceiro",
      lançamento: 2018,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    },
    {
      título: "Bad Boys para a vida",
      texto: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      lançamento: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    },
    {
      título: "Viúva Negra",
      texto: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para tornar seu agente definitiva.",
      lançamento: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    },
    {
      título: "Top Gun: MAVERICK",
      texto: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas. ",
      lançamento: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    },
    {
      título: "BloodShot",
      texto: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear.",
      lançamento: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    },
    {
      título: "Free Guy",
      texto: "Um caixa de banco preso a uma rotina entediante tem sua vida virada de cabeça para baixo quando ele descobre que o personagem em um brutalmente realista jogo de vídeo de mundo aberto.",
      lançamento: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={{ uri: item.img }}
            style={styles.carouselImg}
          />
          <Text style={styles.carouselText}>{item.título}</Text>
          <Icon
            name="play-circle-outline"
            size={30} color="#FFF"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground
            source={{ uri: background }}
            style={styles.imgBg}
            blurRadius={8}
          >
            <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder='Procurando algo'
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color='#000' size={25} />
              </TouchableOpacity>
            </View>

            <Text
              style={{ color: '#fff', fontSize: 25, marginLeft: 10, marginVertical: 10, }}
            >
              Acabou de chegar
            </Text>

            <View style={styles.slideView}>
              <Carousel
                style={styles.carousel}
                ref={caroselRef}
                data={lista}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackground(lista[index].img);
                  setActiveIndex(index);
                }}
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{ marginTop: 15 }}>
                <Text style={styles.movieTitle}>{lista[activeIndex].título}</Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].texto}</Text>
              </View>
              <TouchableOpacity
                style={{ marginRight: 25, marginTop: 15 }}
                onPress={() => alert('CLICOU')}
              >
                <Icon
                  name="queue"
                  color="#131313"
                  size={30}
                />
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  viewSearch: {
    marginTop: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 1,
    overflow: 'visible'
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText: {
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  moreInfo: {
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle: {
    paddingLeft: 25,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc: {
    paddingLeft: 25,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
});