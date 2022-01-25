import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Banner from '.';

export default {
    title: 'Banner',
    component: Banner,
} as Meta;

const Template: Story = () => <Banner />;

export const WithControls = Template.bind({});
