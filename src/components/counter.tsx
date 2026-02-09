import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CounterProps = {
  initial?: number;
};

export function Counter({ initial = 0 }: CounterProps) {
  const [count, setCount] = useState(initial);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Counter:</Text>
      <Text style={styles.value}>{count}</Text>

      <TouchableOpacity
        style={styles.tapButton}
        onPress={() => setCount((c) => c + 1)}
        activeOpacity={0.85}
      >
        <Text style={styles.tapText}>TAP!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    marginTop: 14,
  },
  label: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },
  value: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "900",
    marginBottom: 10,
  },
  tapButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "rgba(0, 200, 255, 0.55)", // другой цвет
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },
  tapText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
