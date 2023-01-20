import { getToken } from 'helpers/token.helper';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
