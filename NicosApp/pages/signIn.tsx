import { View, StyleSheet, Text } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
