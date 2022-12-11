import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteGoalItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressendItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressendItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});
