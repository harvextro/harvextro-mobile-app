import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function NewPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Back Arrow - Returns to Verification */}
      <TouchableOpacity 
        style={styles.backArrow} 
        onPress={() => router.push("/verification" as any)}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        {/* 2. Logo Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandText}>HarveXtro!</Text>
        </View>

        <Text style={styles.screenTitle}>New Password</Text>
        
        {/* 3. Instruction/Error Hint */}
        <Text style={styles.hintText}>
          Password must be at least 8 characters and include letters and numbers.
        </Text>

        {/* 4. Input Fields */}
        <View style={styles.form}>
          <TextInput
            placeholder="Enter your password here"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.showPassword}>
            <Text style={styles.showPasswordText}>Show password</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Enter your password here"
            style={[styles.input, { marginTop: 20 }]}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.showPassword}>
            <Text style={styles.showPasswordText}>Show password</Text>
          </TouchableOpacity>
        </View>

        {/* 5. Save Button -> Navigates to Login/Tabs */}
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={() => router.push("/(tabs)" as any)}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        {/* 6. Social Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or register with</Text>
          <View style={styles.line} />
        </View>

        {/* 7. Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }} 
            style={styles.googleIcon} 
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backArrow: {
    padding: 20,
    marginTop: 10,
  },
  arrowText: {
    fontSize: 35,
    color: "#000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  header: {
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    color: "#000",
  },
  brandText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 30,
    color: "#000",
  },
  hintText: {
    fontSize: 13,
    color: "#E53E3E", // Red color from your Figma design
    textAlign: "center",
    marginTop: 15,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  form: {
    width: "100%",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  showPassword: {
    alignSelf: "flex-start",
    marginTop: 5,
    marginLeft: 5,
  },
  showPasswordText: {
    fontSize: 12,
    color: "#888",
  },
  sendButton: {
    width: "100%",
    backgroundColor: "#2F7D75",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#888",
    fontSize: 14,
  },
  googleButton: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1 },
      android: { elevation: 2 },
    }),
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  googleText: {
    fontSize: 18,
    color: "#000",
  },
});