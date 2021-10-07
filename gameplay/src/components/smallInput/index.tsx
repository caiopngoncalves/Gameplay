import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Avatar } from '../avatar';
import { styles } from './style';

export function SmallInput({...rest}: TextInputProps){
    return(
        <TextInput style={styles.container} keyboardType="numeric" {...rest}>
            
        </TextInput>
    )
}