import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../../utils/GlobalStyles";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../Text";
import { theme } from "../../../utils/Themes";

const MoneyPercentageTab = ({ navigation }: any) => {
  const Tabs = ["Spread", "Total", "Moneyline"];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedGame, setSelectedGame] = useState(0);

  return (
    <>
      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: sizeHelper.calWp(6),
          backgroundColor: "#F5F5F5",
          borderRadius:999,
          paddingVertical:sizeHelper.calHp(6)
        }}
      >
        {Tabs.map((item, index) => {
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
        })}
      </View>
    </>
  );
};

export default MoneyPercentageTab;

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 999,
    paddingHorizontal: sizeHelper.calWp(60),
    paddingVertical: sizeHelper.calHp(9),
    alignItems: "center",
    justifyContent: "center",
  },
});
