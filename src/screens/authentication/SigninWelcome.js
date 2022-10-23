import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import { colors, parameters } from "../../global/styles";
import * as Animatable from "react-native-animatable";

export default function SigninWelcomeScreen() {
  return (
    <View>
      <div
        className="SigninWelcomeContainer"
        style={{
          color: "#ff8c52",
          fontWeight: "bold",
          fontSize: 28,
          marginTop: 20,
          padding: 20,
        }}
      >
        <div className="welcomeTitle">DISCOVER RESTAURANTS</div>
        <div className="welcomeTitle">IN YOUR AREA!</div>
      </div>

      <View style={{  justifyContent: "center" }}>
        <View style={styles.slide1}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg&_gl=1*6r65t2*_ga*MTc0MDg0MzY1OC4xNjY2NTA1OTUy*_ga_8JE65Q40S6*MTY2NjUwNTk1NC4xLjEuMTY2NjUwNTk1Ni4wLjAuMA..",
            }}
            style={{ width: '90%', height: 400 }}
          />
        </View>
        {/* <View style={styles.slide2}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/4062498/pexels-photo-4062498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View> */}
      </View>
      <View style={{ flex: 4,  marginHorizontal:20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitleStyle}
          />
        </View>
        <View style={{  marginTop: 20, marginBottom: 20, marginRight:40}}>

          <Button
            title="Create an account"
            titleStyle={{color:'orange'}}
            buttonStyle={[
              parameters.styledButton,
              parameters.buttonTitleStyle,
              { cursor: "pointer", marginHorizontal: 20, backgroundColor:"none", },
            ]}
          />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",

  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#9dg6eb",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#9dd9eb",
  },
});
