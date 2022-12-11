import Image from "next/image";
import styles from './styles.module.css';

export default function FileUpload() {
    return (
        <div className={styles.fileUploadContainer}>
            <span className={styles.fileUploadIcon}>
                <Image src='/img/icons/file.png' width={16} height={16} alt="File upload icon" />
            </span>
            Agregá un archivo o arrastralo y soltalo aquí
        </div>
    )
}