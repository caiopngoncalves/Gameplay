import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Avatar } from '../avatar';
import { styles } from './style';

export function TextArea({...rest}: TextInputProps){
    return(
        <TextInput style={styles.container} {...rest}>
            
        </TextInput>
    )
}