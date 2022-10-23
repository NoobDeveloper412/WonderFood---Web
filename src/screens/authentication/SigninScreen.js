import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import { colors, parameters } from "../../global/styles";

export default function SigninScreen() {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const inputEmail = useRef(1);
  const inputPassword = useRef(2);

  function toggleVisibility() {
    setVisibilityPassword(!visibilityPassword);
  }

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" />

      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            color: colors.buttons,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          SIGNIN
        </Text>

        <View>
          <Text style={styles.text1}>Please enter the email and password.</Text>
          <Text style={styles.text2}>Register your account.</Text>
        </View>
        {/* <View style={styles.TextInput1}>
          <View>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3, padding: 3 }}
              type="material"
              ref={inputEmail}
              // style={{ marginLeft: 10 }}
            />
          </View>
          <TextInput
            style={{ paddingLeft: 10, paddingRight: 10 }}
            placeholder="Enter your password."
            // style={{ width: "80%" }}
          />
        </View>

        <View style={styles.TextInput2}>
          <View>
            <div></div>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              ref={inputEmail}
              style={{ padding: 3 }}
            />
          </View>
          <TextInput
            placeholder="Enter your password."
            style={{ width: "80%" }}
          />
          <View>
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
              ref={inputPassword}
              onFocus={() => {
                setVisibilityPassword(false);
              }}
              onBlur={() => {
                setVisibilityPassword(true);
              }}
            />
          </View>
        </View> */}
        <form>
          <div className="signupForm">
            <div className="emailDiv">
              <div className="inputIconContainer">
                <Icon
                  name="mail"
                  iconStyle={{ color: colors.grey3, padding: 3 }}
                  type="material"
                  ref={inputEmail}
                  // style={{ marginLeft: 10 }}
                />
              </div>
              <input
                name="name"
                placeholder="Name"
                className="inputEmail"
                type="email"
              />
            </div>
            <div className="passwordDiv">
              <div className="inputIconContainer">
                <Icon
                  name="lock"
                  iconStyle={{ color: colors.grey3, padding: 3 }}
                  type="material"
                  ref={inputEmail}
                  // style={{ marginLeft: 10 }}
                />
              </div>
              <input
                name="name"
                placeholder="Password"
                className="inputPassword"
                type="password"
              />
              <div>
                <Icon
                  name="visibility-off"
                  iconStyle={{ color: colors.grey3 }}
                  type="material"
                  style={{ marginRight: 10 }}
                  ref={inputPassword}
                  onPress={() => {
                    toggleVisibility();
                  }}
                  // onFocus={() => {
                  //   setVisibilityPassword(false);
                  // }}
                  // onBlur={() => {
                  //   setVisibilityPassword(true);
                  // }}
                />
              </div>
            </div>
          </div>
        </form>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitleStyle}
        />
      </View>
      <View style={{ alignItems: "center ", marginTop: 15 }}>
        <Text
          style={{
            ...styles.text1,
            textDecorationLine: "underline",
            cursor: "pointer",
          }}
        >
          Forgot Password?
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          OR
        </Text>
      </View>
      <View style={{ cursor: "pointer", marginHorizontal: 10 }}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ cursor: "pointer", marginHorizontal: 10 }}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          New here?
          <Button
            title="Create an account"
            buttonStyle={[
              parameters.styledButton,
              parameters.buttonTitleStyle,
              { cursor: "pointer", marginHorizontal: 20 },
            ]}
          />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.grey1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 30,
    marginBottom: 10,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.grey1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: 30,

    // paddingLeft: 15,
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
  },
});
