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
            <div className="l-grid-maincontent">
                <SectionHeader scrollText="WORK" title="I Help brilliant brands and organisations be more effective online." />
                <Work />
                <Tech />
                <StartProject />
            </div>
        </Layout>
    );
}
