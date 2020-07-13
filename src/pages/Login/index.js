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
        label='user'
        placeholder='Usuário'
      />
      <TextInput
        style={Styles.input}
        label='password'
        placeholder='Senha'
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
