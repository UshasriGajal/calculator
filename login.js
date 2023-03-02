
var users = [
    
        user1 = {
            mails: "ushasrigajal@gmail.com",
            pwd: 123456
        },
        user2 = {
            mails:"ushasri@gmail.com",
             pwd:12345

        },
        user3 = {
            mails:"vishnu@gmail.com",
            pwd : 4848
        },
        user4 = {
            mails:"naveen@gmail.com",
            pwd:7878
        },
        user5 ={
            mails:"spandana@gmail.com",
            pwd:9898
        }
    
]

console.log(users.length)

function login(){
    var x = document.getElementById("emailid")
    var mail = x.value
    var password = document.getElementById("password")
    var pass = password.value

    for (var i = 0 ; i < users.length;i++)
    {
        if(mail == users[i].mails  && pass == users[i].pwd)
        {
            alert("kutty maa");
            break;
        }
        else{
            alert("Invalid details");
            break;
        }
    }
}
