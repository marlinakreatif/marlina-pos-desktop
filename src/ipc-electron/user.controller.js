export const getAllUser = () => {
  let data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: i,
      username: `USER - ${i}`,
    });
  }

  return data;
};
