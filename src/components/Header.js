import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity>
          <Icon
            type="material-community"
            name="arrow-left"
            color={colors.headerText}
            style={28}
            onPress={() => {}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    color: colors.headerText,
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 30,
    cursor:'pointer'
  },
});
