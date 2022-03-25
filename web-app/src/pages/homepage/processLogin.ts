const processLogin = async (token: string) => {
  console.log("Processing Login");
  const result = await fetch("http://localhost:5000/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resultJSON = await result.json();
  console.log(resultJSON);
};
export default processLogin;
