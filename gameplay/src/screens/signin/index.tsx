import React, { useContext } from "react";
import { View, Text, Image, ActivityIndicator, Alert } from "react-native";
import { styles } from './style';
import IllutrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/buttonIcon";
import { Background } from "../../components/background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";


export function SignIn(){ 

  const {loading, signIn} = useAuth();

  async function handleSignIn(){
      try {
        await signIn();
      } catch (error: any) {
        Alert.alert(error.message);
      }
  }


  return(
    <Background>

      <View style={styles.container}>
      
        <Image source={IllutrationImg} style={styles.image}/>

        <View style={styles.content}>
            <Text style={styles.title}>
              Conecte-se {`\n`}
              e organize suas {`\n`}
              jogatinas
            </Text>

            <Text style={styles.subtitle}>
              Crie grupos para jogar seus games {`\n`}
              favoritos com seus amigos
            </Text>
            { 
              loading ? <ActivityIndicator color={theme.colors.primary} /> :
              <ButtonIcon title="Entrar com Discord" onPress={handleSignIn}/>
            }
          </View> 

      </View>
    </Background>


  )
}