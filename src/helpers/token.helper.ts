const getToken = () => {
  const token = sessionStorage.getItem('Auth token');

  return token;
};

export { getToken };
