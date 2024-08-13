const normalizeUserData = (type, data) => {
  switch (type) {
    case 'auth':
      return {
        token: data.token,
        user: {
          id: data.user.id,
          username: data.user.username,
          email: data.user.email,
        },
      };
    case 'findMe':
      return {
        id: data.id,
        username: data.username,
        email: data.email,
      };
    default:
      return data;
  }
};

export default normalizeUserData;