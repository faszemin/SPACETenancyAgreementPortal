
function updateFromMyInfo(){
    console.log("In updateFromMyInfo() Mtd");
    console.log("Get User Data From Server");
    var requestOptions = {
      method: "GET",
    };

    fetch(`http://localhost:3000/user/?id=USR008`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("In fetch method:" + data);
        $("#name").val(data.fullname);
        $("#nric").val(data.nric);
        $("#uen").val(data.uen);
        $("#email").val("peter@compropforrent.sg");

    })
    .catch((error)=> console.log("UI rendering Error:"+error));
}

function saveInfo(){
    var methodName = "saveInfo";
    console.log(`Start Mtd:  ${methodName}`);
    var name = $("#name").val();
    var nric = $("#nric").val();
    var uen = $("#uen").val();
    var email = $("#email").val();

    console.log(`Name:${name} - NRIC:${nric} - UEN:${uen} - Email:${email}`);

    var spaceUserData = {};
    formData["id"] = nric;
    formData["name"] = name;
    formData["uen"] = uen;
    formData["email"] = email;
}
