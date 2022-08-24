import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function List(props) {

    const ref_item = useRef();

    useEffect(() => {
        const el_item = ref_item.current

        el_item.addEventListener("mouseenter", (e) => {
            gsap.to(el_item,
                {
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                    duration: 0.3,
                    ease: 'Power2.easeIn'
                })
        })

        el_item.addEventListener("mouseleave", (e) => {
            gsap
                .to(el_item, {
                    borderTop: '1px solid white',
                    borderBottom: '1px solid white',
                    duration: 0.3,
                    ease: 'Power2.easeIn'
                })
        })

    }, [])

    return (
        <>
            <div className={props.listItemContainer} ref={ref_item}>
                <Image
                    src={props.pathImage}
                    width={props.widthImage}
                    height={props.heightImage}
                    alt={props.altImage}
                />
                <div className={props.listItemName}>
                    <p>{props.item}</p>
                </div>
            </div>
        </>
    )
}
