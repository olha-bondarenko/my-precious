import React from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import defaultStyles from '../../config/styles'

const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions}) => {
  return (
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={defaultStyles.colors.lightGrey}
        onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>}
                    </View>
                    <MaterialCommunityIcons color={defaultStyles.colors.grey} name='chevron-right' size={25} />
            </View>
        </TouchableHighlight>
   </Swipeable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: defaultStyles.colors.white,
        alignItems: 'center'
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
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
        color: defaultStyles.colors.grey
    }
})
export default ListItem