$(() => {
  init();
})

const init = async () => {
  let user = await checkToken("http://localhost:3000/users/userInfo");
  printUserData(user);

  getCardFromApi();
}

const printUserData = (user) => {
  $("#id_name").html(user.name);
  $("#id_email").html(user.email);
  $("#id_date").html(user.createdAt);
}

const getCardFromApi = async () => {
  let url = "http://localhost:3000/cards/userCardsAdded";
  let data = await doApiMethod(url, 'GET');
  console.log(data);
}