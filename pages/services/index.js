import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../../helpers/transitions';
import Layout from '../../components/Layout';
import Tech from '../../components/Tech/';
import StartProject from '../../components/StartProject';
import SectionHeader from '../../components/SectionHeader';
import Services from '../../components/Services';

export default function work() {
    return (
        <Layout>
            <NextSeo title="Services" />
            <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-maincontent">
                <motion.div variants={fade}>
                    <SectionHeader scrollText="SERVICES" title="A digital marketing agency with the following expertise. " />
                    <Services />
                    <Tech />
                    <StartProject />
                </motion.div>
            </motion.div>
        </Layout>
    );
}
