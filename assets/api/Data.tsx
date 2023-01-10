const DATA = [
	{
		id: "1",
		product: "Random Metal",
		productImage:
			"https://static1.bigstockphoto.com/5/6/3/large1500/3651179.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Jshop",
		profileImage:
			"https://cdn.icon-icons.com/icons2/514/PNG/512/shop_icon-icons.com_51010.png",
		location: "Sample address location only Sample address location only",
		price: 10,
		rating: 5,
	},
	{
		id: "2",
		product: "Used Tires",
		productImage:
			"http://images.summitmedia-digital.com/topgear/images/2018/09/22/usedtires-main-1537614890.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "J Shops",
		profileImage:
			"https://cdn5.vectorstock.com/i/1000x1000/25/89/shopping-market-shop-store-icon-set-vector-10472589.jpg",
		location: "Sample address location",
		price: 10,
		rating: 4,
	},
	{
		id: "3",
		product: "Plastic Bottles",
		productImage:
			"https://cdn.vox-cdn.com/thumbor/5gHcR25_N_8mwxObh1_0ZKw06To=/0x0:3008x1960/1400x1050/filters:focal(1504x980:1505x981)/cdn.vox-cdn.com/uploads/chorus_asset/file/19704486/595269544.jpg.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		location: "Sample address location",
		username: "Sample Shops",
		profileImage: "https://t.pimg.jp/068/573/249/1/68573249.jpg",
		price: 10,
		rating: 5,
	},
	{
		id: "4",
		product: "Wires and Cables",
		productImage:
			"https://www.miracle.net.in/wp-content/uploads/2017/06/How-Are-Electrical-Wires-Manufactured.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		location: "Sample address location",
		username: "Sample Shop 123",
		profileImage:
			"https://image.shutterstock.com/image-vector/wire-transfer-vector-icon-260nw-539805874.jpg",
		price: 20,
		rating: 4,
	},
	{
		id: "5",
		product: "Aircon",
		productImage:
			"https://5.imimg.com/data5/WN/MV/MY-50832721/old-air-condition-500x500.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Jshop",
		profileImage:
			"https://i.pinimg.com/originals/7e/3d/56/7e3d56c6f75da2ed122dc38c9e06dc0d.png",
		location: "Sample address location",
		price: 100,
		rating: 4,
	},
	{
		id: "6",
		product: "Bike",
		productImage:
			"https://mdahbasatrading.com/wp-content/uploads/2020/07/BIK7.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Bike Jshops",
		profileImage:
			"https://previews.123rf.com/images/sarawuth702/sarawuth7021504/sarawuth702150400074/39121510-bike-shop-logo-template-vector.jpg",
		location: "Sample address location",
		price: 1050,
		rating: 4,
	},
	{
		id: "7",
		product: "Waste Foods",
		productImage:
			"https://foodprint.org/wp-content/uploads/2018/10/food-waste-problem.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Jshop",
		profileImage:
			"https://as1.ftcdn.net/v2/jpg/04/16/05/10/500_F_416051078_2jnppPwShdqAej1xwvBhWHHXEMPbNEZF.jpg",
		location: "Sample address location",
		price: 30,
		rating: 4,
	},
	{
		id: "8",
		product: "Box",
		productImage: "https://s3files.core77.com/blog/images/boxcycle.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Sample Jshop",
		profileImage:
			"https://cdn.dribbble.com/users/458522/screenshots/14565465/media/c4b445e94ea08f55f58c6e5c4b6b42a1.jpg?compress=1&resize=400x300&vertical=top",
		location: "Sample address location",
		price: 5,
		rating: 4,
	},
	{
		id: "9",
		product: "Gorrugated Roof",
		productImage:
			"https://media.karousell.com/media/photos/products/2021/2/3/2nd_hand_yero_1612342378_4ed0a975.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Jshop",
		profileImage:
			"https://image.shutterstock.com/image-vector/icon-storefront-shop-green-awning-260nw-1475878316.jpg",
		location: "Sample address location",
		price: 120,
		rating: 4,
	},
	{
		id: "10",
		product: "Old News Paper",
		productImage:
			"https://media.karousell.com/media/photos/products/2020/6/17/old_newspaper_dyaryo_for_paint_1592382348_eeb8612f_progressive.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "NewsPaper_Jshop",
		profileImage:
			"https://thumbs.dreamstime.com/b/news-paper-shop-detailed-illustration-newspaper-wite-33695081.jpg",
		location: "Sample address location",
		price: 10,
		rating: 4,
	},
	{
		id: "11",
		product: "Electric Fan",
		productImage:
			"https://image.shutterstock.com/image-photo/many-old-fan-electric-fans-260nw-785850634.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "Eshop",
		profileImage:
			"https://thumbs.dreamstime.com/b/blue-electric-fan-icon-home-appliances-concept-vector-illustration-189764530.jpg",
		location: "Sample address location",
		price: 40,
		rating: 4,
	},
	{
		id: "12",
		product: "Broken Gadgets",
		productImage:
			"https://ktla.com/wp-content/uploads/sites/4/2021/06/IMG_20210524_112912.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus diam ut libero pretium, a lobortis nisi sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia lacus ante, ac malesuada ante commodo non. Praesent quis lectus quis purus semper gravida. Aliquam erat volutpat.",
		username: "BGShop",
		profileImage:
			"https://i.pinimg.com/736x/1a/e6/fb/1ae6fb6a0dcd8519270649bb78e2cbf9.jpg",
		location: "Sample address location",
		price: 190,
		rating: 4,
	},
];

export default DATA;
