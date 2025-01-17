import {} from "../functions";
import React, { FC } from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { globalStyles } from "../../../styles";

// export FAQ UI
const FAQUI: FC = (): JSX.Element => {
  return (
    // main view
    <View style={globalStyles.mainView}>
      {/* center view */}
      <View style={globalStyles.centerView}>
        <Text style={globalStyles.titleText}>FAQ UI created!</Text>
      </View>
    </View>
  );
};
export default FAQUI;
