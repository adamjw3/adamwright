import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Footer from '.';

export default {
    title: 'Footer',
    component: Footer,
} as Meta;

const Template: Story = () => <Footer />;

export const WithControls = Template.bind({});
