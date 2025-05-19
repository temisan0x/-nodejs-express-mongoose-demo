const getHome = (req, res) => {
  res.send({
    message: "welcome to our book store",
  });
  console.log(req.body);
};

module.exports = {
  getHome,
};
