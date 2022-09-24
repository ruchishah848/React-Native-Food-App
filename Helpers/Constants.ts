export const categoriesData = [
	{
		id: 1,
		image: require("../Assets/Images/pizza-icon.png"),
		title: "Pizza",
		selected: true,
	},
	{
		id: 2,
		image: require("../Assets/Images/shrimp-icon.png"),
		title: "Punjabi",
		selected: false,
	},
	{
		id: 3,
		image: require("../Assets/Images/soda-icon.png"),
		title: "Soft Drinks",
		selected: false,
	},
];

export const popularData = [
	{
		id: 1,
		image: require("../Assets/Images/pizza1.png"),
		title: "Primavera Pizza",
		weight: "540g",
		rating: "5.0",
		price: 3.99,
		sizeName: "medium",
		sizeNumber: 14,
		crust: "Thin crust",
		deliveryTime: 30,
		ingredients: [
			{
				id: 1,
				name: "ham",
				image: require("../Assets/Images/ham.png"),
			},
			{
				id: 2,
				name: "tomato",
				image: require("../Assets/Images/tomato.png"),
			},
			{
				id: 3,
				name: "cheese",
				image: require("../Assets/Images/cheese.png"),
			},
			{
				id: 4,
				name: "garlic",
				image: require("../Assets/Images/garlic.png"),
			},
		],
	},
	{
		id: 2,
		image: require("../Assets/Images/pizza2.png"),
		title: "Vegetarian Pizza",
		weight: "450g",
		rating: "4.0",
		price: 5.99,
		sizeName: "medium",
		sizeNumber: 10,
		crust: "Thick crust",
		deliveryTime: 48,
		ingredients: [
			{
				id: 1,
				name: "cheese",
				image: require("../Assets/Images/cheese.png"),
			},
			{
				id: 2,
				name: "garlic",
				image: require("../Assets/Images/garlic.png"),
			},
		],
	},
	{
		id: 3,
		image: require("../Assets/Images/pizza3.png"),
		title: "Pepperoni Pizza",
		weight: "700g",
		rating: "5.0",
		price: 9.99,
		sizeName: "Large",
		sizeNumber: 14,
		crust: "Thin crust",
		deliveryTime: 20,
		ingredients: [
			{
				id: 1,
				name: "tomato",
				image: require("../Assets/Images/tomato.png"),
			},
			{
				id: 2,
				name: "cheese",
				image: require("../Assets/Images/cheese.png"),
			},
		],
	},
];
