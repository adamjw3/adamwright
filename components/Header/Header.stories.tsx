import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header from '.';

export default {
    title: 'Navigation',
    component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const WithControls = Template.bind({});
