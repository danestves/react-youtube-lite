import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'Without Component / Normal Iframe',
};

export default meta;

const Template: Story = () => (
  <div style={{ maxWidth: 600, margin: '0 auto' }}>
    <div className="embed-responsive aspect-ratio-16/9">
      <iframe
        src="https://www.youtube.com/embed/DVQTGidS1yk?modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white"
        width={560}
        height={315}
        frameBorder={0}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
