import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Tech from '../../components/Tech/';
import StartProject from '../../components/StartProject';
import SectionHeader from '../../components/SectionHeader';
import Service from '../../components/Service';

export default function webdesign() {
    return (
        <Layout>
            <NextSeo title="Web Design" />
            <div className="l-grid-maincontent">
                <SectionHeader scrollText="Web Design" title="A digital marketing agency with the following expertise. " />
                <Service />
                <Tech />
                <StartProject />
            </div>
        </Layout>
    );
}
