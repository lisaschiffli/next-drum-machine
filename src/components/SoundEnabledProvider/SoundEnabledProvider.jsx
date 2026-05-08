'use client';
import React from 'react';

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider( {children} ) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  function toggleSound() {
    setSoundEnabled(!soundEnabled);
  }

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(
    SoundEnabledContext
  );

  if (!data) {
    throw new Error('useSoundEnabled must be used within a SoundEnabledProvider');
  }
  return data;
}

export default SoundEnabledProvider;