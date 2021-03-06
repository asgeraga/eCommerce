import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, FlatList, TouchableOpacity, ScrollView, Image} from "react-native";
import {COLORS} from "../../style/colors";
import {CustomText} from "../../components/CustomText";
import {Back} from "../../Icons/Back";
import {Btn} from "../../components/Btn";
import {ProductCard} from "../../components/ProductCard";

export const OrderDetails = ({orderCount, trackingNumber, orderNo, date, status,navigation}) => {
    const orderInfo = [
        {
            infoTitle: "Shipping Address:",
            infoText: `3 Newbridge Court ,Chine Hills,CA 91928,United States`
        },
        {
            infoTitle: " Payment method:",
            infoText: `**** **** **** 9876`,
        },
        {
            infoTitle: "Delivery method:",
            infoText: `FedEx, 3 days,15$`
        },
        {
            infoTitle: "Discount:",
            infoText: `10%,Personal promo code`
        },
        {
            infoTitle: "Total Amount:",
            infoText: `133$`
        },

    ];

    return (
        <View style={styles.container}>
            <StatusBar/>
            <View style={[styles.header, {justifyContent: "flex-start",marginBottom:40}]}>
                <TouchableOpacity style={styles.backIcon} onPress={()=>navigation.goBack()}>
                    <Back/>
                </TouchableOpacity>
                <CustomText weight={'bold'} style={styles.title}>
                    Order Details
                </CustomText>
            </View>
            <ScrollView>
                <View style={styles.header}>
                    <CustomText weight={"medium"} style={styles.orderNo}>
                        Order №1947034
                    </CustomText>
                    <CustomText style={styles.date}>
                        05-12-2020
                    </CustomText>
                </View>
                <View style={[styles.header, {justifyContent: "flex-start"}]}>
                    <CustomText style={styles.date}>
                        Tracking number:
                    </CustomText>
                    <CustomText weight={"medium"} style={styles.orderNo}>
                        IW3475453455
                    </CustomText>
                </View>

                <View style={styles.header}>
                    <CustomText weight={"medium"} style={styles.orderNo}>
                        3 items
                    </CustomText>
                    <CustomText style={styles.status}>
                        Delivered
                    </CustomText>
                </View>
                <View style={styles.cards}>
                    <FlatList
                        data={["a", "b", "c"]}
                        renderItem={({item}) => (
                            <View style={styles.card}>
                                <ProductCard/>
                            </View>

                        )}
                        keyExtractor={item => item}
                    />


                </View>
                <CustomText weight={"medium"} style={styles.orderInfoTitle}>
                    Order Information
                </CustomText>
                {
                    orderInfo.map((item)=>(
                        <View style={[styles.header, {justifyContent: "flex-start"}]} key={item.infoText}>
                           <View style={{width:152}}>
                               <CustomText style={styles.date}>
                                   {item.infoTitle}
                               </CustomText>
                           </View>
                            <CustomText weight={"medium"} style={styles.orderNo}>
                                {item.infoText}
                            </CustomText>
                        </View>
                    ))
                }


                <View style={styles.btn}>
                    <Btn width={160}
                         height={40}
                         borderColor={COLORS.TEXT}
                         borderWidth={1}
                         btnName={"Reorder"}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: 360,
        backgroundColor: COLORS.BACKGROUND,
        padding: 10,

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,

    },
    title: {
        color: COLORS.TEXT,
        fontSize: 30,
        lineHeight: 28,
        margin: 10,
        marginLeft: 40,

    },
    backIcon: {
        marginTop: 10,
        marginLeft: 10,
    },

    date: {
        paddingRight: 10,
        color: COLORS.GRAY,
        marginLeft: 18,
    },
    orderNo: {
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 18,
    },
    status: {
        color: COLORS.SUCCESS,
        lineHeight: 25,
        marginRight: 15
    },
    card: {
        marginTop: 20,
        marginBottom: 10,
    },
    cards: {
        width: '100%',
        display: "flex",
        alignItems: "center",

    },
    orderInfoTitle: {
        fontSize: 19,
        lineHeight: 20,
        marginLeft: 18,
        marginTop: 18,
        marginBottom:20
    },
    btn: {
        width: 360,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20,
    },


});