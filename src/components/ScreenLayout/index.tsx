import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { pageStyle } from "../../styles/theme";

export const ChapterScreenLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SafeAreaView style={pageStyle.pageContainer}>
      <LinearGradient
        colors={["#DBDAEE", "#7D7D88"]}
        locations={[0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <ScrollView style={pageStyle.scrollContent}>
          <View style={pageStyle.sectionStack}>{children}</View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
