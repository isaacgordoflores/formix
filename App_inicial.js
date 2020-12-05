import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import * as Yup from 'yup';

/* Sin YUP
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email requerido'
  } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[]{A-Z}{2,4}$/i.test(values.email)) {
    errors.email = 'Correo inválido'
  }
  return errors
}
*/


export default function App() {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo inválido').required('Dato requerido'),
    }),
    /* Sin YUP
    validate,
    */
    onSubmit: x => console.warn(x)
  })

  return (
    <View style={styles.container}>
      <Text>FORMIX FORM</Text>
      <Text>Correo Electrónico</Text>
      <TextInput
        onBlur = { formik.handleBlur('email') }
        style = { styles.input }
        onChangeText = { formik.handleChange('email') }
        value = { formik.values.email }
      />
      { formik.errors.email && formik.touched.email ? <Text>{ formik.errors.email }</Text> : null }
      <Button title = 'Enviar' onPress = { formik.handleSubmit } />
      <StatusBar style="auto" />
    </View>
  );
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
