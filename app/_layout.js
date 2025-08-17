// app/layout.js
import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import AntDesign from "@expo/vector-icons/AntDesign"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const Layout = () => {
  return (
    <Tabs>
      {/* homepage tab */}
      <Tabs.Screen
        name="homepage"
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Ionicons name="home" color="white" size={size} />
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />
      {/* quiz tab */}
      <Tabs.Screen
        name="quiz"
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialIcons name="quiz" color="white" size={size} />
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />
      {/* result tab */}
      <Tabs.Screen
        name="result"
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <AntDesign name="linechart" color="white" size={size} />
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />
    </Tabs>
  )
}

export default Layout
