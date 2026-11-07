import { Text, View, StyleSheet } from "react-native";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useRouter, Link } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Sign In</Text>
      <TextField
        id="Username"
        label="Username"
        variant="outlined"
        style={styles.textBox}
      ></TextField>
      <TextField
        id="Password"
        label="Password"
        variant="outlined"
        style={styles.textBox}
      ></TextField>
      <Button variant="contained" style={styles.button}>
        Sign In
      </Button>
      <Button
        onClick={() => {
          router.navigate("/signUp");
        }}
      >
        Sign Up
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
