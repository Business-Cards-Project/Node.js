let user;

$(() => {
    init();
})

const init = async () => {
    user = await checkToken("http://localhost:3000/users/userInfo");

    $('#add_form_id').on('submit', (e) => {
        e.preventDefault();

        let bodyData = {
            bizName: $('#bizName').val(),
            bizDescription: $('#bizInfo').val(),
            bizAddress: $('#bizAddress').val(),
            bizPhone: $('#bizPhone').val()
        }
        addNewCardApi(bodyData);
    })
}

const addNewCardApi = async (_bodyData) => {
    let url = "http://localhost:3000/cards";
    try {
        let newCard = await doApiMethod(url, 'post', _bodyData)
        if (newCard._id) {
            alert("Card Added")
        }
    } catch (err) {
        console.log(err);
    }
}