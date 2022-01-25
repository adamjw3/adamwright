import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Paragraph from '.';

export default {
    title: 'Paragraph',
    component: Paragraph,
} as Meta;

const Template: Story = () => <Paragraph className="para">This is a paragraph</Paragraph>;

export const WithControls = Template.bind({});

export const AllHedings: React.FC = () => (
    <>
        <Paragraph className="para">This is a paragraph</Paragraph>;
        <Paragraph tag="p" className="para-small">
            This is a paragraph small
        </Paragraph>
    </>
);
