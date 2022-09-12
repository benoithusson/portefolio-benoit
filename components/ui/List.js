import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function List(props) {

    const ref_skill_item = useRef();
    const ref_text_item = useRef();

    useEffect(() => {
        const el_text_item = ref_text_item.current
        const el_skill_item = ref_skill_item.current

        // el_text_item.addEventListener("mouseleave", (e) => {
        //     gsap
        //         .to(el_item, {
        //             // borderTop: '1px solid white',
        //             // borderBottom: '1px solid white',
        //             duration: 0.3,
        //             ease: 'Power2.easeIn'
        //         })
        // })

        gsap.timeline({
            scrollTrigger: {
                trigger: el_skill_item,
                start: 'top',
                end: '+=400',
                markers: true
            }
        })
            .from(el_text_item, { opacity: 0 })

    }, [])



    return (
        <>
            <div className={props.listItemContainer}>
                <div className={props.imageItem}>
                    <Image
                        src={props.pathImage}
                        width={props.widthImage}
                        height={props.heightImage}
                        alt={props.altImage}
                    />
                </div>
                <div className={props.nameItem} ref={ref_text_item}>
                    <p>{props.item}</p>
                </div>
            </div>
        </>
    )
}
