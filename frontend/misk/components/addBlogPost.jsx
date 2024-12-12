/*import { useState } from "react";  


const AddBlogForm = () => {
    const [ formData, setFormData] = useState({}) //stato del form
    const [ file, setFile] = useState(null) //stato del file

    const onChangeFile = (e) => {
        setFile(e.target.files[0])
    } //handler attaccato solo al input img che é di tipo file

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    } //attaccato al resto del form, gli altri input

    const uploadFile = async (fileToUpload) =>{
        const fileData = new formData() //istanziamo il nostro form data
        fileData.append('img', fileToUpload) //appendiamo il nostro file img

        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/blog/uploads`, {
                method: 'Post',
                body: fileData
            })
            return await response.json()
        } catch (error) {
            console.log(e.message)
        }
    } //funzione di upload

    //handler per inviare il form
    const submitBook = async(e) => {
        e.eventDefault()

        if(file){
            try {
                const uploadFile =  await uploadFile(file)
            } catch(e) {

            }

        } else
    }

    return(
        <form encType='multipart/form-data'>
            <input
                className='formcontrol'
                name='asin'
                type='text'
                placeholder='insert asin'
            />
            <ecc
    )
} */