const getUser = async (token: string) => {
  const result = await fetch("http://localhost:5000/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resultJSON = await result.json();
  if(result.status === 400){
    throw new Error("no_auth")
  }else if (resultJSON.message === "user_not_found"){
    return null;
  }else {
    return resultJSON.data;
  }
};
export default getUser;
