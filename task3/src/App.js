import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF'];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

