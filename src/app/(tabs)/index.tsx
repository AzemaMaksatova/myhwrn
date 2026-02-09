import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { comps } from "@/components/comps";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <LinearGradient
          colors={["#ff9966", "#ff5e62", "#845ec2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCard}
        >
          <Image
            source={require("../../../assets/images/puppy.png")}
            style={styles.headerImage}
          />

          <Text style={styles.title}>{comps.title}</Text>
          <Text style={styles.subtitle}>{comps.subtitle}</Text>
          <Text style={styles.emoji}>{comps.emoji}</Text>

          <Image
            source={require("../../../assets/images/me.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>{comps.name}</Text>
          <Text style={styles.role}>{comps.role}</Text>

          <Text style={styles.description}>{comps.description}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{comps.buttonText}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  gradientCard: {
    width: "100%",
    maxWidth: 380,
    borderRadius: 22,
    paddingBottom: 24,
    alignItems: "center",
    overflow: "hidden",
  },

  headerImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#fff",
    marginTop: 16,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255,255,255,0.85)",
  },

  emoji: {
    fontSize: 18,
    marginTop: 6,
    marginBottom: 14,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.8)",
  },

  name: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 4,
  },

  role: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255,255,255,0.85)",
    marginBottom: 14,
  },

  description: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 18,
    paddingHorizontal: 16,
  },

  button: {
    width: "90%",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
});
