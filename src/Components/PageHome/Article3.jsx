import React, { useRef } from 'react'
import cenima from '../../Assets/article3/cenima.jpg'
import cen from '../../Assets/article3/cen.jpg'
import '../../Style/page1/article3/article3.css'
import { motion, useTransform, useScroll } from 'framer-motion'




function Article3() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })
    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const xl_l = useTransform(scrollYProgress, [0, 1], [900, 0]);
    const opacity  = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const xll = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [-1500, 0]);




  return (
    <div ref={container} className="container_Article3">
        <div className="content3">
            <div className="side_images">
                <motion.img style={{ x : xll, transition : '.8s' }} className='im2' src={cen} />
                <motion.img style={{ x : xlll, transition : '.8s' }} className='im1' src={cenima} />
            </div>
            <div className="side_description">
                <motion.h2 style={{ opacity : opacity, y : xl, transition : '1s' }}>Salle de cinéma privé</motion.h2>
                <motion.p style={{ opacity : opacity, y : xl_l , transition : '1s'}}>
                    AV PLUS est une entreprise leader spécialisée
                    dans les solutions audio/vidéo, la domotique
                    et la conception de salles de cinéma privées.
                    Nous offrons des services personnalisés,
                    AV PLUS est une entreprise leader spécialisée
                    dans les solutions audio/vidéo, la domotique
                    et la conception de salles de cinéma privées.
                    Nous offrons des services personnalisés,AV PLUS est une entreprise leader spécialisée
                    dans les solutions audio/vidéo, la domotique
                    et la conception de salles de cinéma privées.
                    Nous offrons des services personnalisés,
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default Article3
