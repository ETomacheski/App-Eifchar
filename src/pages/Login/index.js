import React, { useEffect, useState } from 'react'
import { View, Image, TextInput, Text, Alert, TouchableHighlight } from 'react-native'

import LogoImg from '../../assets/logo2.png'
import Styles from './styles'

export default function Incidents () {
  return (

    <View style={Styles.container}>

      <View style={Styles.header}>
        <Image source={LogoImg} />

      </View>

      <TextInput
        style={Styles.input}
        label='Email'
        placeholder='Digite seu Email'
      />
      <TextInput
        style={Styles.input}
        label='Senha'
        placeholder='Digite sua senha'
        secureTextEntry
      />
      <TouchableHighlight>
        <Text style={Styles.button}>
        Entrar
        </Text>
      </TouchableHighlight>

    </View>

  )
}
