import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ImageStyle,
} from "react-native";
import sizeHelper from "../../utils/Helpers";
type Props = {
  icon?: any;
  onPress?: () => void;
};

const SocialButton = ({ icon, onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.socialBtn}
    >
      <Image source={icon} style={styles.socialImg} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export default SocialButton;

const styles = StyleSheet.create({
  socialBtn: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(70),
    backgroundColor: "#ECECEC",
  },
  socialImg: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
  },
});
