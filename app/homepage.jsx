import { View, Text, StyleSheet, ImageBackground } from "react-native"
import bgImage from "../assets/bg.jpg"

const Page = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBG}>
        <Text style={styles.text}>Welcome,{"\n"} to MEET MEAT!</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageBG: { flex: 1, justifyContent: "center" },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
})

export default Page
