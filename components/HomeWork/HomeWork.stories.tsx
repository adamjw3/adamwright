import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import HomeWork from '.';

export default {
    title: 'Home Work Section',
    component: HomeWork,
} as Meta;

const Template: Story = () => <HomeWork />;

export const WithControls = Template.bind({});
