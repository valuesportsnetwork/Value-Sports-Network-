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
import { windowWidth } from "../../../utils/Commons/Dimention";
import RecentStoriesCard from "../../../components/Home/RecentStories";
import RecentVideosCard from "../../../components/Home/RecentVideos";
import RecentEpisodesCard from "../../../components/Home/RecentEpisodes";

const Home = ({ navigation }: any) => {
  const Tabs = ["All", "Articles", "Videos", "Podcasts"];
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
          width: windowWidth / 1.5,
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: theme.colors.primary,
          flexDirection: "row",
          // justifyContent:"space-between",
          alignItems: "center",
          gap: sizeHelper.calWp(30),
          // alignItems:"center",
          paddingHorizontal: sizeHelper.calWp(25),
          paddingVertical: sizeHelper.calHp(30),
          elevation: 8, // Android shadow

          shadowColor: theme.colors.black,
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Image
          style={{ width: "110%", height: "110%", position: "absolute" }}
          source={images.mask}
        />
        <View style={{ width: "70%" }}>
          <CustomText
            text={"Track your first bet"}
            color={theme.colors.white}
            numberOfLines={1}
            size={23}
            fontWeight="700"
            fontFam={fonts.BricolageGrotesque_Bold}
          />
          <CustomText
            text={"Unlock our free tools to monitor and inprove your record"}
            color={theme.colors.white}
            numberOfLines={2}
            size={18}
          />
          <CustomButton
            // width={"100%"}
            borderRadius={999}
            height={40}
            style={{ marginTop: sizeHelper.calHp(20) }}
            width={"60%"}
            size={17}
            textColor={theme.colors.black}
            bgColor={theme.colors.white}
            // onPress={() => {}}
            text={"Track a bet"}
          >
            <Image
              style={styles.next_arrow}
              source={images.next_arrow}
              resizeMode="contain"
            />
          </CustomButton>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(80),
            height: sizeHelper.calHp(80),
            tintColor: theme.colors.white,
          }}
          source={images.state_up}
          resizeMode="contain"
        />
      </View>
    );
  };
  const TrendPlayers = () => {
    return (
      <TouchableOpacity style={{ ...styles.btn_container, flex: 1 }}>
        <Image
          style={styles.logo}
          source={images.state_up}
          resizeMode="contain"
        />
        <CustomText
          text={"Player trends"}
          color={theme.colors.half_black}
          size={20}
          fontWeight="400"
          fontFam={fonts.Inter_Light}
        />
      </TouchableOpacity>
    );
  };

  const renderSportsBooks = ({ item, index }: any) => {
    return <SportsBooks />;
  };
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

  const RenderRecentStories = ({ item, index }: any) => {
    return <RecentStoriesCard />;
  };
  const RenderRecentVideos = ({ item, index }: any) => {
    return <RecentVideosCard />;
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
              gap: sizeHelper.calHp(30),
            }}
          >
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
                paddingHorizontal: sizeHelper.calWp(40),
              }}
            >
              <CustomText
                text={"Value Sports"}
                color={theme.colors.half_black}
                size={25}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />
              <Image
                style={styles.logo}
                source={images.logo}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                gap: sizeHelper.calHp(10),
                paddingHorizontal: sizeHelper.calWp(40),
              }}
            >
              <View
                style={{ ...appStyles.rowjustify, gap: sizeHelper.calHp(10) }}
              >
                <TrendPlayers />
                <TrendPlayers />
              </View>
              <View
                style={{ ...appStyles.rowjustify, gap: sizeHelper.calHp(10) }}
              >
                <TrendPlayers />
                <TrendPlayers />
              </View>
            </View>
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
                paddingHorizontal: sizeHelper.calWp(40),
              }}
            >
              <TouchableOpacity
                style={{
                  ...styles.tabContainer,

                  backgroundColor: theme.colors.primary + "10",
                }}
              >
                <CustomText text={"Sports"} color={"#262626"} size={19} />
                <Image
                  style={{
                    width: sizeHelper.calWp(15),
                    height: sizeHelper.calHp(15),
                  }}
                  source={images.down}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {Tabs.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => setActiveTab(index)}
                    style={{
                      ...styles.tabContainer,

                      backgroundColor:
                        activeTab == index
                          ? theme.colors.primary
                          : theme.colors.primary + "10",
                    }}
                  >
                    <CustomText
                      text={item}
                      color={
                        activeTab == index ? theme.colors.white : "#262626"
                      }
                      size={19}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <FlatList
              data={[1, 2, 3, 4]}
              horizontal
              style={{ paddingLeft: sizeHelper.calWp(40) }}
              contentContainerStyle={{
                paddingRight: sizeHelper.calWp(70),
                gap: sizeHelper.calWp(25),
                paddingBottom: sizeHelper.calHp(20),
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={renderSportsBooks}
            />
            <View
              style={{
                gap: sizeHelper.calHp(20),
                marginTop: sizeHelper.calHp(-20),
              }}
            >
              <CustomText
                text={"Games Today"}
                color={theme.colors.half_black}
                size={25}
                style={{ marginHorizontal: sizeHelper.calWp(40) }}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />

              <FlatList
                data={gameTodayData}
                horizontal
                style={{ paddingLeft: sizeHelper.calWp(20) }}
                contentContainerStyle={{
                  paddingRight: sizeHelper.calWp(50),
                  gap: sizeHelper.calWp(25),
                  paddingBottom: sizeHelper.calHp(20),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={SportsContainer}
              />
            </View>
            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText
                text={"Recent Stories"}
                color={theme.colors.half_black}
                size={25}
                style={{ marginHorizontal: sizeHelper.calWp(40) }}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />

              <FlatList
                data={[1, 2, 3, 4, 5]}
                style={{ paddingLeft: sizeHelper.calWp(40) }}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(25),
                  paddingBottom: sizeHelper.calHp(20),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={RenderRecentStories}
              />
            </View>

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText
                text={"Recent Videos"}
                color={theme.colors.half_black}
                size={25}
                style={{ marginHorizontal: sizeHelper.calWp(40) }}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />

              <FlatList
                data={gameTodayData}
                horizontal
                style={{ paddingLeft: sizeHelper.calWp(40) }}
                contentContainerStyle={{
                  paddingRight: sizeHelper.calWp(50),
                  gap: sizeHelper.calWp(25),
                  paddingBottom: sizeHelper.calHp(20),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={RenderRecentVideos}
              />
            </View>

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText
                text={"Recent Episodes"}
                color={theme.colors.half_black}
                size={25}
                style={{ marginHorizontal: sizeHelper.calWp(40) }}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />

              <FlatList
                data={gameTodayData}
                horizontal
                style={{ paddingLeft: sizeHelper.calWp(40) }}
                contentContainerStyle={{
                  paddingRight: sizeHelper.calWp(50),
                  gap: sizeHelper.calWp(25),
                  paddingBottom: sizeHelper.calHp(20),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={RenderRecentEpisodes}
              />
            </View>
            <BestBets />
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
  },
  logo: {
    width: sizeHelper.calWp(43),
    height: sizeHelper.calWp(43),
  },
  tabContainer: {
    borderRadius: 999,
    paddingHorizontal: sizeHelper.calWp(20),
    paddingVertical: sizeHelper.calHp(11),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: sizeHelper.calWp(17),
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
});
