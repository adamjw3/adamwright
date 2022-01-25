import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../helpers/transitions';
import Layout from '../components/Layout';
import Tech from '../components/Tech/';
import StartProject from '../components/StartProject';
import SectionHeader from '../components/SectionHeader';
import Work from '../components/Work';

export default function work() {
    return (
        <Layout>
            <NextSeo title="About page" />
            <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-maincontent">
                <motion.div variants={fade}>
                    <SectionHeader scrollText="Insights" title="Helping brilliant brands and organisations be more effective online." />
                    <Work />
                    <Tech />
                    <StartProject />
                </motion.div>
            </motion.div>
        </Layout>
    );
}
