import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  TouchableOpacity, // TouchableOpacity will be our button component
  StyleSheet,
} from "react-native"
import { useRouter } from "expo-router"
import * as Speech from "expo-speech"
import meats from "../dictionaries/meats"

import questions from "../dictionaries/questions"

export default function Quiz() {
  const router = useRouter()
  const [questionCount, setQuestionCount] = useState(-1)
  const [askedQuestions, setAskedOptions] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ])
  const [question, setQuestion] = useState({
    question: "Question",
    options: [
      { meat: "Lamb Chop", rarity: "Epic" },
      { meat: "Chicken Thigh", rarity: "Uncommon" },
      { meat: "Flank", rarity: "Common" },
    ],
  })

  useEffect(() => nextQuestion(), [])

  const speak = () => {
    try {
      const selectedVoice = availableVoices.find(
        (voice) => voice.language === "en-US" && voice.gender === "male"
      )
      Speech.speak(question.question, {
        voice: selectedVoice.identifier,
      })
    } catch {
      Speech.speak(question.question)
    }
  }

  const restart = () => {
    setQuestionCount(0)
    setAskedOptions([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1])
    Object.keys(meats).forEach((rarity) => {
      Object.keys(meats[rarity]).forEach((meat) => {
        meats[rarity][meat] = 0
      })
    })
    console.log("restarting")
  }

  const getTopMeat = (topRarity) => {
    let topMeat = null
    let maxPoints = -Infinity

    for (const meat in meats[topRarity]) {
      const total = Object.values(meats[topRarity][meat]).reduce(
        (sum, val) => sum + val,
        0
      )
      if (total > maxPoints) {
        maxPoints = total
        topMeat = meat
      }
    }
    return topMeat
  }

  const getTopRarity = () => {
    let topRarity = null
    let maxPoints = 0

    for (const rarity in meats) {
      const total = Object.values(meats[rarity]).reduce(
        (sum, val) => sum + val,
        0
      )
      if (total > maxPoints) {
        maxPoints = total
        topRarity = rarity
      }
    }
    return topRarity
  }

  const endQuiz = async () => {
    // get the rarity with the highest total score
    const topRarity = getTopRarity()
    // get the meat with the highest of the rarity with th highest total score
    const topMeat = getTopMeat(topRarity)
    // push into local variables
    router.push({
      pathname: "./result", // navigation
      params: { meat: topMeat, rarity: topRarity },
    })
    restart()
  }

  const nextQuestion = () => {
    // Math.random() * <number of questions>
    let randomQuestionIndex = Math.floor(Math.random() * 50)
    // Check that question has yet to be asked
    while (askedQuestions.includes(randomQuestionIndex)) {
      randomQuestionIndex = Math.floor(Math.random() * 50)
    }
    askedQuestions[questionCount] = randomQuestionIndex
    setQuestionCount(questionCount + 1)
    setQuestion(questions[randomQuestionIndex])
  }

  const incMeatScore = (meat, rarity) => {
    switch (rarity) {
      case "Legendary":
        meats[rarity][meat] += 1
      case "Epic":
        meats[rarity][meat] += 5
      case "Uncommon":
        meats[rarity][meat] += 7
      case "Common":
        meats[rarity][meat] += 10
      default:
        console.log("meat increase issue")
        ++meats[rarity][meat]
    }
  }

  // main
  const handleOption = (meat, rarity) => {
    incMeatScore(meat, rarity)
    // Quiz end after 10 questions.
    if (questionCount < 9) {
      nextQuestion()
    } else {
      endQuiz()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questionCount + 1}. {question.question}
      </Text>
      <View style={styles.options}>
        {question.options.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.option}
            onPress={() => handleOption(option.meat, option.rarity)}
          >
            <Text>{option.meat}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.option} onPress={() => speak()}>
          <Text>Read Question</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#1a1a2e", // deep rich background
    borderRadius: 20,
    margin: 10,
    shadowColor: "#0f3460",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
  },
  question: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "700",
    color: "#e94560", // bold, glamorous red-pink
    fontFamily: "Georgia", // classy serif font
    textShadowColor: "rgba(233, 69, 96, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  option: {
    width: "50%",
    padding: 20, // you can adjust this
    alignItems: "center",
    backgroundColor: "#EAB68F", // just to see the size
    borderWidth: 1,
  },
  speak: {
    fontSize: 18,
    color: "#f7f7f7",
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#0f3460",
    borderRadius: 25,
    shadowColor: "#e94560",
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },
})
