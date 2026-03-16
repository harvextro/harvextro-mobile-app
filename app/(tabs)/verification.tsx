import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function VerificationScreen() {
  const router = useRouter();
  
  // State for the 4-digit code
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  
  // Explicitly type the ref array as TextInput
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next box if a number is entered
    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    // Auto-focus previous box if backspace is pressed on an empty box
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity 
        style={styles.backArrow} 
        onPress={() => router.push("/forgot-password" as any)} // Cast as any if route is not yet generated
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandText}>HarveXtro!</Text>
        </View>

        <Text style={styles.screenTitle}>Verification</Text>
        <Text style={styles.instructionText}>Enter Verification Code</Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              value={digit}
              // Corrected ref assignment
              ref={(el) => { inputs.current[index] = el; }}
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>If you didn't receive a code </Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.sendButton}
          onPress={() => router.push("/new-password" as any)}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or register with</Text>
          <View style={styles.line} />
        </View>

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
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  backArrow: { padding: 20, marginTop: 10 },
  arrowText: { fontSize: 35, color: "#000" },
  container: { flex: 1, alignItems: "center", paddingHorizontal: 30 },
  header: { alignItems: "center" },
  welcomeText: { fontSize: 24, color: "#000" },
  brandText: { fontSize: 32, fontWeight: "bold", color: "#000" },
  screenTitle: { fontSize: 22, fontWeight: "600", marginTop: 40, color: "#000" },
  instructionText: { fontSize: 16, color: "#333", marginTop: 15, marginBottom: 20 },
  codeContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 10, marginBottom: 20 },
  codeInput: { width: 60, height: 65, borderWidth: 1, borderColor: "#CCC", borderRadius: 12, textAlign: "center", fontSize: 26, backgroundColor: "#FFF" },
  resendContainer: { flexDirection: "row", marginBottom: 40 },
  resendText: { fontSize: 14, color: "#666" },
  resendLink: { fontSize: 14, color: "#2c7a7b", fontWeight: "bold" },
  sendButton: { width: "100%", backgroundColor: "#2F7D75", paddingVertical: 15, borderRadius: 30, alignItems: "center" },
  sendButtonText: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
  dividerContainer: { flexDirection: "row", alignItems: "center", marginVertical: 40, width: "100%" },
  line: { flex: 1, height: 1, backgroundColor: "#CCC" },
  dividerText: { marginHorizontal: 10, color: "#888", fontSize: 14 },
  googleButton: { flexDirection: "row", width: "100%", padding: 12, borderWidth: 1, borderColor: "#DDD", borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "#FFF" },
  googleIcon: { width: 22, height: 22, marginRight: 12 },
  googleText: { fontSize: 18, color: "#000" },
});