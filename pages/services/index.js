import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Tech from '../../components/Tech/';
import StartProject from '../../components/StartProject';
import SectionHeader from '../../components/SectionHeader';
import Services from '../../components/Services';

export default function work() {
    return (
        <Layout>
            <NextSeo title="Services" />
            <div className="l-grid-maincontent">
                <SectionHeader scrollText="SERVICES" title="A digital marketing agency with the following expertise. " />
                <Services />
                <Tech />
                <StartProject />
            </div>
        </Layout>
    );
}
