import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SectionHeader from '.';

export default {
    title: 'Section Header',
    component: SectionHeader,
} as Meta;

const Template: Story = () => <SectionHeader title="Helping brilliant brands and organisations be more effective online." scrollText="Work" />;

export const WithControls = Template.bind({});
