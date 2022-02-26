
const object1 = {
    roll: "001",
    department: "CSE",
    stdName: "Std1",
    Address: "Noida",
    Phone: "9001293278"
  
  };
  var stdrecords = new Array();
  stdrecords.push(object1);
  
  
  function addSave(){
      // let stdrecords = [];
      var r_no = document.getElementById("r_no").value;
      var dept = document.getElementById("d").value;
      var n = document.getElementById("name").value;
      var address = document.getElementById("addr").value;
      var ph = document.getElementById("ph_no").value;


      for(var i=0;i<stdrecords.length;i++){
        if(stdrecords[i].roll.localeCompare(r_no)===0){
            document.getElementById('result').innerHTML="Roll number already exists try with another roll no.!";
            return
        }
    }
  
      const object = { 
            roll: r_no,
            department: dept,
            stdName: n,
            Address: address,
            Phone: ph
        
        }; 
  
      stdrecords.push(object);
      document.getElementById('result').innerHTML="Student record added successfully!";
      console.log(stdrecords);
      sessionStorage.setItem("key", JSON.stringify(stdrecords));
  
  }
  
  function cancel(){
      document.getElementById("myform").reset();
      document.getElementById('result').innerHTML="";
  }
  
  function searchStd(){
      var searchroll = document.getElementById("rno").value;
      // document.getElementById('search').innerHTML=stdrecords[0].roll;
      for(var i=0;i<stdrecords.length;i++){
          if(stdrecords[i].roll.localeCompare(searchroll)===0){
            //   document.getElementById('search').innerHTML="Roll available";
              const div = document.createElement('div');
              div.classList.add('stdData');
              div.innerHTML = `<h2><br>Roll no: ${stdrecords[i].roll}</h2><h2><span>Student Name : ${stdrecords[i].stdName}</span></h2>
              <h2>Department : ${stdrecords[i].department}</h2><h2>Address : ${stdrecords[i].Address}</h2>
             <h2>Phone : ${stdrecords[i].Phone}</h2>`;
              document.querySelector('.sData').appendChild(div);
              return
          }
      }
      document.getElementById('search').innerHTML="Student Roll number not available";
      
      
  }
  
  function printObj(){
      stdrecords = JSON.parse(sessionStorage.getItem("key"));
      console.log(stdrecords);
  }
  
  function clear(){
      document.getElementById("searchform").reset();
      document.getElementById('search').innerHTML="";
  }
  
  function deleteStd(){
    var delroll = document.getElementById("drno").value;
    // document.getElementById('search').innerHTML=stdrecords[0].roll;
    for(var i=0;i<stdrecords.length;i++){
        if(stdrecords[i].roll.localeCompare(delroll)===0){
            stdrecords.splice(i,1);
            document.getElementById('del').innerHTML=`Student record with roll no. ${delroll} successfully deleted!!`;
            return
        }
    }
    document.getElementById('del').innerHTML="Student Roll number not available";
  }

   
  function dclear(){
    document.getElementById("delform").reset();
    document.getElementById('del').innerHTML="";
}


function sStd(){
    var editroll = document.getElementById("eno").value;
    // document.getElementById('search').innerHTML=stdrecords[0].roll;
    for(var i=0;i<stdrecords.length;i++){
        if(stdrecords[i].roll.localeCompare(editroll)!==0){
            document.getElementById('edit').innerHTML="Student Roll number not available";
            return
        }
    }
    document.getElementById("addedit").style.visibility="visible";
}

function editStd(){
    var editroll = document.getElementById("eno").value;
    var dept = document.getElementById("ed").value;
    var n = document.getElementById("ename").value;
    var address = document.getElementById("eaddr").value;
    var ph = document.getElementById("eph_no").value;
    for(var i=0;i<stdrecords.length;i++){
        if(stdrecords[i].roll.localeCompare(editroll)===0){
            stdrecords[i].department = dept;
            stdrecords[i].stdName = n;
            stdrecords[i].Address = address;
            stdrecords[i].Phone = ph;
            document.getElementById('eresult').innerHTML=`Changes saved for roll no. ${editroll}`;
            sessionStorage.setItem("key", JSON.stringify(stdrecords));
            return
        }
    }

}

function eclear(){
    document.getElementById("editform").reset();
    document.getElementById('edit').innerHTML="";
}


function e2clear(){
    document.getElementById("addedit").reset();
    document.getElementById('eresult').innerHTML="";
}


function disRec(){
    stdrecords = JSON.parse(sessionStorage.getItem("key"));
    var table = document.getElementById("displaytable");
    for(var i=0;i<stdrecords.length;i++){
        
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = stdrecords[i].roll;
        cell2.innerHTML = stdrecords[i].stdName;
        cell3.innerHTML = stdrecords[i].department;
        cell4.innerHTML = stdrecords[i].Address;
        cell5.innerHTML = stdrecords[i].Phone;
        continue;
    }
}