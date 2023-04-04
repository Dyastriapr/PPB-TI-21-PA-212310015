import { ScrollView } from "react-native";
import React from "react";
import { UsersObj } from "../../../data/UserItems";

const ExpScrollView = ({ }) => {
  return (
    <ScrollView>
      {UsersObj.map((v, index) => (
        <UserItems item={v} key={index} />
      ))}
    </ScrollView>
  );
};

export default ExpScrollView;