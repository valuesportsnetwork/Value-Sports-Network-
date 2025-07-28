import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../../utils/GlobalStyles";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../Text";
import { theme } from "../../../utils/Themes";
import AnimatedProgressBar from "../../Progress";

const MoneyPercentageContainer = ({ navigation }: any) => {
  const Tabs = ["Spread", "Total", "Moneyline"];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedGame, setSelectedGame] = useState(0);

  return (
    <>
      <View
        style={{
          ...appStyles.rowjustify,
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <View
            style={{
              width: sizeHelper.calWp(45),
              height: sizeHelper.calWp(45),
              borderRadius: sizeHelper.calWp(45),
              backgroundColor: "#F5F5F5",
            }}
          />
          <CustomText text={"BOS"} color={theme.colors.black} size={21} />
        </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <View style={{alignItems:"center"}}>
          <CustomText text={"35%"} color={theme.colors.black} size={15} />
          <AnimatedProgressBar
            totalSteps={20}
            width={sizeHelper.calWp(60)}
            currentStep={6}
          />

          </View>
         
          <View style={{alignItems:"center"}}>
          <CustomText text={"35%"} color={theme.colors.black} size={15} />
          <AnimatedProgressBar
            totalSteps={20}
            width={sizeHelper.calWp(60)}
            currentStep={6}
          />

          </View>
          <View style={{alignItems:"center"}}>
          <CustomText text={"35%"} color={theme.colors.black} size={15} />
          <AnimatedProgressBar
            totalSteps={20}
            width={sizeHelper.calWp(60)}
            currentStep={6}
          />

          </View>
        </View>
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(50),
            paddingVertical: sizeHelper.calHp(3),
            backgroundColor: "#F5F5F5",
            borderRadius: sizeHelper.calWp(8),
            alignItems: "center",
            //   gap:sizeHelper.calHp(4)
          }}
        >
          <CustomText text={"+1.5"} color={theme.colors.black} size={14} />
          <CustomText text={"-142"} color={theme.colors.gray700} size={12} />
        </View>

        {/* {Tabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              onPress={() => setActiveTab(index)}
              style={{
                ...styles.tabContainer,
                backgroundColor:
                  activeTab == index ? theme.colors.white : "transparent",
              }}
            >
              <CustomText
                text={item}
                color={
                  activeTab == index ? theme.colors.black : theme.colors.gray500
                }
                size={19}
              />
             
            </TouchableOpacity>
          );
        })} */}
      </View>
    </>
  );
};

export default MoneyPercentageContainer;

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 999,
    paddingHorizontal: sizeHelper.calWp(60),
    paddingVertical: sizeHelper.calHp(9),
    alignItems: "center",
    justifyContent: "center",
  },
});
