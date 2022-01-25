import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FancyLink from '.';

export default {
    title: 'Link',
    component: FancyLink,
} as Meta;

const Template: Story = () => (
    <FancyLink destination="/" a11yText="text">
        This is a link
    </FancyLink>
);

export const WithControls = Template.bind({});

export const AllLinks: React.FC = () => (
    <FancyLink destination="/" a11yText="text">
        This is a link
    </FancyLink>
);
