import {
  FlatList,
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
import { useState } from "react";
import CustomSearch from "../../../components/CustomSearch";
import AnimatedProgressBar from "../../../components/Progress";

const Feed = ({ navigation }: any) => {
  // const Tabs = [
  //   "Today",
  //   "Money%",
  //   "props",
  //   "Projections",
  //   "Signals",
  //   "Systems",
  // ];
  const [activeTab, setActiveTab] = useState(0);

  const [selectedGame, setSelectedGame] = useState(0);

  const gameTodayData = [
    { title: "Soccer", icon: images.soccer },
    { title: "Basketball", icon: images.basketball },
    { title: "Tennis", icon: images.tennis },
    { title: "Volleyball", icon: images.volleyball },
    { title: "Cricket", icon: images.cricket },
    { title: "Handball", icon: images.handball },
  ];

  const Tabs = [
    { title: "Feed", icon: images.following_users },
    { title: "By Game", icon: images.by_game },
  ];
  const HowToFollow = [
    { title: "Invite Friends" },
    { title: "Follow Friends" },
    { title: "Follow The Big Names" },
  ];
  const leaguesMembers = [
    { img: images.user1 },
    { img: images.user2 },
    { img: images.user3 },
    { img: images.user4 },
  ];
  const SportsContainer = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedGame(index)}
        style={{
          ...styles.btn_container,
          borderRadius: 999,
          paddingHorizontal: sizeHelper.calWp(20),
          borderWidth: sizeHelper.calWp(2),
          backgroundColor:
            selectedGame == index ? theme.colors.black : theme.colors.white,
          borderColor:
            selectedGame == index ? theme.colors.primary : theme.colors.gray600,
        }}
      >
        <Image
          style={{
            ...styles.logo,
            tintColor:
              selectedGame == index
                ? theme.colors.white
                : theme.colors.half_black,
          }}
          source={item?.icon}
          resizeMode="contain"
        />
        <CustomText
          text={item?.title}
          color={
            selectedGame == index ? theme.colors.white : theme.colors.half_black
          }
          size={20}
          fontWeight="600"
          fontFam={fonts.Inter_Medium}
        />
      </TouchableOpacity>
    );
  };

  const LeagueContainer = ({ item, index }: any) => {
    return (
      <View style={{ gap: sizeHelper.calHp(12) }}>
        <View
          style={{
            ...appStyles.rowjustify,
            paddingHorizontal: sizeHelper.calWp(40),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(30) }}>
            <View style={{ gap: sizeHelper.calHp(5) }}>
              <CustomText
                text={"Grizzlies @ Knicks"}
                color={theme.colors.black}
                size={24}
                fontWeight="700"
                fontFam={fonts.Inter_Bold}
              />
              <CustomText
                text={"TUE  01/28  1:30 AM  9.9k Bets"}
                color={theme.colors.gray500}
                size={12}
                // fontWeight="600"
                // fontFam={fonts.Inter_SemiBold}
              />
            </View>
            <View
              style={{
                height: sizeHelper.calHp(50),
                width: 0.5,
                backgroundColor: theme.colors.gray500,
              }}
            />
            <View style={appStyles.row}>
              {leaguesMembers.map((item, index) => {
                return (
                  <Image
                    style={{
                      width: sizeHelper.calWp(50),
                      height: sizeHelper.calWp(50),
                      borderRadius: 999,
                      marginRight: sizeHelper.calWp(-12),
                    }}
                    source={item.img}
                  />
                );
              })}
            </View>
            <CustomText
              text={"6 prop picks"}
              color={theme.colors.gray500}
              size={15}
              // fontWeight="600"
              // fontFam={fonts.Inter_SemiBold}
            />
          </View>
          <Image
            style={{
              width: sizeHelper.calWp(23),
              height: sizeHelper.calWp(23),
              tintColor: "#A4A4A4",
            }}
            source={images.next}
            resizeMode="contain"
          />
        </View>
        <View style={styles.divider} />
        <View
          style={{ marginTop: sizeHelper.calHp(30), gap: sizeHelper.calHp(20) }}
        >
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(40),
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(35),
                  height: sizeHelper.calWp(35),
                }}
                source={images.mem}
                resizeMode="contain"
              />
              <CustomText text={"MEM"} color={theme.colors.black} size={20} />
            </View>
            <View
              style={{
                paddingHorizontal: sizeHelper.calWp(25),
                borderRadius: sizeHelper.calWp(12),
                paddingVertical: sizeHelper.calHp(1),
                backgroundColor: theme.colors.primary + "40",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CustomText
                text={"5 picks"}
                color={theme.colors.primary}
                size={22}
              />
            </View>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
              <CustomText text={"NYK"} color={theme.colors.black} size={20} />
              <Image
                style={{
                  width: sizeHelper.calWp(35),
                  height: sizeHelper.calWp(35),
                }}
                source={images.birds}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(40),
            }}
          >
            <View style={{ width: "45%" }}>
              <View style={{ gap: sizeHelper.calHp(10) }}>
                <View style={appStyles.rowjustify}>
                  <CustomText
                    text={"MEM Spread"}
                    color={theme.colors.black}
                    size={18}
                  />

                  <CustomText text={"1"} color={theme.colors.black} size={18} />
                </View>
                <AnimatedProgressBar
                  totalSteps={20}
                  backgroundColor={"#D9D9D9"}
                  progressColor={theme.colors.primary}
                  // width={sizeHelper.calWp(60)}
                  currentStep={20}
                />
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <View style={{ gap: sizeHelper.calHp(10) }}>
                <View style={appStyles.rowjustify}>
                  <CustomText text={"0"} color={theme.colors.black} size={18} />

                  <CustomText
                    text={"NYK Spread"}
                    color={theme.colors.black}
                    size={18}
                  />
                </View>
                <AnimatedProgressBar
                  totalSteps={20}
                  backgroundColor={"#D9D9D9"}
                  progressColor={theme.colors.primary}
                  // width={sizeHelper.calWp(60)}
                  currentStep={0}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(40),
            }}
          >
            <View style={{ width: "45%" }}>
              <View style={{ gap: sizeHelper.calHp(10) }}>
                <View style={appStyles.rowjustify}>
                  <CustomText
                    text={"MEM ML"}
                    color={theme.colors.black}
                    size={18}
                  />

                  <CustomText text={"1"} color={theme.colors.black} size={18} />
                </View>
                <AnimatedProgressBar
                  totalSteps={20}
                  backgroundColor={"#D9D9D9"}
                  progressColor={theme.colors.primary}
                  // width={sizeHelper.calWp(60)}
                  currentStep={0}
                />
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <View style={{ gap: sizeHelper.calHp(10) }}>
                <View style={appStyles.rowjustify}>
                  <CustomText text={"1"} color={theme.colors.black} size={18} />

                  <CustomText
                    text={"NYK ML"}
                    color={theme.colors.black}
                    size={18}
                  />
                </View>
                <AnimatedProgressBar
                  totalSteps={20}
                  backgroundColor={"#D9D9D9"}
                  progressColor={theme.colors.primary}
                  // width={sizeHelper.calWp(60)}
                  currentStep={0}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScreenLayout style={styles.main}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: sizeHelper.calHp(30) }}
        >
          <View
            style={{
              gap: sizeHelper.calHp(10),
              backgroundColor: "#F5F5F5",
            }}
          >
            <View
              style={{
                gap: sizeHelper.calHp(20),
                backgroundColor: theme.colors.white,
              }}
            >
              <CustomText
                text={"Following"}
                color={theme.colors.half_black}
                size={30}
                style={{ paddingHorizontal: sizeHelper.calWp(40) }}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />

              <View
                style={{
                  ...appStyles.row,
                  paddingHorizontal: sizeHelper.calWp(40),
                  borderBottomWidth: 1,
                  gap: sizeHelper.calWp(30),
                  borderBottomColor: theme.colors.gray200,
                }}
              >
                {Tabs.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index.toString()}
                      onPress={() => setActiveTab(index)}
                      style={{
                        ...styles.tabContainer,
                      }}
                    >
                      <View
                        style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
                      >
                        <Image
                          style={{
                            width: sizeHelper.calWp(30),
                            height: sizeHelper.calHp(30),
                          }}
                          source={item?.icon}
                          resizeMode="contain"
                        />
                        <CustomText
                          text={item?.title}
                          // style={{height}}
                          color={
                            activeTab == index
                              ? theme.colors.black
                              : theme.colors.gray500
                          }
                          size={19}
                        />
                      </View>

                      <View
                        style={{
                          height: sizeHelper.calHp(10),
                          width: "110%",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                          marginTop: sizeHelper.calHp(5),
                        }}
                      >
                        {activeTab == index && (
                          <View
                            style={{
                              width: "100%",
                              height: sizeHelper.calHp(5.5),
                              backgroundColor: theme.colors.primary,
                              borderTopLeftRadius: sizeHelper.calWp(10),
                              borderTopRightRadius: sizeHelper.calWp(10),
                            }}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            {activeTab == 0 && (
              <View
                style={{
                  gap: sizeHelper.calHp(10),
                }}
              >
                <View
                  style={{
                    padding: sizeHelper.calWp(40),
                    backgroundColor: theme.colors.white,
                  }}
                >
                  <CustomText
                    text={"Pending Bets"}
                    color={theme.colors.half_black}
                    size={20}
                    fontWeight="900"
                    fontFam={fonts.Inter_Bold}
                  />
                  <View
                    style={{
                      alignItems: "center",
                      gap: sizeHelper.calHp(40),
                      width: "50%",
                      alignSelf: "center",
                      marginTop: sizeHelper.calHp(50),
                    }}
                  >
                    <Image
                      style={{
                        height: sizeHelper.calWp(80),
                        width: sizeHelper.calWp(80),
                      }}
                      source={images.profile_placeholder}
                    />
                    <CustomText
                      text={
                        "No pending action. Follow more users to see more bets."
                      }
                      style={{ textAlign: "center" }}
                      color={theme.colors.gray700}
                      size={20}
                    />
                    <CustomButton
                      borderRadius={20}
                      height={60}
                      size={22}
                      fontWeight={"600"}
                      fontFam={fonts.Inter_SemiBold}
                      text={"Discover Users"}
                    />
                  </View>
                  {/* <SportsBooks /> */}
                </View>

                <View
                  style={{
                    paddingTop: sizeHelper.calHp(40),
                    backgroundColor: theme.colors.white,
                    gap: sizeHelper.calHp(20),
                  }}
                >
                  <CustomText
                    text={"Who To Follow"}
                    color={theme.colors.half_black}
                    size={20}
                    style={{ paddingHorizontal: sizeHelper.calWp(40) }}
                    fontWeight="600"
                    fontFam={fonts.Inter_Medium}
                  />
                  <View>
                    {HowToFollow.map((item, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.4}
                          style={{
                            paddingHorizontal: sizeHelper.calWp(40),
                            paddingVertical: sizeHelper.calHp(18),
                            borderTopWidth: 0.5,
                            borderColor: "#A4A4A4",
                          }}
                        >
                          <View style={{ ...appStyles.rowjustify }}>
                            <View
                              style={{
                                ...appStyles.row,
                                gap: sizeHelper.calWp(20),
                              }}
                            >
                              <View
                                style={{
                                  width: sizeHelper.calWp(35),
                                  height: sizeHelper.calWp(35),
                                  borderRadius: sizeHelper.calWp(10),
                                  borderWidth: 1,
                                  borderColor: "#A4A4A4",
                                }}
                              ></View>
                              <CustomText
                                text={item?.title}
                                color={"#A4A4A4"}
                                size={18}
                              />
                            </View>

                            <Image
                              source={images.next}
                              style={{
                                width: sizeHelper.calWp(20),
                                height: sizeHelper.calWp(20),
                                tintColor: "#A4A4A4",
                              }}
                              resizeMode="contain"
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  {/* <SportsBooks /> */}
                </View>
              </View>
            )}

            {activeTab == 1 && (
              <View
                style={{
                  gap: sizeHelper.calHp(10),
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.white,
                    paddingVertical: sizeHelper.calHp(30),
                    gap: sizeHelper.calHp(30),
                  }}
                >
                  <FlatList
                    data={gameTodayData}
                    horizontal
                    style={{ paddingLeft: sizeHelper.calWp(20) }}
                    contentContainerStyle={{
                      paddingRight: sizeHelper.calWp(50),
                      gap: sizeHelper.calWp(25),
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={SportsContainer}
                  />
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: sizeHelper.calWp(40),
                    }}
                  >
                    <CustomSearch placeholder="Search" width={"80%"} />
                  </View>

                  {/* <SportsBooks /> */}
                </View>
                <View
                  style={{
                    backgroundColor: theme.colors.white,
                    paddingVertical: sizeHelper.calHp(30),
                    gap: sizeHelper.calHp(30),
                  }}
                >
                  <LeagueContainer />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default Feed;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(20),
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  logo: {
    width: sizeHelper.calWp(43),
    height: sizeHelper.calWp(43),
  },
  tabContainer: {
    borderRadius: 999,
    // paddingHorizontal: sizeHelper.calWp(20),
    // paddingVertical: sizeHelper.calHp(11),
    alignItems: "center",
    justifyContent: "center",
  },
  next_arrow: {
    height: sizeHelper.calHp(30),
    width: sizeHelper.calHp(25),
    marginLeft: sizeHelper.calWp(10),
    tintColor: theme.colors.primary,
  },
  btn_container: {
    height: sizeHelper.calHp(55),
    borderRadius: sizeHelper.calWp(15),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: sizeHelper.calWp(17),
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(0.5),
    backgroundColor: "#A8A8A8",
  },
  container: {
    gap: sizeHelper.calHp(20),
    backgroundColor: theme.colors.white,
    paddingVertical: sizeHelper.calHp(20),
  },
});
