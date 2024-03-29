import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../../helpers/transitions';
import Layout from '../../components/Layout';
import Tech from '../../components/Tech/';
import StartProject from '../../components/StartProject';
import SectionHeader from '../../components/SectionHeader';
import Insights from '../../components/Insights';

export default function insights() {
    return (
        <Layout>
            <NextSeo title="Services" />
            <div className="l-grid-maincontent">
                <SectionHeader scrollText="Insights" title="Read all about it! Views and digital insights" />
                <Insights />
                <Tech />
                <StartProject />
            </div>
        </Layout>
    );
}
