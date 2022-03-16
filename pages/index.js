import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../helpers/transitions';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import HomeWork from '../components/HomeWork/HomeWork';
import HomeServices from '../components/HomeServices';
import Tech from '../components/Tech/Tech';
import StartProject from '../components/StartProject/StartProject';

export default function Home() {
    const containerRef = useRef(null);
    return (
        <LocomotiveScrollProvider optiona={{ smooth: true, lerp: 0.5 }} containerRef={containerRef} watch={[]}>
            <div data-scroll-container ref={containerRef} id="scroll-container">
                <div data-scroll-section>
                    <Layout>
                        <NextSeo title="Home page" />

                        <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-full-bleed">
                            <motion.div variants={fade}>
                                <Banner />
                            </motion.div>
                        </motion.div>
                        <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-maincontent">
                            <motion.div variants={fade}>
                                <HomeWork />
                                <HomeServices />
                                <Tech />
                                <StartProject />
                            </motion.div>
                        </motion.div>
                    </Layout>
                </div>
            </div>
        </LocomotiveScrollProvider>
    );
}
