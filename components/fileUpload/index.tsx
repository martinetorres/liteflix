import { Box, FormControl, Heading, Input, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import styles from './styles.module.css';

export default function FileUpload(
    {onFileUpload} : 
    {onFileUpload: Dispatch<SetStateAction<string>>}) {
    
    const [uploadedFile, setUploadedFile] = useState('');
    const [progress, setProgress] = useState(0);
    
    const [isDesktop] = useMediaQuery('(min-width: 1280px)');

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target?.files?.length && e.target.files[0];var filereader = new FileReader();
        if (file) {
            filereader.readAsDataURL(file);
            filereader.onprogress = function(e) {
                let progressPercentage: number = ((e.loaded / e.total) * 100);
                setProgress(progressPercentage)
            }
            filereader.onload = function (e) {
                var base64 = e?.target?.result;
                if (base64) {
                    setUploadedFile(base64 as string);
                    onFileUpload(base64 as string);
                    return base64
                }
            }
        }
    }

    return (
        <FormControl>
            { progress === 0 ?
                (<Box className={styles.fileUploadContainer}>
                    <Input
                        type='file'
                        height='100%'
                        width='100%'
                        position='absolute'
                        top='0'
                        left='0'
                        accept='*'
                        onChange={handleFileSelected}
                        aria-hidden='true'
                        opacity='0'
                    />

                    <span className={styles.fileUploadIcon}>
                        <Image src='/img/icons/file.png' width={16} height={16} alt="File upload icon" />
                    </span>
                    
                    {
                        isDesktop ?
                        <span>Agregá un archivo o arrastralo y soltalo aquí</span>
                        :
                        <span>Agregá un archivo</span>
                    }
                </Box>)
                :
                <Box className={styles.fileUploadProgressContainer} color='white' fontSize={18} letterSpacing={4}>
                    Cargando: { `${Math.round(progress * 100) / 100}%` }
                    <Box w='100%' h='4px' bg='#fff' position='relative' marginTop={4}>
                        <Box w={`${progress}%`} h='10px' position='absolute' bg='#64EEBC' top='-3px' transition='width 500ms linear' />
                    </Box>

                    <Box textAlign='right' marginTop={4}>
                        {
                            progress < 100 ?
                            <Text>Cancelar</Text> :
                            <Text color='#64EEBC'>¡Listo!</Text>
                        }
                    </Box>
                </Box>
            }
        </FormControl>
    )
}