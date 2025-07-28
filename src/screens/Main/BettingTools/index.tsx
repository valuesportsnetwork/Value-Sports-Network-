import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";

const BettingTools = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(20),
          backgroundColor: theme.colors.white,
        }}
      >
        <Image
          style={{
            height: sizeHelper.calHp(25),
            width: sizeHelper.calHp(25),
          }}
          source={images.back}
        />

        <CustomText
          text={"Betting Tools"}
          color={theme.colors.black}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
          numberOfLines={2}
          size={30}
        />
      </View>
    );
  };

  const InfoContainer = ({ icon, title, des,onPress }: any) => {
    return (
      <TouchableOpacity
      onPress={onPress}
        style={{
          ...appStyles.row,
          marginTop: sizeHelper.calHp(20),
          backgroundColor: "#F8F8F8",
          paddingHorizontal: sizeHelper.calWp(10),
          paddingVertical: sizeHelper.calHp(15),
          borderRadius: sizeHelper.calWp(20),
          gap: sizeHelper.calWp(20),
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(70),
            height: sizeHelper.calWp(70),
          }}
          resizeMode="contain"
          source={icon}
        />
        <View
          style={{
            gap: sizeHelper.calWp(5),
          }}
        >
          <CustomText text={title} color={theme.colors.black} size={20} />
          <CustomText text={des} color={theme.colors.gray500} size={15} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <Header />
        <View>
          <InfoContainer
          onPress={()=>navigation.navigate("BetCalculator")}
            icon={images.bet_calculator}
            title={"Bet Calculator"}
            des={"Calculate payouts for single bets or parlays"}
          />
          <InfoContainer
            icon={images.odds_converter}
            title={"Odds Converter"}
            onPress={()=>navigation.navigate("OddsConverter")}

            des={"Odds converter between standards odds formarts"}
          />
          <InfoContainer
            icon={images.margin_calculator}
            title={"Margin Calculator"}
            // onPress={()=>navigation.navigate("MarginCalculator")}

            des={"See how much your book is charging you"}
          />
          <InfoContainer
            icon={images.arb_calculator}
            title={"Hedge/Arb Calculator"}
            onPress={()=>navigation.navigate("ArbCalculator")}

            des={"Find right amount for hedge/arbitrage positions"}
          />
          <InfoContainer
            icon={images.eV_calculator}
            title={"EV Calculator"}
            onPress={()=>navigation.navigate("EVCalculator")}

            des={"Find expected value given odds and win%"}
          />
        </View>
      </ScreenLayout>
    </>
  );
};
export default BettingTools;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(40),
  },
});
