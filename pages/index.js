import React from 'react';
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
    return (
        <Layout>
            <NextSeo title="Home page" />
            <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-maincontent ">
                <motion.div variants={fade}>
                    <Banner />
                    <HomeWork />
                    <HomeServices />
                    <Tech />
                    <StartProject />
                </motion.div>
            </motion.div>
        </Layout>
    );
}
