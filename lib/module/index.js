import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-hyper-view' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const HyperView = NativeModules.HyperView ? NativeModules.HyperView : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function multiply(a, b) {
  return HyperView.multiply(a, b);
}
export function initializeHyperView() {
  HyperView.initializeHyperView();
  return;
}
export function openARView(id) {
  HyperView.openARView(id);
  return;
}
//# sourceMappingURL=index.js.map