import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from '../../components/background';
import { Header } from "../../components/header";
import { Fontisto } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { styles } from "./style";
import { ListHeader } from "../../components/listHeader";
import { Member, MemberProps } from '../../components/member';
import { ListDivider } from "../../components/listDivider";
import { ButtonIcon } from "../../components/buttonIcon";

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Caio',
            avatar_url: 'https://github.com/caiopngoncalves.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/caiopngoncalves.png',
            status: 'offline'
        }
    ]
    return(
        <Background>
            <Header title="Detalhes" action={
            <BorderlessButton>
                <Fontisto name="share" size={24} color={theme.colors.primary}>

                </Fontisto>
            </BorderlessButton>}/>
            
            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3"/>
            <FlatList 
                data={members} 
                keyExtractor={item => item.id} 
                renderItem={({ item }) =>(<Member data={item}/>)} 
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.members}
                />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida"/>
            </View>
        </Background>
    );
}