import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade, wipe } from '../helpers/transitions';
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
            <div className="l-grid-full-bleed">
                <Banner />
                <div className="l-grid">
                    <div className="l-grid-maincontent">
                        <HomeWork />
                        <HomeServices />
                        <Tech />
                        <StartProject />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
