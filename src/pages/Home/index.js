import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, Text, TouchableOpacity, Button, Alert, TouchableHighlight } from 'react-native'

import LogoImg from '../../assets/logo2.png'
import Styles from './styles'

export default function Incidents () {
  return (

    <View style={Styles.container}>

      <View style={Styles.header}>
        <Image source={LogoImg} />

      </View>

      <TouchableHighlight
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={Styles.button}>
        Piloto
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={Styles.button}>
        Visualizar dados
        </Text>
      </TouchableHighlight>

    </View>

  )
}
