import React from 'react';
import { Formik, useFormikContext, useField } from 'formik';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import * as Yup from 'yup';

const MyInput = ({ fieldName, ...props }) => {

    const [field, metadata] = useField(fieldName)

    return (
        <>
        <
        TextInput style = {
            styles.input
        }
        onChangeText = {
            field.onChange('email')
        }
        onBlur = {
            field.onBlur(fieldName)
        }
        value = {
            field.value
        }
        { ...props }
        />
        { metadata.error && metadata.touched && (
            <Text style ={{ color: 'red' }}>{ metadata.error }</Text>
        )}
        </>
    )
}

const EmailForm = () => {
    const { handleChange, submitForm, values } = useFormikContext();

    return (
        <>
        <Text>Correo electrónico</Text>
        <MyInput fieldName = "email" />
        <MyInput fieldName = "name" />
        <Button onPress = { submitForm } title = "Enviar" />
        </>
    )
}

export default function App() {

    return (
        <View style = { styles.container }>
            <Formik
                onSubmit = { x => console.log(x) }
                validationSchema = { Yup.object({
                    email: Yup.string()
                        .email('Correo inválido')
                        .required('Dato requerido'),
                    name: Yup.string()
                        .min(10)
                        .required('Dato requerido')
            })}
            initialValues= {{ email: '', name: '' }}>
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
      border: '1px solid black',
    }
  });
  