import React from "react";
import { styles } from "./style";
import { View, FlatList } from "react-native";
import { Guild } from "../../components/guild";
import { ListDivider } from "../../components/listDivider";
import { GuildProps } from "../../components/guild";

type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect} : Props){
    const guilds =[{
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'Galera do game',
        icon: 'image.png',
        owner: true
    }
    ]
    return(
        <View style={styles.container}>
            <FlatList 
            data={guilds} 
            keyExtractor={item => item.id} 
            renderItem={({ item}) => <Guild data={item} onPress={() => handleGuildSelect(item)}/>} 
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            style={styles.guilds}/>
        </View>
    );
}