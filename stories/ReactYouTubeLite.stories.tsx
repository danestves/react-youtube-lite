import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReactYouTubeLite, Props } from '../src';

const meta: Meta = {
  title: 'React YouTube Lite',
  component: ReactYouTubeLite,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <div style={{ maxWidth: 600, margin: '0 auto' }}>
    <ReactYouTubeLite {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  url: 'https://www.youtube.com/watch?v=DVQTGidS1yk',
};

export const NoCookie = Template.bind({});

NoCookie.args = {
  url: 'https://www.youtube.com/watch?v=DVQTGidS1yk',
  noCookie: true,
};

export const NoAd = Template.bind({});

NoAd.args = {
  url: 'https://www.youtube.com/watch?v=DVQTGidS1yk',
  adNetwork: false,
};
