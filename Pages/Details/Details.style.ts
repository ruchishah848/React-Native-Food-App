import { StyleSheet } from "react-native";
// HELPERS
import colors from "../../Helpers/Colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	navigationContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
	},
	backButton: {
		borderColor: colors.textDark,
		borderWidth: 1,
		borderRadius: 10,
		overflow: "hidden",
	},
	backButtonPressable: {
		padding: 7,
	},
	starIcon: {
		padding: 8,
		borderRadius: 10,
		backgroundColor: colors.primary,
	},
	title: {
		marginHorizontal: 20,
		fontSize: 32,
		color: colors.textDark,
		fontWeight: "700",
		fontFamily: "Montserrat-Bold",
	},
	price: {
		margin: 20,
		color: colors.price,
		fontWeight: "700",
		fontFamily: "Montserrat-Bold",
	},
	detailsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		padding: 20,
		width: "40%",
	},
	detailHeader: {
		fontSize: 16,
		color: colors.textLight,
	},
	detailContent: {
		fontSize: 16,
		fontWeight: "700",
		marginBottom: 20,
		color: colors.textDark,
		textTransform: "capitalize",
		fontFamily: "Montserrat-Bold",
	},
	ingredientContainer: {
		padding: 20,
	},
	ingredientsTitle: {
		fontSize: 16,
		fontWeight: "700",
		marginBottom: 20,
		color: colors.textDark,
		textTransform: "capitalize",
		fontFamily: "Montserrat-Bold",
	},
	ingredientsCard: {
		padding: 10,
		elevation: 2,
		marginRight: 20,
		marginBottom: 20,
		shadowRadius: 5,
		borderRadius: 20,
		shadowOpacity: 0.5,
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "rgb(0, 0, 0)",
		backgroundColor: "white",
		shadowOffset: { width: 3, height: 3 },
	},
	placeOrderButton: {
		elevation: 5,
		borderRadius: 30,
		overflow: "hidden",
		marginHorizontal: 20,
	},
	placeOrderPressable: {
		height: 60,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
	},
	placeOrderText: {
		fontSize: 14,
		marginRight: 3,
		fontWeight: "700",
		color: colors.textDark,
		fontFamily: "Montserrat-Bold",
	},
});

export default styles;
