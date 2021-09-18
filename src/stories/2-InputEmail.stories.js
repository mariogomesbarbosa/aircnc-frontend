import { Button } from '@storybook/react/demo';
import React, { useState } from 'react'

import './styles.css'

export default {
  title: 'Design System/Atoms/Input Text',
  component: Button,
  decorators: [storyFn => 
    <div style={{ display:'flex', width: '100vw', height: '100vh' }}>{storyFn()}</div>
  ],
};

export const InputEmail = (handleSubmit) => (
  <div class="content">
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail *</label>
      <input 
        id="email" 
        type="email" 
        placeholder="Insira seu email"
      />
    </form>
  </div>
);










