"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeHyperView = initializeHyperView;
exports.multiply = multiply;
exports.openARView = openARView;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-hyper-view' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const HyperView = _reactNative.NativeModules.HyperView ? _reactNative.NativeModules.HyperView : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return HyperView.multiply(a, b);
}
function initializeHyperView() {
  HyperView.initializeHyperView();
  return;
}
function openARView(id) {
  HyperView.openARView(id);
  return;
}
//# sourceMappingURL=index.js.map