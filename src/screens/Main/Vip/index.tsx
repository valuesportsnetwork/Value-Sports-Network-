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
import RecentStoriesCard from "../../../components/Home/RecentStories";
import RecentEpisodesCard from "../../../components/Home/RecentEpisodes";
import ProAnalysisCard from "../../../components/Vip/ProAnalysis";
import MoneyPercentageTab from "../../../components/Vip/MoneyPercentageTab";
import MoneyPercentageContainer from "../../../components/Vip/MoneyPercentageContainer";

const Vip = ({ navigation }: any) => {
  const Tabs = [
    "Today",
    "Money%",
    "props",
    "Projections",
    "Signals",
    "Systems",
  ];
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

  const SportsBooks = () => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: theme.colors.white,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          elevation: 8, // Android shadow

          shadowColor: theme.colors.black,
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: "110%",
            height: "150%",
            position: "absolute",
            tintColor: "#F6F6F6",
          }}
          source={images.mask}
          resizeMode="contain"
        />
        <View
          style={{
            width: "65%",
            gap: sizeHelper.calHp(10),
            paddingVertical: sizeHelper.calHp(30),
            paddingHorizontal: sizeHelper.calWp(25),
          }}
        >
          <CustomText
            text={"Today fastes way to bet like a PRO"}
            color={theme.colors.black}
            numberOfLines={2}
            size={23}
            fontWeight="700"
            fontFam={fonts.BricolageGrotesque_Bold}
          />
          <CustomText
            text={
              "Get access to money percentages, sharp action, player prop projection (including TDs!) and more."
            }
            color={"#707070"}
            numberOfLines={3}
            size={17}
          />
          <CustomButton
            // width={"100%"}
            borderRadius={999}
            height={40}
            style={{ marginTop: sizeHelper.calHp(20) }}
            width={"45%"}
            size={17}
            textColor={theme.colors.white}
            bgColor={theme.colors.black}
            // onPress={() => {}}
            text={"UNLOCK PRO"}
          ></CustomButton>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(220),
            height: "100%",
          }}
          source={images.players}
          // resizeMode="contain"
        />
      </View>
    );
  };

  const RenderRecentStories = ({ item, index }: any) => {
    return <RecentStoriesCard />;
  };
  const RenderProAnalysis = ({ item, index }: any) => {
    return <ProAnalysisCard />;
  };

  const RenderRecentEpisodes = ({ item, index }: any) => {
    return <RecentEpisodesCard />;
  };

  const BestBets = () => {
    return (
      <View
        style={{
          gap: sizeHelper.calWp(30),
          width: "100%",
          paddingHorizontal: sizeHelper.calWp(40),
        }}
      >
        <Image
          style={{
            height: sizeHelper.calHp(300),
            width: "100%",
            borderRadius: sizeHelper.calWp(15),
          }}
          source={images.best_beat}
        />

        <View style={{ gap: sizeHelper.calHp(5), width: "80%" }}>
          <CustomText
            text={"NBA | Lorem ipsum sum realm ipsrem"}
            color={theme.colors.gray100}
            numberOfLines={2}
            size={22}
          />
          <CustomText
            text={"Mark Jame . 17h ago"}
            color={theme.colors.gray65}
            size={15}
          />
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
              gap: sizeHelper.calHp(20),
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
                text={"All Sports"}
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
                      <CustomText
                        text={item}
                        // style={{height}}
                        color={
                          activeTab == index
                            ? theme.colors.black
                            : theme.colors.gray500
                        }
                        size={19}
                      />
                      <View
                        style={{
                          height: sizeHelper.calHp(10),
                          width: "100%",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
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

            <View
              style={{
                padding: sizeHelper.calWp(40),
                backgroundColor: theme.colors.white,
              }}
            >
              <SportsBooks />
            </View>

            <View style={styles.container}>
              <View
                style={{
                  ...appStyles.rowjustify,
                  marginHorizontal: sizeHelper.calWp(40),
                }}
              >
                <CustomText
                  text={"PRO Analysis"}
                  color={theme.colors.half_black}
                  size={25}
                  fontWeight="900"
                  fontFam={fonts.Inter_Bold}
                />

                <CustomText
                  text={"See All"}
                  color={theme.colors.primary}
                  size={20}
                />
              </View>

              <FlatList
                data={gameTodayData}
                horizontal
                style={{ paddingLeft: sizeHelper.calWp(40) }}
                contentContainerStyle={{
                  paddingRight: sizeHelper.calWp(70),
                  gap: sizeHelper.calWp(25),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={RenderProAnalysis}
              />
            </View>
            <View
              style={{
                ...styles.container,
                paddingHorizontal: sizeHelper.calWp(40),
              }}
            >
              <View
                style={{
                  ...appStyles.rowjustify,
                }}
              >
                <CustomText
                  text={"Money Percentage"}
                  color={theme.colors.half_black}
                  size={25}
                  fontWeight="900"
                  fontFam={fonts.Inter_Bold}
                />

                <CustomText
                  text={"See All"}
                  color={theme.colors.primary}
                  size={20}
                />
              </View>
              <MoneyPercentageTab />
              {[1, 2].map((item, index) => {
                return <MoneyPercentageContainer key={index.toString()} />;
              })}
              <CustomText
                text={"Final"}
                style={{ marginLeft: sizeHelper.calWp(65) }}
                color={theme.colors.black}
                size={21}
              />
              <CustomButton text="UNLOCK PRO" />
              <View style={styles.divider} />

              {[1, 2].map((item, index) => {
                return <MoneyPercentageContainer key={index.toString()} />;
              })}
              <CustomText
                text={"Final"}
                style={{ marginLeft: sizeHelper.calWp(65) }}
                color={theme.colors.black}
                size={21}
              />

              <View style={styles.divider} />

              {[1, 2].map((item, index) => {
                return <MoneyPercentageContainer key={index.toString()} />;
              })}
              <CustomText
                text={"Final"}
                style={{ marginLeft: sizeHelper.calWp(65) }}
                color={theme.colors.black}
                size={21}
              />
            </View>
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default Vip;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
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
    height: sizeHelper.calHp(65),
    borderRadius: sizeHelper.calWp(15),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(17),
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(1),
    backgroundColor: "#A8A8A8",
  },
  container: {
    gap: sizeHelper.calHp(20),
    backgroundColor: theme.colors.white,
    paddingVertical: sizeHelper.calHp(20),
  },
});
