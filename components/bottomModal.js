import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from "../style/colors";

import {CustomText} from "../components/CustomText";

export const BottomModal = ({name,children}) => {

    return (
        <View style={styles.container}>
            <View style={styles.line}/>
            <CustomText weight={'bold'} style={styles.title}>{name} </CustomText>
            {children}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND,
        width: '100%',
        height: 400,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 34,
        borderTopLeftRadius: 34,
        position:"absolute",
        bottom:0

    },
    line: {
        width: 70,
        height: 6,
        backgroundColor:COLORS.TEXT,
        marginBottom:20,
        borderRadius: 10,
    },
    title: {
        color: COLORS.TEXT,
        fontSize: 18,
        lineHeight: 22,
        marginBottom:10
    },
});