import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import * as Speech from "expo-speech"
import rarityEmojis from "../dictionaries/rarityEmojis.js"
import meatCharacteristics from "../dictionaries/meatCharacteristics.js"
import meatImages from "../dictionaries/meatImages.js"

export default function Result() {
  // pull from local variables
  const { meat, rarity } = useLocalSearchParams()
  // navigation
  const router = useRouter()
  const speak = (rant) => {
    try {
      const selectedVoice = availableVoices.find(
        (voice) => voice.language === "en-US" && voice.gender === "male"
      )
      Speech.speak(rant, {
        voice: selectedVoice.identifier,
      })
    } catch {
      Speech.speak(rant)
    }
  }

  return (
    <>
      {meat && (
        <ImageBackground
          source={{ uri: meatImages[meat] }}
          resizeMode="cover"
          style={styles.imageBG}
        >
          <View style={styles.overlay}>
            <View style={styles.content}>
              {<Text style={styles.emoji}>{rarityEmojis[rarity]}</Text>}
              {<Text style={styles.title}>You’re a {meat}!</Text>}
              {<Text style={styles.desc}>{meatCharacteristics[meat]}</Text>}
              <View style={styles.buttons}>
                {
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => speak(meatCharacteristics[meat])}
                  >
                    <Text>Read</Text>
                  </TouchableOpacity>
                }
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push("/quiz")}
                >
                  <Text>Take the Quiz again</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      )}
      {!meat && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/quiz")}
          >
            <Text>{"Take the Quiz" + (meat ? " again" : "")}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2f",
    borderRadius: 20,
    margin: 10,
  },
  imageBG: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: "5%",
    padding: 20
  },
  emoji: {
    color: "#9e9e00",
    fontSize: 40,
    marginBottom: 20,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#f8d57e",
    textShadowColor: "rgba(255, 255, 255, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  desc: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#ddd",
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    width: "50%",
    padding: 20, // you can adjust this
    alignItems: "center",
    backgroundColor: "#EAB68F", // just to see the size
    borderWidth: 1,
  },
})
