import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},
	eventName: {
		color: "#FDFCFE",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	eventDate: {
		color: "#6B6B6B",
		fontSize: 16,
	},
	form: {
		width: "100%",
		flexDirection: "row",
		// gap: 12,
		marginTop: 32,
		marginBottom: 42,
	},
	input: {
		flex: 1,
		height: 56,
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		borderEndEndRadius: 0,
		borderTopEndRadius: 0,
		paddingHorizontal: 16,
		fontSize: 16,
		color: "#FDFCFE",
		borderColor: "#31CF67",
		borderStyle: "solid",
		borderWidth: 1,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		borderStartStartRadius: 0,
		borderBottomStartRadius: 0,
		backgroundColor: "#31CF67",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#FFF",
		fontSize: 24,
	},
	emptyListItem: {
		// alignItems: "center",
		// justifyContent: "center",
		textAlign: "center",
		fontSize: 16,
		fontStyle: "italic",
		color: "#6B6B6B",
	},
});
