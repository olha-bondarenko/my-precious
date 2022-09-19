import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'

const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions}) => {
  return (
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.lightGrey}
        onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
            </View>
        </TouchableHighlight>
   </Swipeable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '700',
        marginBottom: 5
    },
    subTitle: {
        color: colors.grey
    }
})
export default ListItem