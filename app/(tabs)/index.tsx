import * as React from "react";
import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import LottieView from "lottie-react-native";
import { createRandomUser } from "@/utils/generate-dummy-data";
import { ThreadsContext } from "@/context/thread";
import ThreadItem from "@/components/threads-item";

export default function TabOneScreen() {
  const animationRef = React.useRef<LottieView>(null);
  const threads = React.useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
          />
        }
      >
        <LottieView
          ref={animationRef}
          source={require("../../lottie animations/threads.json")}
          autoPlay
          loop={false}
          style={{ width: 90, height: 90, alignSelf: "center" }}
          // onAnimationFinish={() => {
          //   alert("finished");
          // }}
        />
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
