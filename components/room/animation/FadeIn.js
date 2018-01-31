import React from "react";
import { Animated } from "react-native";

export default class FadeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.ValueXY({ x: 200, y: 0 })
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: {
        x: 0,
        y: 0
      },
      duration: 1000,
      delay: this.props.delay
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: this.state.fadeAnim.getTranslateTransform()
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
