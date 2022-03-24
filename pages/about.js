import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../helpers/transitions';
import Layout from '../components/Layout';
import Tech from '../components/Tech/';
import StartProject from '../components/StartProject';
import SectionHeader from '../components/SectionHeader';

export default function about() {
    return (
        <Layout>
            <NextSeo title="About" />
            <div className="l-grid-maincontent">
                <SectionHeader scrollText="About" title="Good design makes life better." />
                <Tech />
                <StartProject />
            </div>
        </Layout>
    );
}
