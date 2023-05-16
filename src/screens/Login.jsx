import React, { useState } from 'react'
import { View, Stylesheet } from 'react-native'
import {
    Appbar, Button, TextInput, useTheme,
    Card, HelperText
}
    from 'react-native-paper'

export default function Login() {
    const { colors } = useTheme()
    const [email, setEmail] = useState('')
    const [erroEmail, setErroEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erroSenha, setErroSenha] = useState('')
    const [mostraSenha, setMostraSenha] = useState(false)

    const validaEmail = (email) => {
        if (!email) {
            setErroEmail('O e-mail é obrigatório')
        } else if (!/\S+@\S+\.\S+/.test(email)){
            setErroEmail('O e-mail informado é inválido')
        } else{
            setErroEmail('')
        }
    }

    const validaSenha = (senha) => {
        if(!senha){setErroSenha('A senha é obrigatória')}
        else if (senha.length < 6){
            setErroSenha('A senha deve ter no mínimo 6 caracteres')
        } else {setErroSenha('')}
    }

    return (
        <>
            <Appbar.Header style={{
                backgroundColor:
                    colors.primary
            }}>
                <Appbar.Content title="Fatec Cripto"
                    titleStyle={{ color: colors.onPrimary }} />
            </Appbar.Header>
            <View style={{
                backgroundColor:
                    colors.primaryContainer,
                flex: 1, alignItems: 'center'
            }}>
                <Card mode="elevated" style={{ margin: 4 }}>
                    <Card.Title title="Área Reservada"
                        titleStyle={{
                            fontSize: 24, color: colors.primary,
                            marginVertical: 8
                        }} />
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }}
                        resizeMode='cover' style={{ margin: 8 }} />
                    <Card.Content>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text)
                                validaEmail(text)
                            }
                            }
                            error={erroEmail !== ''}
                            mode="flat"
                            style={[erroEmail ?
                                { backgroundColor: colors.errorContainer } : null]} />
                        <HelperText type="error" visible={erroEmail !== ''}>
                            {erroEmail}
                        </HelperText>
                        <TextInput
                            label="Senha"
                            value={senha}
                            onChangeText={(text) => {
                                setSenha(text)
                                validaSenha(text)
                            }
                            }
                            error={erroSenha !== ''}
                            mode="flat"
                            style={[erroSenha ?
                                { backgroundColor: colors.errorContainer } : null]} 
                            secureTextEntry={mostraSenha ? false : true}
                            right={
                                <TextInput.Icon icon={mostraSenha ? 'eye-off' : 'eye'}
                                onPress={()=> {mostraSenha 
                                               ? setMostraSenha(false)
                                               : setMostraSenha(true)}
                                            }
                                />
                            }
                           />
                        <HelperText type="error" visible={erroSenha !== ''}>
                            {erroSenha}
                        </HelperText>
                        <Button 
                            loading={false}
                            icon="login"
                            mode="contained"
                            textColor={colors.onPrimary}
                            disabled={email==='' ||
                                      senha==='' ||
                                      erroEmail !=='' ||
                                      erroSenha !==''}>Login</Button>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="text">Nova Conta</Button>
                        <Button mode="outlined">Esqueceu a senha?</Button>
                    </Card.Actions>
                </Card>

            </View>
        </>
    )
}