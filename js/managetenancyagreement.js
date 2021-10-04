var landlord = {};
var tenant = {};
var address = {};
var rentalInfo = {};

function createUpdateAgreement(){
    mtdName = "createUpdateAgreement"
    console.log(`START - UI TA Management --- ${mtdName} -----`);
    
    getLandlordData(); //TODO: Remove from here 
    getTenantData();//TODO: Remove from here 
    readAddressData(); 
    readRentalData();
    readTnC();

    var agreementData = {};
    agreementData["landlord"] = landlord;
    agreementData["tenant"] = tenant;
    agreementData["status"] = "ACTIVE"; //TODO: UPDate accordingly
    agreementData["address"] = address;
    agreementData["duration"] = rentalInfo.duration;
    agreementData["startdate"] = rentalInfo.startdate;
    agreementData["deposit"] = rentalInfo.deposit;
    
    agreementData["rate"] = rentalInfo.rate;
    agreementData["timeofpayment"] = rentalInfo.timeofpayment;
    agreementData["tnc"] = rentalInfo.tnc;

    insertNewAgreement(agreementData)

   
    console.log(`END - UI TA Management --- ${mtdName} -----`);
}

function readAddressData(){
    mtdName = "readAddressData"
    console.log(`START - UI TA Management --- ${mtdName} -----`);

    address["postalcode"] = $("#postalcode").val();
    address["name"] = $("#name").val();
    address["block"] = $("#block").val();
    address["street"] = $("#street").val();
    address["unit"] = $("#unit").val();
    
    console.log(`Property Address: ${address}`);
    console.log(`END - UI TA Management --- ${mtdName} -----`);
}

function readRentalData(){
    mtdName = "readRentalData"
    console.log(`START - UI TA Management --- ${mtdName} -----`);

    rentalInfo["duration"] = $("#duration").val();
    rentalInfo["startdate"] = $("#startdate").val();
    rentalInfo["deposit"] = $("#deposit").val();
    rentalInfo["rate"] = $("#rate").val();
    rentalInfo["timeofpayment"] = $("#timeofpayment").val();

    console.log(`Rental: ${rentalInfo}`);
    console.log(`END - UI TA Management --- ${mtdName} -----`);
}

function readTnC(){
    mtdName = "readTnC"
    console.log(`START - UI TA Management --- ${mtdName} -----`);

    rentalInfo["tnc"] = $("#tnc").val();

    console.log(`END - UI TA Management --- ${mtdName} -----`);
}

function insertNewAgreement(data){
    mtdName = "insertNewAgreement"
    console.log(`START - UI TA Management --- ${mtdName} -----`);

    console.log("In Insert New Record:");
    console.log(data);


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Populate this data from e.g. form.
    var raw = JSON.stringify(data);

    console.log("Raw Data");

    console.log(raw);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("http://localhost:3000/agreement/add", requestOptions)
      .then((response) => response.json())
      .then((responseData) => 
      {console.log("Data:");
        console.log(responseData)})
    .catch((error) => console.log("error", error));

      console.log(`END - UI TA Management --- ${mtdName} -----`);
}


function getLandlordData(){
    mtdName = "getLandlordData"
    console.log(`START - UI TA Management --- ${mtdName} -----`);
    var requestOptions = {
      method: "GET",
    };

    fetch(`http://localhost:3000/user/?id=LANDLORD001`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("In fetch method:" + data);
        landlord["name"] = data.fullname;
        landlord["nric"] = data.nric;
        landlord["mobile"] = data.mobile;
        landlord["email"] = data.email;
        landlord["uen"] = data.uen;
    })
    .catch((error)=> console.log("UI rendering Error:"+error));
}

function getTenantData(){
    mtdName = "getTenantData"
    console.log(`START - UI TA Management --- ${mtdName} -----`);
    var requestOptions = {
      method: "GET",
    };

    fetch(`http://localhost:3000/user/?id=TENANT001`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("In fetch method:" + data);
        tenant["name"] = data.fullname;
        tenant["nric"] = data.nric;
        tenant["mobile"] = data.mobile;
        tenant["email"] = data.email;
        tenant["uen"] = data.uen;
    })
    .catch((error)=> console.log("UI rendering Error:"+error));
}