import { Box, FormControl, Input } from "@chakra-ui/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import styles from './styles.module.css';

export default function FileUpload(
    {onFileUpload} : 
    {onFileUpload: Dispatch<SetStateAction<string>>}) {
    
    const [uploadedFile, setUploadedFile] = useState('');

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fileName : string = e.target?.files?.length ? e.target.files[0].name : '';
        
        const file : any = e.target?.files?.length ? e.target.files : '';
        setUploadedFile(fileName);
        onFileUpload(fileName);
    }

    return (
        <FormControl>
            <Box className={styles.fileUploadContainer}>
                <Input
                    type='file'
                    height='100%'
                    width='100%'
                    position='absolute'
                    top='0'
                    left='0'
                    accept='image/*'
                    onChange={handleFileSelected}
                    aria-hidden='true'
                    opacity='0'
                />

                <span className={styles.fileUploadIcon}>
                    <Image src='/img/icons/file.png' width={16} height={16} alt="File upload icon" />
                </span>

                {
                    uploadedFile === '' ?
                        <span>Agregá un archivo o arrastralo y soltalo aquí</span>
                    :
                        <span>{ uploadedFile }</span>
                }
            </Box>
        </FormControl>
    )
}