import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

class Rcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: " ",
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>Masukan Output</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukan Text"
            defaultValue={this.state.output}
            onChangeText={(text) => this.setState({ output: text })}
          />
        </View>

        <View>Output</View>

        <View>
          <Text>{this.state.output}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});

export default Rcc;
