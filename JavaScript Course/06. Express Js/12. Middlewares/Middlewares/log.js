function userCredentials(req, res, next) {
  console.log("username: (alex)");
  console.log("email: (alex@gmail.com)");
  console.log("password: (alexa1232123786678)");
  console.log("age: (22)");
  next();
}

export default userCredentials;
