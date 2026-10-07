import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    // Started the sign in page on index, idk if we will move this to signIn.tsx or not
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1 }} />
      <View style={{ flex: 19 }}>
        <Text style={styles.header}>Sign In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 42,
    fontWeight: "bold",
  },
});
