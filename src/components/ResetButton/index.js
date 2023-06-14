import React from 'react';
import { useGlobalContext } from '../../Context';

import * as s from './ResetButton.module.css';

const ResetButton = () => {
  const { canReset, dispatch } = useGlobalContext();

  const resetForm = () => dispatch({ type: 'RESET_FORM' });

  return (
    <button
      onClick={resetForm}
      className={!canReset ? `${s.btn} ${s.disabled}` : s.btn}
      disabled={!canReset}
    >
      Reset
    </button>
  );
};

export default ResetButton;
