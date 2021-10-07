import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonAdd } from '../../components/buttonAdd';
import { CategorySelector } from '../../components/categorySelector';
import { Profile } from '../../components/profile';
import { styles } from './style';
import { ListHeader } from '../../components/listHeader';
import { FlatList } from 'react-native-gesture-handler';
import { Appointment } from '../../components/appointment';
import { ListDivider } from '../../components/listDivider';
import { Background } from '../../components/background';
import { useNavigation } from '@react-navigation/native';


export function Home(){
    const [category, setCategory] = useState('')
    const navigation = useNavigation();
    const appointments = [ 
        {
            id: '1', 
            guild: { id: '1', name: 'Lendários', icon: null, owner: true}, 
            category: '1', 
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
        },
        {
            id: '2', 
            guild: { id: '1', name: 'Lendários', icon: null, owner: true}, 
            category: '1', 
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
        }
    ]
    function handleCatergorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails')
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }
    return(
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile/>
                    <ButtonAdd onPress={handleAppointmentCreate}/>
                </View>
                    <View>
                        <CategorySelector
                            categorySelected={category}
                            setCategory={setCategory}
                        />

                        <ListHeader title="Partidas agendadas" subtitle="Total 6"/>
                        <FlatList 
                            data={appointments} 
                            keyExtractor={ item => item.id} 
                            renderItem={({ item }) => (<Appointment data={item} onPress={handleAppointmentDetails}/> )} 
                            ItemSeparatorComponent={() => <ListDivider/>}
                            contentContainerStyle={{paddingBottom: 69}} 
                            style={styles.matches} 
                            showsVerticalScrollIndicator={false}
                        />
                </View>

            </View>
        </Background>
    );
}