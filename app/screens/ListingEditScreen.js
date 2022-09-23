import React from 'react'
import * as Yup from 'yup'

import {
    AppForm, AppFormField, AppFormPicker, SubmitButton, FormImagePicker
} from '../components/forms'
import Screen from '../components/Screen'
import CategoryPickerItem from '../components/CategoryPickerItem'

import colors from '../config/colors'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please add at least 1 image')
})

const categories = [
    { key: 'rings', value: 'Rings', backgroundColor: colors.primary, icon: 'ring'},
    { key: 'earrings', value: 'Earrings', backgroundColor: colors.primary, icon: 'ear-hearing' },
    { key: 'necklaces', value: 'Necklaces', backgroundColor: colors.primary, icon: 'necklace'},
    { key: 'bracelets', value: 'Bracelets', backgroundColor: colors.primary, icon: 'hand-clap' }
]

const ListingEditScreen = () => {
    const location = useLocation();
  return (
    <Screen style={{marginHorizontal: 5}}>
        <AppForm
        initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}>
            <FormImagePicker 
                name='images'
                />
            <AppFormField 
                maxLength={255} 
                name='title' 
                placeholder='Title'/>
            <AppFormField 
                keyboerdType='numeric' 
                maxLength={8} 
                name='price' 
                placeholder='Price' 
                width={120}/>
            <AppFormPicker 
                items={categories} 
                name='category'
                PickerItemComponent={CategoryPickerItem}
                placeholder='Category'
                width='50%'
                numberOfColumns={3}/>
            <AppFormField 
                maxLength={255} 
                multiline 
                name='description' 
                numberOfLines={3} 
                placeholder='Description'/>
            <SubmitButton title='Post'/>
        </AppForm>
    </Screen>
  )
}

export default ListingEditScreen