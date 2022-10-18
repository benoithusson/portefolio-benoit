import React, { useRef } from 'react'
import styles from './PhotoshopPortefolio.module.scss'
import Image from 'next/image'

export default function PhotoshopPortefolio() {

    const popupRef = useRef();

    // Quand je clique sur une image
    // La popup apparait
    const handleDisplayPopup = (e) => {
        let el_popup = popupRef.current;
        if (e) {
            let img = e.target;
            let imgSrc = img.src;
            el_popup.classList.add(styles['displayPopup']);
            handleDisplayImage(imgSrc);
        }
    }

    const handleDisplayImage = (src) => {
        console.log(src);
        return (
            <>
                <h1>YOLO</h1>
            </>
        )
    }

    const handleClosePopup = () => {
        let el_popup = popupRef.current;
        el_popup.classList.remove(styles['displayPopup'])
    }

    return (
        <div className={styles.containerPhotoshopPortefolio}>
            <div className={styles.containerPhotoshopImage}>
                <Image src="/images-ps-portefolio/charlie-bonaparte.jpg" width={1004} height={1200} onMouseEnter={(e) => handleDisplayPopup(e)} />
                <figcaption>Figcaption</figcaption>
            </div>
            <div className={styles.containerPhotoshopImage}>
                <Image src="/images-ps-portefolio/daredevil.jpg" width={1028} height={720} />
                <figcaption>Figcaption</figcaption>
            </div>
            <div className={styles.containerPhotoshopImage}>
                <Image src="/images-ps-portefolio/jeremy-joker.jpg" width={904} height={1299} />
                <figcaption>Figcaption</figcaption>
            </div>
            <div className={styles.containerPhotoshopImage}>
                <Image src="/images-ps-portefolio/wolf-patronus.jpg" width={1000} height={667} />
                <figcaption>Figcaption</figcaption>
            </div>
            <div className={styles.containerPhotoshopImage}>
                <Image src="/images-ps-portefolio/wolverine-renaud.jpg" width={700} height={1244} />
                <figcaption>Figcaption</figcaption>
            </div>
            <div className={styles.popupImage} ref={popupRef}>
                <div className={styles.containerCloseBtn} onClick={handleClosePopup}>
                    <button className={styles.closeBtn}>X</button>
                    <div className={styles.containerPhotoshopImage}>
                        {handleDisplayImage}
                    </div>
                </div>
            </div>
        </div>
    )
}
