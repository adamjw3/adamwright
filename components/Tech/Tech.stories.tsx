import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tech from '.';

export default {
    title: 'Tech we use',
    component: Tech,
} as Meta;

const Template: Story = () => <Tech />;

export const WithControls = Template.bind({});
