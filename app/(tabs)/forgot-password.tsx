import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Simple Back Arrow */}
      <TouchableOpacity 
        style={styles.backArrow} 
        onPress={() => router.back()}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        {/* 2. Logo / Welcome Text */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandText}>HarveXtro!</Text>
        </View>

        <Text style={styles.screenTitle}>Forgot Password</Text>

        {/* 3. Input Field */}
        <TextInput
          placeholder="Enter your email here"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* 4. Back to Sign In Link */}
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.signInLink}
        >
          <Text style={styles.signInText}> sign in</Text>
        </TouchableOpacity>

        {/* 5. Send Button -> Links to Verification */}
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={() => router.push("../verification")} // This connects the pages
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        {/* 6. Divider */}
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
    width: 60, // Added width for better tap target
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
    marginTop: 10,
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
    fontSize: 18,
    marginVertical: 40,
    color: "#333",
    fontWeight: '500',
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
  signInLink: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 30,
  },
  signInText: {
    color: "#555",
    fontSize: 12,
  },
  sendButton: {
    width: "100%",
    backgroundColor: "#2F7D75",
    padding: 15,
    borderRadius: 25,
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
    marginVertical: 40,
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
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 18,
    color: "#000",
  },
});