const database = require("./databaseconnection");
const expressmodule = require("express");
var mtdName = "";
router = expressmodule.Router();

class SpaceUser {
    constructor(ID, name, nric,mobile,uen,email) {
        this.id = ID;
        this.fullname = name;
        this.nric = nric;
        this.mobile = mobile;
        this.email = email;
        this.uen = uen;
        
    }
}

async function addSpaceUser(user) {
    const { item, statusCode } = await database.containerdata.create(user).catch();
    database.isOK(statusCode) && console.log(`Added user with id: ${item.id}\n`);
}

async function getSpaceUser(ID) {
    const { resource, statusCode } =  await database.containerref.item(ID).read().catch((error)=>console.log(`Error Caught : ${error}`));;
    console.log(statusCode);
    console.log(`SpaceUser data: ${resource.fullname}: ${resource.id}, ${resource.uen}\n`);
        
    return  resource;
  
}



router.get("/user/" , (request,response) =>{
        mtdName = "Get Space User"
        console.log(`START --- ${mtdName} -----`);
        console.log(`Fetch User with ID --- ${request.query.id} -----`);
    
        getSpaceUser(request.query.id)
        .then((result) => 
        {
            console.log(result);
            response.status(200).send(result); 
        })
        .catch(()=>response.status(500).send("Some error occurred"));
});

router.post("/user/add" , (request,response) =>{
    mtdName = "Add Space User"
    console.log(`START --- ${mtdName} -----`);
    console.log(`Adding Space User('${request.body.fullname}','${request.body.nric}','${request.body.uen}','${request.body.email}')`);
    
    // Create a new SpaceUser
   let newspaceuser   = new SpaceUser(request.body.id,request.body.name, request.body.nric,request.body.mobile,request.body.email,request.body.uen)

    addSpaceUser(newspaceuser)
    .then((result) => 
    {
        console.log(result);
        response.status(200).send(result); 
    })
    .catch(()=>response.status(500).send("Some error occurred"));
});

module.exports = {router};
// async function test() {
//     console.log("\n\nTesting addSpaceUser and getSpaceUser\n\n");

//     // Create a new SpaceUser
//     let spaceuser1   = new SpaceUser("USR008", "Fahmida","S9392399C", "UEN1234")
//     await addSpaceUser(spaceuser1).then(
//         () => getSpaceUser(spaceuser1.id)
//     );

// }

// test();

