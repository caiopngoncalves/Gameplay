import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { Category } from '../category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelector({ categorySelected, setCategory, hasCheckBox = false }: Props){
    return(
        <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator = {false} contentContainerStyle={{paddingRight: 40}}> 
        {
        categories.map(category => (
        <Category 
            key={category.id} 
            title={category.title} 
            icon={category.icon} 
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckBox = {hasCheckBox}
        />
        ))
        }
        </ScrollView>
    );
}