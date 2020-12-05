import React from 'react';
import { Formik, useFormikContext } from 'formik';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import * as Yup from 'yup';

const EmailForm = () => {
    const { handleChange, submitForm, values } = useFormikContext();

    return (
        <>
        <Text>Correo electrónico</Text>
        <TextInput
            style= { styles.input }
            onChangeText = { handleChange('email') }
            value = { values.email }
        />
        <Button onPress = { submitForm } title = "Enviar" />
        </>
    )
}

export default function App() {

    return (
        <View style = { styles.container }>
            <Formik validationSchema = { Yup.object({
                email: Yup.string()
                    .email('Correo inválido')
                    .required('Dato requerido')
            })}
            initialValues= {{ email: '' }}>
            <EmailForm />
        </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      height: 30,
      width: 150,
      backgroundColor: '#eee',
    }
  });
  