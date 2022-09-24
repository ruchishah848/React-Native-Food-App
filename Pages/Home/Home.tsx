import { useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FeatherIcons from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList, Image, Pressable, StatusBar, Text, View, ScrollView, TextInput, Animated, Easing } from "react-native";
// STYLE
import styles from "./Home.style";
// HELPERS
import colors from "../../Helpers/Colors";
import { categoriesData, popularData } from "../../Helpers/Constants";
// TYPES
import { NativeStackParamList } from "../../index";

FeatherIcons.loadFont();
MaterialCommunityIcons.loadFont();

type Props = NativeStackScreenProps<NativeStackParamList, "Home">;

const Home = (props: Props): JSX.Element => {
	const inputAnimation = useRef(new Animated.Value(0)).current;

	const [searchValue, setSearchValue] = useState("");

	const handleInputFocused = () => {
		Animated.timing(inputAnimation, { toValue: 3.2, easing: Easing.linear, duration: 300, useNativeDriver: true }).start();
	};

	const handleInputBlur = () => {
		Animated.timing(inputAnimation, { toValue: 0, easing: Easing.linear, duration: 300, useNativeDriver: true }).start();
	};

	const handleNavigateToDetails = (data: typeof popularData[0]) => () => props.navigation.navigate("Details", data);

	return (
		<ScrollView style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor={colors.background} animated />

			<View style={styles.headerWrapper}>
				<Image source={require("../../Assets/Images/profile.png")} style={styles.profileImage} />

				<Pressable android_ripple={{ color: colors.textLight, borderless: true }}>
					<FeatherIcons name="menu" size={24} color={colors.textDark} />
				</Pressable>
			</View>

			<View style={styles.titleWrapper}>
				<Text style={styles.title}>Food</Text>
				<Text style={styles.subTitle}>Delivery</Text>
			</View>

			<View style={styles.searchWrapper}>
				<FeatherIcons name="search" size={18} color={colors.textDark} />
				<TextInput
					placeholder="Search"
					placeholderTextColor={colors.textLight}
					style={styles.searchText}
					value={searchValue}
					onChangeText={setSearchValue}
					onFocus={handleInputFocused}
					onBlur={handleInputBlur}
				/>
			</View>
			<View style={styles.searchLine}>
				<Animated.View style={[styles.serachFocusLine, { transform: [{ scaleX: inputAnimation }] }]}></Animated.View>
			</View>

			<View style={styles.categoryWrapper}>
				<Text style={styles.categoryTitle}>Categories</Text>

				<FlatList
					horizontal={true}
					data={categoriesData}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<View style={[styles.categoryCard, { backgroundColor: item.selected ? colors.primary : colors.background }]}>
							<Image source={item.image} />
							<Text style={styles.categoryCardTitle}>{item.title}</Text>
							<Pressable
								android_ripple={{ borderless: true, color: colors.textLight }}
								style={[styles.categoryCardRightIconContainer, { backgroundColor: item.selected ? colors.background : colors.secondary }]}
							>
								<FeatherIcons color={item.selected ? colors.textDark : colors.textLight} name="chevron-right" size={14} />
							</Pressable>
						</View>
					)}
				/>
			</View>

			<View style={styles.popularWrapper}>
				<Text style={styles.popularTitle}>Popular</Text>

				<View style={styles.popularCardWrapper}>
					{popularData.map((data) => (
						<View key={data.id} style={styles.popularCard}>
							<View style={styles.popularCardDataContainer}>
								<View style={styles.popularCardTopOfWeekContainer}>
									<MaterialCommunityIcons color={colors.primary} name="crown" size={20} />
									<Text style={styles.popularCardTopOfWeekText}>top of the week</Text>
								</View>
								<View style={styles.popularCardTitleAndWeightContainer}>
									<Text style={styles.popularCardTitleText}>{data.title}</Text>
									<Text style={styles.popularCardWeightText}>Weight {data.weight}</Text>
								</View>
								<View style={styles.popularCardPlusAndRatingContainer}>
									<View style={styles.popularCardPlusContainer}>
										<Pressable style={styles.popularCardPlusPressable} android_ripple={{ color: colors.textDark }} onPress={handleNavigateToDetails(data)}>
											<FeatherIcons color={colors.textDark} name="plus" size={16} />
										</Pressable>
									</View>
									<View style={styles.popularCardRatingContainer}>
										<MaterialCommunityIcons color={colors.textDark} name="star" size={14} />
										<Text style={styles.popularCardRatingText}>{data.rating}</Text>
									</View>
								</View>
							</View>
							<View style={styles.popularCardImageWrapper}>
								<Image style={styles.popularCardImage} source={data.image} resizeMode="contain" />
							</View>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default Home;
