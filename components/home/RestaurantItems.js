import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://media.gettyimages.com/photos/wide-angle-of-empty-cafe-or-restaurant-during-lockdown-in-europe-or-picture-id1288248633?s=612x612",
        categories: ["Cafe","Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://media.gettyimages.com/photos/friends-enjoying-lunch-in-restaurant-picture-id491207400?s=612x612",
        categories: ["Cafe","Bar"],
        price: "$$",
        reviews: 1200,
        rating: 3.7,
    },
    {
        name: "Indias Grill",
        image_url: "https://cache.marriott.com/marriottassets/marriott/YVRFP/yvrfp-world-wide-3790-hor-feat.jpg",
        categories: ["Indian","Bar"],
        price: "$$",
        reviews: 700,
        rating: 3.9,
    },
];


export default function RestaurantItems({navigation, ...props}) {
    return (
       <>
            {props.restaurantData.map((restaurant, index) =>(
                    <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom: 30}} onPress={() => navigation.navigate("RestaurantDetail", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })} >
                <View  style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                </View>
                    </TouchableOpacity>
            )) }

       </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image
            style={{width: "100%", height: 180}}
            source={{
                uri: props.image,
            }}
        />
        <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={26} color="#fff"/>
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }}>
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: "gray"}}>30 - 45 - min</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center"
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)