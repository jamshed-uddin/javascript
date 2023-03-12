const addDetails = () => {
  const detail = { firtname: "abraham", lastname: "linkon" };
  const detailStringified = JSON.stringify(detail);

  localStorage.setItem("person", detailStringified);
};
