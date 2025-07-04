// components/ChapterScreenLayout.tsx
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { pageStyle } from "../../styles/theme";

export const ChapterScreenLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SafeAreaView style={pageStyle.pageContainer}>
      <ScrollView style={pageStyle.scrollContent}>
        <View style={pageStyle.sectionStack}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
