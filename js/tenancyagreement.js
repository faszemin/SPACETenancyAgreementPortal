const database = require("./databaseconnection");
const expressmodule = require("express");
//const { ConflictResolutionMode } = require("@azure/cosmos");
var mtdName = "";
router = expressmodule.Router();

class Agreement {
    constructor(spaceUserLandlord, spaceUserTenant, agreementStatus,propertyAddress, duration, startDate, deposit, mthlyRentalRate, timeOfPayment, termsAndCond ) {
        //this.id = ID;
        this.spaceUserLandlord = spaceUserLandlord;
        this.spaceUserTenant = spaceUserTenant;
        this.agreementStatus = agreementStatus;
        this.propertyAddress = propertyAddress;
        this.duration = duration;
        this.startDate = startDate;
        this.deposit = deposit;
        this.mthlyRentalRate = mthlyRentalRate;
        this.timeOfPayment = timeOfPayment;
        this.termsAndCond = termsAndCond;

        this.toString = function() {
            return `${this.id}: ${this.spaceUserLandlord.fullname}, ${this.spaceUserLandlord}\n`;
        };
        // this.tenancyAgreement = [];

        // this.addTA = function(taID, tatype) {
        //     this.tenancyAgreement.push({ TenancyAgreementId: taID, Type: tatype });
        // };

        // this.toString = function() {
        //     return `${this.id}: ${this.fullname}, ${this.nric}\n`;
        // };
        // this.getTenancyAgreement = function() {
        //     let taItem = "";
        //     this.tenancyAgreement.forEach(function(ta) {
        //         taItem = `${grades}${ta.TenancyAgreementId}:${ta.Type}\n`;
        //     });
        //     return taItem;
       // };
    }
}

async function addAgreement(agreement) {
    const { item, statusCode } = await database.containerdata.create(agreement).catch((error)=>console.log(error));
    database.isOK(statusCode) && console.log(`Added user with id: ${item.id}\n`);
}

async function getAgreement(ID) {
    const { resource, statusCode } =  await database.containerref.item(ID).read().catch();;
    console.log(statusCode);
    //console.log(`SpaceUser data: ${resource.fullname}: ${resource.id}, ${resource.uen}\n`);   
    return  resource;
  
}





router.get("/agreement/" , (request,response) =>{
        mtdName = "Get Agreement"
        console.log(`START --- ${mtdName} -----`);
        console.log(`Fetch User with ID --- ${request.query.id} -----`);
    
        getAgreement(request.query.id)
        .then((result) => 
        {
            console.log(result);
            response.status(200).send(result); 
        })
        .catch(()=>response.status(500).send("Some error occurred"));
});

router.post("/agreement/add" , (request,response) =>{
    mtdName = "Add Agreement"
    console.log(`START --- ${mtdName} -----`);
    //console.log(`Adding Space User('${request.body.fullname}','${request.body.id}','${request.body.uen}','${request.body.email}')`);
    

 
    // Create a new Agreement
   let newagreement  = new Agreement
   (request.body.landlord, request.body.tenant, request.body.status,request.body.address,
     request.body.duration, request.body.startdate, request.body.deposit, request.body.rate, request.body.timeofpayment, request.body.tnc ) 

  
     addAgreement(newagreement)
    .then((result) => 
    {
        console.log(result);
        response.status(200).send(result); 
    })
    .catch(()=>response.status(500).send("Some error occurred"));
});

module.exports = {router};