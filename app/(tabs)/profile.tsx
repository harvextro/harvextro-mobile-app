import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const router = useRouter();

  // State for input fields
  const [username, setUsername] = useState("User Name");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("email@gmail.com");

  // State for profile image
  const [imageUri, setImageUri] = useState("https://via.placeholder.com/150");

  // Function to pick image from gallery
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Arrow-only Back Button */}
      <TouchableOpacity 
        style={styles.backButtonCircle} 
        onPress={() => router.push("/forgot-password")}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <Text style={styles.title}>My Profile</Text>

        <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: imageUri }}
              style={[styles.avatar, styles.avatarBorder]}
            />
            <View style={styles.editBadge}>
              <Text style={styles.editBadgeText}>Edit</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.nameDisplay}>{username}</Text>
        <Text style={styles.emailDisplay}>{email}</Text>

        {/* Input Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>First Name</Text>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Action Buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/edit-profile")}
        >
          <Text style={styles.buttonText}>Edit Profile Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 21,
    paddingTop: 60, // Space for the floating back button
  },
  backButtonCircle: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20, // Adjust for OS status bars
    left: 20,
    zIndex: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
  },
  arrowText: {
    fontSize: 24,
    color: "#2c7a7b",
    fontWeight: "bold",
    marginTop: -2,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: 15,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  avatarBorder: {
    borderWidth: 3,
    borderColor: "#2c7a7b",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2c7a7b",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  editBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  nameDisplay: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  emailDisplay: {
    fontSize: 14,
    color: "gray",
    marginBottom: 25,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginLeft: 5,
    marginTop: 12,
  },
  input: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 14,
    marginTop: 6,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#2c7a7b",
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#c0392b",
    marginBottom: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
});