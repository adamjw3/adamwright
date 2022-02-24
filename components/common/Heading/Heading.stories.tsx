import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Heading from '.';

export default {
    title: 'Heading',
    component: Heading,
} as Meta;

const Template: Story = () => (
    <Heading tag="h1" className="heading">
        This is a Heading
    </Heading>
);

export const WithControls = Template.bind({});

export const AllHedings: React.FC = () => (
    <>
        <Heading tag="h2" className="heading-xxlarge">
            This is a Heading Xlarge
        </Heading>
        <Heading tag="h2" className="heading-xlarge">
            This is a Heading Xlarge
        </Heading>
        <Heading tag="h2" className="heading-large">
            This is a Heading Large
        </Heading>
        <Heading tag="h3" className="heading-small">
            This is a Heading Small
        </Heading>
        <Heading tag="h4" className="heading">
            This is a Headings
        </Heading>
    </>
);
