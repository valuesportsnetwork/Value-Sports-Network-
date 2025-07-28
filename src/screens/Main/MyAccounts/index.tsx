import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";

const MyAccounts = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(20),
          backgroundColor: theme.colors.white,
          paddingHorizontal: sizeHelper.calWp(40),
          paddingBottom: sizeHelper.calHp(20),
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
          text={"My Accounts"}
          color={theme.colors.black}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
          numberOfLines={2}
          size={30}
        />
      </View>
    );
  };
  const BookContainer = () => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
          marginTop: sizeHelper.calHp(10),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <View style={styles.dots}></View>
          <CustomText
            text={"PrizePicks"}
            color={theme.colors.black}
            size={20}
          />
        </View>
        <View
          style={{
            borderRadius: 999,
            backgroundColor: theme.colors.gray800,
            padding: sizeHelper.calWp(10),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(25),
              height: sizeHelper.calWp(25),
            }}
            resizeMode="contain"
            source={images.plus}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ScrollView
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            gap: sizeHelper.calHp(10),
            paddingBottom: sizeHelper.calHp(30),
          }}
        >
          <Header />
          <View style={styles.container}>
            <CustomText
              text={"Default Odds"}
              color={theme.colors.black}
              fontWeight="700"
              fontFam={fonts.BricolageGrotesque_Bold}
              numberOfLines={2}
              size={20}
            />
            <CustomText
              text={
                "Select the default odds to show up on the scoreboard and game details."
              }
              color={theme.colors.gray500}
              numberOfLines={2}
              size={15}
            />
            <View
              style={{
                ...appStyles.rowjustify,
                marginTop: sizeHelper.calHp(10),
                borderWidth: 0.5,
                borderRadius: sizeHelper.calWp(20),
                borderColor: "#797D86",
                paddingHorizontal: sizeHelper.calWp(20),
                paddingVertical: sizeHelper.calHp(15),
              }}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                <View style={styles.dots}></View>
                <CustomText
                  text={"Consensus"}
                  color={theme.colors.black}
                  size={20}
                />
              </View>

              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                resizeMode="contain"
                source={images.down_gray}
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"My Accounts"}
                color={theme.colors.black}
                fontWeight="700"
                fontFam={fonts.BricolageGrotesque_Bold}
                numberOfLines={2}
                size={20}
              />
              <CustomText
                text={"Edit"}
                color={theme.colors.blue100}
                size={18}
              />
            </View>
            <CustomText
              text={
                "View performance history like record, POI and win % for each account below."
              }
              color={theme.colors.gray500}
              numberOfLines={2}
              size={15}
            />
            <View
              style={{
                ...appStyles.rowjustify,
                marginTop: sizeHelper.calHp(10),
              }}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                <View style={styles.dots}></View>
                <CustomText
                  text={"Consensus"}
                  color={theme.colors.black}
                  size={20}
                />
              </View>

              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                }}
                resizeMode="contain"
                source={images.next}
              />
            </View>
          </View>

          <View
            style={{ ...styles.container, flex: 1, gap: sizeHelper.calHp(20) }}
          >
            <CustomText
              text={"All Books"}
              color={theme.colors.black}
              fontWeight="700"
              fontFam={fonts.BricolageGrotesque_Bold}
              numberOfLines={2}
              size={20}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: sizeHelper.calHp(70),
                paddingHorizontal: sizeHelper.calWp(35),
                borderRadius: 999,
                gap: sizeHelper.calWp(15),
                backgroundColor: theme.colors.gray800,
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(32),
                  height: sizeHelper.calWp(32),
                }}
                resizeMode="contain"
                source={images.search}
              />
              <TextInput
                value={""}
                placeholder="Search"
                placeholderTextColor={theme.colors.gray500}
                style={{
                  fontSize: sizeHelper.calHp(22),
                  width: "98%",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                  fontFamily: fonts.Inter_Regular,
                  fontWeight: "500",
                  color: theme.colors.gray400,
                }}
              />
            </View>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (item, index) => {
                return <BookContainer />;
              }
            )}
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default MyAccounts;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(20),
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  logo: {
    width: sizeHelper.calWp(43),
    height: sizeHelper.calWp(43),
  },

  next_arrow: {
    height: sizeHelper.calHp(30),
    width: sizeHelper.calHp(25),
    marginLeft: sizeHelper.calWp(10),
    tintColor: theme.colors.primary,
  },
  btn_container: {
    borderRadius: sizeHelper.calWp(20),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    gap: sizeHelper.calWp(17),
    padding: sizeHelper.calWp(20),
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(0.5),
    backgroundColor: theme.colors.gray700,
  },
  bet_percentage: {
    height: sizeHelper.calHp(10),
    backgroundColor: "#D9D9D9",
    flex: 1,
    borderTopRightRadius: sizeHelper.calWp(20),
    borderBottomRightRadius: sizeHelper.calWp(20),
  },
  dots: {
    width: sizeHelper.calWp(31),
    height: sizeHelper.calWp(31),
    backgroundColor: "#737373",
    borderRadius: sizeHelper.calWp(7),
  },
  container: {
    paddingHorizontal: sizeHelper.calWp(40),
    backgroundColor: theme.colors.white,
    gap: sizeHelper.calHp(10),
    paddingVertical: sizeHelper.calHp(20),
  },
});
