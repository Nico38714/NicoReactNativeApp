import { Text, View, StyleSheet } from "react-native";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useRouter, Link } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={[styles.container]}>
      <Button
        onClick={() => {
          router.navigate("/signIn");
        }}
      >
        Sign In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff2ff",
  },
  header: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#01068d",
    paddingBottom: 15,
  },
  textBox: {
    width: 250,
    paddingBottom: 10,
  },
  button: {
    width: 150,
    backgroundColor: "#01068d",
    color: "#ffffff",
  },
});
