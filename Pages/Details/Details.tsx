import { useEffect, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, ScrollView, Pressable, Image, FlatList, Animated, Easing } from "react-native";
import FeatherIcons from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// STYLE
import styles from "./Details.style";
// HELPERS
import colors from "../../Helpers/Colors";
// TYPES
import { NativeStackParamList } from "../..";

type Props = NativeStackScreenProps<NativeStackParamList, "Details">;

FeatherIcons.loadFont();
MaterialCommunityIcons.loadFont();

const Details = (props: Props) => {
	const detailAnimation = useRef(new Animated.Value(-30)).current;
	const imageAnimation = useRef(new Animated.Value(100)).current;
	const buttonOpacityAnimation = useRef(new Animated.Value(0)).current;
	const buttonMarginAnimation = useRef(new Animated.Value(0.5)).current;
	const priceTextAnimation = useRef(new Animated.Value(32)).current;

	useEffect(() => {
		Animated.timing(detailAnimation, { toValue: 0, duration: 1000, useNativeDriver: false }).start();
		Animated.timing(imageAnimation, { toValue: 0, duration: 1000, useNativeDriver: false }).start();
		Animated.timing(buttonOpacityAnimation, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
		Animated.spring(buttonMarginAnimation, { toValue: 1, useNativeDriver: true, velocity: 100 }).start(() => {
			Animated.timing(priceTextAnimation, { toValue: 40, duration: 300, useNativeDriver: false }).start(() => {
				Animated.timing(priceTextAnimation, { toValue: 32, duration: 300, useNativeDriver: false }).start();
			});
		});
	}, []);

	const handleNavigateBack = () => props.navigation.goBack();

	return (
		<ScrollView style={styles.container}>
			<View style={styles.navigationContainer}>
				<View style={styles.backButton}>
					<Pressable style={styles.backButtonPressable} android_ripple={{ color: colors.textDark }} onPress={handleNavigateBack}>
						<FeatherIcons color={colors.textDark} name="chevron-left" size={18} />
					</Pressable>
				</View>
				<View style={styles.starIcon}>
					<MaterialCommunityIcons color={colors.background} name="star" size={18} />
				</View>
			</View>

			<Text style={styles.title}>{props.route.params.title}</Text>

			<Animated.Text style={[styles.price, { fontSize: priceTextAnimation }]}>${props.route.params.price}</Animated.Text>

			<View style={styles.detailsContainer}>
				<Animated.View style={[styles.details, { marginLeft: detailAnimation }]}>
					<Text style={styles.detailHeader}>Size</Text>
					<Text style={styles.detailContent}>
						{props.route.params.sizeName} {props.route.params.sizeNumber}
					</Text>

					<Text style={styles.detailHeader}>Crust</Text>
					<Text style={styles.detailContent}>{props.route.params.crust}</Text>

					<Text style={styles.detailHeader}>Delivery in</Text>
					<Text style={styles.detailContent}>{props.route.params.deliveryTime} min</Text>
				</Animated.View>
				<Animated.Image style={{ marginLeft: imageAnimation }} source={props.route.params.image} resizeMode="contain" />
			</View>

			<View style={styles.ingredientContainer}>
				<Text style={styles.ingredientsTitle}>Ingredients</Text>

				<FlatList
					horizontal={true}
					data={props.route.params.ingredients}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<View style={styles.ingredientsCard}>
							<Image source={item.image} />
						</View>
					)}
				/>
			</View>

			<Animated.View style={[styles.placeOrderButton, { opacity: buttonOpacityAnimation, transform: [{ scale: buttonMarginAnimation }] }]}>
				<Pressable style={styles.placeOrderPressable} android_ripple={{ color: colors.textDark }}>
					<Text style={styles.placeOrderText}>Place an order</Text>
					<FeatherIcons color={colors.textDark} name="chevron-right" size={20} />
				</Pressable>
			</Animated.View>
		</ScrollView>
	);
};

export default Details;
