var currentCreateStep = 1;
var selectedtatemplate;


function displayTemplate(){
    console.log("In displayTemplate");
    var selectedTemplate = document.getElementById("template").value;
    var retailTemplate = document.getElementById("retailTemplate");
    var templateSection = document.getElementById("templateSection");
    var hdbTemplate = document.getElementById("hdbTemplate");

    console.log(`Selected Value: ${selectedTemplate}`);

    switch (selectedTemplate) {
        case "none":
          templateSection.style.display = "none";
          break;

        case "retail":
          templateSection.style.display = "block";
          retailTemplate.style.display = "block";
          hdbTemplate.style.display = "none";
          break;
          
        case "hdb":
            templateSection.style.display = "block";
            retailTemplate.style.display = "none";
            hdbTemplate.style.display = "block";
            break;
        
        default:
          templateSection.style.display = "none";
    
        }       
}

function onNext(){
  mtdName = "onNext"
  console.log(`START - UI TA Management --- ${mtdName} -----`);

  

  console.log(`Current Step Value: ${currentCreateStep}`);

  switch (currentCreateStep) {
      case 1:
        console.log(`Case:1`);
        $("#createtastep1").hide();
        $("#createtastep2").show();
        $("#createtastep3").hide();
        $("#createtastep4").hide();
        $("#createtastepid").attr("src","images/create-2.jpg");
        $(".backbutton").show();
        currentCreateStep++;
        break;

      case 2:
        console.log(`Case:2`);
        $("#createtastep1").hide();
        $("#createtastep1").hide();
        $("#createtastep2").hide();
        $("#createtastep3").show();
        $("#createtastep4").hide();

        $("#createtastepid").attr("src","images/create-3.jpg");
        $(".backbutton").show();
        currentCreateStep++;
        break;
        
      case 3:
        console.log(`Case:3`);
        $("#createtastep1").hide();
        $("#createtastep2").hide();
        $("#createtastep3").hide();
        $("#createtastep4").show();
        $("#createtastepid").attr("src","images/create-4.jpg");
        $(".backbutton").show();
        $(".nextbutton span").text("SUBMIT");
        currentCreateStep++;
          break;


      
      default:
        console.log(`Case:default`);
        $("#createtastep1").show();
        $("#createtastep2").hide();
        $("#createtastep3").hide();
        $("#createtastep4").hide();

        
      }

      
        
  

  console.log(`END - UI TA Management --- ${mtdName} -----`);
  return false;

}

function onBack(){
  mtdName = "onBack"
  console.log(`START - UI TA Management --- ${mtdName} -----`);

  

  console.log(`Current Step Value: ${currentCreateStep}`);

  switch (currentCreateStep) {
      case 3:
        console.log(`Case:3`);
        $("#createtastep1").hide();
        $("#createtastep2").show();
        $("#createtastep3").hide();
        $("#createtastep4").hide();
        $("#createtastepid").attr("src","images/create-2.jpg");
        $(".backbutton").show();
        currentCreateStep--;
        break;

      case 4:
        console.log(`Case:4`);
        $("#createtastep1").hide();
        $("#createtastep1").hide();
        $("#createtastep2").hide();
        $("#createtastep3").show();
        $("#createtastep4").hide();
        $("#createtastepid").attr("src","images/create-3.jpg");
        $(".backbutton").show();
        $(".nextbutton span").text("NEXT");
        currentCreateStep--;
        break;
        
      case 2:
        console.log(`Case:2`);
        $("#createtastep1").show();
        $("#createtastep2").hide();
        $("#createtastep3").hide();
        $("#createtastep4").hide();
        $("#createtastepid").attr("src","images/create-1.jpg");
        $(".backbutton").hide();
        currentCreateStep--;
          break;
      
      default:
        console.log(`Case:default`);
        $("#createtastep1").show();
        $("#createtastep2").hide();
        $("#createtastep3").hide();
        $("#createtastep4").hide();

        
      }

      
        
  

  console.log(`END - UI TA Management --- ${mtdName} -----`);
  return false;

}

