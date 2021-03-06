import React from 'react';
import Alert from '@mui/material/Alert';

export default function LoadingErrorAnimation(): React.ReactElement {
  return (
    <div
      className="d-flex align-items-center justify-content-center centeranimation "
      style={{ padding: '20%' }}
    >
      <Alert variant="filled" severity="error">
        Erreur chargement des données.
      </Alert>
    </div>
  );
}
