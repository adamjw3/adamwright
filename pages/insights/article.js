import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../../helpers/transitions';
import Layout from '../../components/Layout';
import Tech from '../../components/Tech/';
import StartProject from '../../components/StartProject';
import SectionHeader from '../../components/SectionHeader';
import Article from '../../components/Article';

export default function article() {
    return (
        <Layout>
            <NextSeo title="Web Design" />
            <div className="l-grid-maincontent">
                <SectionHeader scrollText="Web Design" title="A digital marketing agency with the following expertise. " />
                <Article />
                <Tech />
                <StartProject />
            </div>
        </Layout>
    );
}
