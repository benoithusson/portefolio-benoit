import React, { useRef, useEffect } from 'react'
import styles from './PhotoshopPortefolio.module.scss'
import Image from 'next/image'
import photoshopPortefolio from '../../../data/ps-portefolio'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PhotoshopPortefolio() {

    const imageRef = useRef([]);
    imageRef.current = [];

    useEffect(() => {
        imageRef.current.forEach(el => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                    end: 'center 90%',
                }
            })
            tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 })
        })

    }, []);

    const addToRefs = (el) => {
        if (el && !imageRef.current.includes(el)) {
            imageRef.current.push(el);
        }
    }

    return (
        <div className={styles.containerPhotoshopPortefolio}>
            {photoshopPortefolio.map(el => {
                return (
                    <div className={styles.containerPhotoshopImage} key={el.imagePath} ref={addToRefs}>
                        <Image
                            src={`/images-ps-portefolio${el.imagePath}`}
                            width={el.width} height={el.height}
                        />
                        <div className={styles.containerFigcaption}>
                            <figcaption>{el.figcaption}</figcaption>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}