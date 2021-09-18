import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import './styles.css'
import buttonNotes from './button.md';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  decorators: [storyFn => 
    <div style={{ display:'flex', width: '100vw', height: '100vh' }}>{storyFn()}</div>
  ],
};

export const Primary = () => (
  <button className="btn-primary" type="submit">Entrar</button>
);
Primary.story = {
  parameters: { notes: buttonNotes },
};
