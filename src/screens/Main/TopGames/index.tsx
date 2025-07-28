import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButton from "../../../components/Button";
import SetUpProgress from "../../../components/SetUpProgress";

const TopGames = ({ navigation }: any) => {
  const scheduleData = [
    {
      time: "1:30am on TNT",
      beat: "38.6K bets",
      schedule: [{ img: images.cle }, { img: images.cle_12 }],
    },
    {
      time: "1:30am on TNT",
      beat: "38.6K bets",
      schedule: [{ img: images.cle }, { img: images.cle_12 }],
    },
    {
      time: "1:30am on TNT",
      beat: "38.6K bets",
      schedule: [{ img: images.cle }, { img: images.cle_12 }],
    },
  ];

  const MoneyPercentagesCard = () => {
    return (
      <View
        style={{
          width: "100%",
          paddingVertical: sizeHelper.calHp(10),
          backgroundColor: "#ECECEC",
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#F53636",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: sizeHelper.calHp(170),
            paddingHorizontal: sizeHelper.calWp(10),

            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "65%",
              gap: sizeHelper.calHp(10),
              paddingVertical: sizeHelper.calHp(30),
              paddingHorizontal: sizeHelper.calWp(25),
            }}
          >
            <CustomText
              text={"Money Percentages,sharp action and more."}
              color={theme.colors.white}
              numberOfLines={2}
              size={23}
              fontWeight="700"
              fontFam={fonts.Inter_Bold}
            />

            <CustomText
              text={"GET PRO >"}
              color={theme.colors.white + "80"}
              size={17}
            />
          </View>
          <View
            style={{
              width: sizeHelper.calWp(300),
              height: sizeHelper.calWp(300),
              borderRadius: 999,
              backgroundColor: theme.colors.white + "50",
              alignItems: "center",
              // marginRight:sizeHelper.calWp(-0),
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderRadius: 999,
                backgroundColor: theme.colors.white + "50",
                width: sizeHelper.calWp(200),
                height: sizeHelper.calWp(200),
                marginRight: sizeHelper.calWp(-30),
                marginTop: sizeHelper.calHp(40),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: "110%",
                  height: "110%",
                }}
                source={images.sports}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const Header = () => {
    return (
      <View
        style={{
          paddingHorizontal: sizeHelper.calWp(40),
          gap: sizeHelper.calHp(30),
        }}
      >
        <View style={{ ...appStyles.rowjustify }}>
          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={"Top Games"}
              color={theme.colors.half_black}
              size={30}
              fontWeight="900"
              fontFam={fonts.Inter_Bold}
            />
            <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                marginTop: sizeHelper.calHp(5),
              }}
              source={images.down_gray}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(20),
            }}
          >
            <TouchableOpacity style={styles.header_box}>
              <Image
                style={{
                  width: sizeHelper.calWp(32),
                  height: sizeHelper.calWp(32),
                  tintColor: theme.colors.black,
                }}
                source={images.search}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.header_box}>
              <Image
                style={{
                  width: sizeHelper.calWp(32),
                  height: sizeHelper.calWp(32),
                  tintColor: theme.colors.black,
                }}
                source={images.filter}
                // resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            ...appStyles.rowjustify,
            gap: sizeHelper.calWp(20),
          }}
        >
          <TouchableOpacity
            // onPress={onPress}
            style={{
              ...styles.btn_container,
              flex: 1,
              justifyContent: "space-around",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calHp(20),
              }}
              source={images.left_arrow}
              resizeMode="contain"
            />

            <Image
              style={{
                width: sizeHelper.calWp(22),
                height: sizeHelper.calHp(22),
              }}
              source={images.calendar}
              resizeMode="contain"
            />
            <CustomText
              text={"Saturday Jan 20"}
              color={theme.colors.half_black}
              size={17}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
            />
            <Image
              style={{
                width: sizeHelper.calWp(18),
                height: sizeHelper.calHp(18),
                tintColor: "#B6B6B6",
              }}
              source={images.next}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={onPress}
            style={{
              ...styles.btn_container,
              width: "40%",

              justifyContent: "center",
              gap: sizeHelper.calWp(40),
            }}
          >
            <CustomText
              text={"Consensus"}
              color={theme.colors.half_black}
              size={20}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
            />
            <Image
              style={{
                width: sizeHelper.calWp(18),
                height: sizeHelper.calHp(18),
              }}
              source={images.down_gray}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: sizeHelper.calHp(30),gap:sizeHelper.calHp(30) }}
        >
          <Header />

          <MoneyPercentagesCard />
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(40),
              gap: sizeHelper.calHp(30),
            }}
          >
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"Scheduled"}
                color={theme.colors.half_black}
                size={24}
                fontWeight="700"
                fontFam={fonts.Inter_Bold}
              />
              <Image
                style={{
                  width: sizeHelper.calWp(20),
                  height: sizeHelper.calHp(20),
                }}
                source={images.up_arrow}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
                paddingRight: sizeHelper.calWp(50),
              }}
            >
              <CustomText
                text={"Matchup"}
                style={{ width: "40%" }}
                color={theme.colors.gray1000}
                size={17}
              />
              <CustomText
                text={"Open"}
                color={theme.colors.gray1000}
                size={17}
              />
              <CustomText
                text={"Line"}
                color={theme.colors.gray1000}
                size={17}
              />
              <CustomText
                text={"Total"}
                color={theme.colors.gray1000}
                size={17}
              />
            </View>
            {scheduleData.map((item, index) => {
              return (
                <View style={{ gap: sizeHelper.calHp(20) }}>
                  {item.schedule.map((it, ind) => {
                    return (
                      <View
                        style={{
                          ...appStyles.rowjustify,
                          // paddingRight: sizeHelper.calWp(20),
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: sizeHelper.calWp(15),
                          }}
                        >
                          <Image
                            style={{
                              width: sizeHelper.calWp(60),
                              height: sizeHelper.calHp(60),
                            }}
                            source={it?.img}
                            resizeMode="contain"
                          />
                          <View style={{ gap: sizeHelper.calHp(3) }}>
                            <View
                              style={{
                                ...appStyles.row,
                                gap: sizeHelper.calWp(4),
                              }}
                            >
                              <CustomText
                                text={"CLE"}
                                color={theme.colors.black}
                                fontFam={fonts.Inter_Medium}
                                fontWeight="600"
                                size={18}
                              />
                              <CustomText
                                text={"-12"}
                                fontFam={fonts.Inter_Medium}
                                fontWeight="600"
                                color={theme.colors.gray500}
                                size={16}
                              />
                            </View>

                            <CustomText
                              text={"34-5"}
                              fontFam={fonts.Inter_Light}
                              fontWeight="400"
                              color={theme.colors.gray500}
                              size={18}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            ...appStyles.row,
                            gap: sizeHelper.calWp(10),
                          }}
                        >
                          <View
                            style={{
                              alignItems: "center",
                              marginRight: sizeHelper.calWp(12),
                            }}
                          >
                            <CustomText
                              text={"+3.5"}
                              color={theme.colors.gray500}
                              size={20}
                            />
                            <CustomText
                              text={"-114"}
                              fontFam={fonts.Inter_Light}
                              fontWeight="400"
                              color={theme.colors.gray500}
                              size={14}
                            />
                          </View>
                          <View style={styles.schedule_total}>
                            <CustomText
                              text={"o233"}
                              fontFam={fonts.Inter_SemiBold}
                              fontWeight="600"
                              color={theme.colors.black}
                              size={20}
                            />
                            <CustomText
                              text={"-142"}
                              color={theme.colors.gray700}
                              size={12}
                            />
                          </View>
                          <View style={styles.schedule_total}>
                            <CustomText
                              text={"o233"}
                              fontFam={fonts.Inter_SemiBold}
                              fontWeight="600"
                              color={theme.colors.black}
                              size={20}
                            />
                            <CustomText
                              text={"-142"}
                              color={theme.colors.gray700}
                              size={12}
                            />
                          </View>
                        </View>
                      </View>
                    );
                  })}
                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                    <Image
                      style={{
                        width: sizeHelper.calWp(25),
                        height: sizeHelper.calHp(25),
                      }}
                      source={images.notification}
                      resizeMode="contain"
                    />
                    <View
                      style={{ ...appStyles.row, gap: sizeHelper.calWp(4) }}
                    >
                      <CustomText
                        text={item.time}
                        color={theme.colors.black}
                        fontFam={fonts.Inter_Medium}
                        fontWeight="600"
                        size={17}
                      />
                      <CustomText
                        text={item?.beat}
                        color={theme.colors.gray500}
                        size={16}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          {/* <TrackCard /> */}
          {/* <SportsContainer /> */}
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default TopGames;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
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
    height: sizeHelper.calHp(50),
    borderRadius: sizeHelper.calWp(15),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(17),
    paddingHorizontal: sizeHelper.calWp(20),
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(0.5),
    backgroundColor: theme.colors.gray700,
  },
  header_box: {
    borderWidth: 1,
    borderColor: "#B6B6B6",
    borderRadius: sizeHelper.calWp(10),
    alignItems: "center",
    justifyContent: "center",
    padding: sizeHelper.calWp(10),
  },
  schedule_total: {
    paddingHorizontal: sizeHelper.calWp(35),
    paddingVertical: sizeHelper.calHp(10),
    backgroundColor: "#F6F6F6",
    borderRadius: sizeHelper.calWp(8),
    alignItems: "center",
    borderWidth: 0.1,
    borderColor: theme.colors.gray500,
    gap: sizeHelper.calHp(4),
  },
});
