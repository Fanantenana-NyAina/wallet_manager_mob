import { useState } from "react";
import { Button, Pressable, TextInput, View, Text, Alert } from "react-native";
import { register } from "../services/auth.service";
import { Link, router } from "expo-router";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await register({ username, email, password });
      Alert.alert("Successfully registered!");
      router.push("/(auth)/login");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title={loading ? "Loading..." : "Register"}
        onPress={handleRegister}
      />
      <Link href="/(auth)/register">
        <Pressable>
          <Text>Create an account</Text>
        </Pressable>
      </Link>
    </View>
  );
}
