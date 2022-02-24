import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Flickity from 'react-flickity-component';

import TickerSlider from '.';

export default {
    title: 'Ticker Slider',
    component: TickerSlider,
} as Meta;

const Template: Story = () => {
    return (
        <TickerSlider className="c-tech__items">
            <span className="c-tech__item">
                <img src="/images/shopify.png" alt="shopify" />
            </span>
            <span className="c-tech__item">
                <img src="/images/google.png" alt="google" />
            </span>
            <span className="c-tech__item">
                <img src="/images/contentful.png" alt="contentful" />
            </span>
            <span className="c-tech__item">
                <img src="/images/react.png" alt="react" />
            </span>
            <span className="c-tech__item">
                <img src="/images/nextjs.png" alt="next js" />
            </span>
        </TickerSlider>
    );
};

export const WithControls = Template.bind({});
