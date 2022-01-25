import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import StartProject from '.';

export default {
    title: 'Start Project',
    component: StartProject,
} as Meta;

const Template: Story = () => <StartProject />;

export const WithControls = Template.bind({});
