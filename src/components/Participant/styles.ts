import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		marginBottom: 10,
	},
	name: {
		flex: 1,
		color: "#FFF",
		paddingHorizontal: 24,
		fontSize: 16,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		borderStartStartRadius: 0,
		borderBottomStartRadius: 0,
		backgroundColor: "#E23C44",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#FFF",
		fontSize: 24,
	},
});
