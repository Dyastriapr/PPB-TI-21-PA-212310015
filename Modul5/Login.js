import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Login = () => {
  const [email, setMail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const handlerValidMail = (value) => {
    if (value) {
      setValidEmail("");
    } else {
      setValidEmail("This field is required");
    }
  };
  const [password] = useState("");
  const [ValidPassword, setValidPassword] = useState("");
  const [ValidIsiPassword, setValidIsiPassword] = useState("");

  function handlePasswordChange(value) {
    setPassword(value);
  }
  function handleSubmit() {
    if (password.length < 3) {
      setValidPassword("Type minimum 3 character");
    } else {
      setValidPassword("");
    }
  }
  function handleSubmitIsi() {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/.test(
        password
      )
    ) {
      setValidIsiPassword("");
    } else {
      setValidIsiPassword(" Value must contain alphabet, number, and symbol");
    }
  }

  const handleSignIn = () => {
    if (
      email === "212310016@student.ibik.ac.id" &&
      password === "BESTstudent_2023"
    ) {
      navigation.navigate("Home");
    } else {
      alert("Email/Password is not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Email </Text>
        <TextInput
          placeholder="npm@student.ibik.ac.id"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.text_input}
          defaultValue={email}
          onChangeText={(text) => handlerValidMail(text)}
        />
        <Text style={{ color: "red" }}>{validEmail}</Text>
      </View>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Password</Text>
        <View
          style={{
            ...styles.text_input,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            secureTextEntry={false}
            placeholder="Enter your password"
            autoCorrect={false}
            style={{
              ...styles.text_input,
              borderWidth: 0,
              padding: 0,
              width: "90%",
            }}
            defaultValue={password}
            onChangeText={(text) => handlePasswordChange(text)}
          />

          <Pressable>
            <FontAwesome5 name={"eye"} size={25} color="purple" />
          </Pressable>
        </View>
        <Text style={{ color: "red" }}>
          {/* {ValidPassword} */}
          {ValidIsiPassword}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn_signin}
        onPress={() => handleSignIn()}
      >
        <Text style={styles.btn_signin_text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  frm_row: { marginBottom: 15 },
  text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "purple",
  },
  btn_signin: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btn_signin_text: { color: "white", textAlign: "center", fontSize: 16 },
});
