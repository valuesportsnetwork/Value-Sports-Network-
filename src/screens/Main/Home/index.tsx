import { FlatList, StyleSheet, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { images } from "../../../assets/pngs";
import CustomInput from "../../../components/Input";
import TopHeader from "../../../components/Header";
import sizeHelper from "../../../utils/Helpers";
import { useTheme } from "@react-navigation/native";
import CourseCard from "../../../components/CourseCard";

const Home = ({ navigation }: any) => {
  const { colors }: any = useTheme(); // Get the current theme's colors

  const renderCourse = () => {
    return <CourseCard onPress={() => navigation.navigate("CourseDetail")} />;
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(40),
            gap: sizeHelper.calHp(30),
          }}
        >
          <TopHeader />
          <CustomInput
            backgroundColor={colors.grey + "60"}
            borderRadius={sizeHelper.calWp(999)}
            borderWidth={sizeHelper.calWp(2)}
            borderColor={colors.grey}
            value={""}
            onFocus={() => navigation.navigate("CourseSearch")}
            // onChangeText={(txt: string) => onSearch(txt)}
            rightSource={images.search}
            rightSourceColor={colors.text}
            placeholder="Search"
          />
        </View>

        <FlatList
          data={[1, 2, 3, 4]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: sizeHelper.calHp(50),
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={renderCourse}
        />
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
});
