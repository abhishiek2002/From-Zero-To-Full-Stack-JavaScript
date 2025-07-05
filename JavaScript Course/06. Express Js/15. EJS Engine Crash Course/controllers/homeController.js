const homeController = (req, res) => {
    const data = {
      name: "Abhishek",
      userId: 21
    };
  
    res.render("index", data);
  };
  
  export { homeController };
  