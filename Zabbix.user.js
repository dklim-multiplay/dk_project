// ==UserScript==
// @name         Zabbix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       dklim
// @match        https://zabbix.multiplay.co.uk/zabbix.php?action=dashboard.view
// @grant        none
// @updateURL    https://github.com/dklim-multiplay/dk_project/blob/master/Zabbix.user.js
// @downloadURL  https://github.com/dklim-multiplay/dk_project/blob/master/Zabbix.user.js
// ==/UserScript==

var textAreaDiv = document.createElement("TEXTAREA");
textAreaDiv.setAttribute("style", "width:500px; height:200px; background-color: linear-gradient(to bottom, #fff, #e6e6e6); border-color: grey;");
var textArea = document.getElementsByTagName("TEXTAREA")[0];

if(!textArea){
    document.body.appendChild(textAreaDiv);
}

var machines=document.createElement("input");
machines.type="button";
machines.value="GF Machines";
machines.onclick = gotogameforge_machines;
textAreaDiv.parentNode.appendChild(machines);


var procurement=document.createElement("input");
procurement.type="button";
procurement.value="GF Procurement";
procurement.onclick = gotogameforge_procurement;
machines.parentNode.appendChild(procurement);


function gotogameforge_machines()
{

    var hostnames = document.getElementsByTagName("TEXTAREA")[0].value;
    hostnames = hostnames.replace(/\n/g,",");
    console.log(hostnames);
    var gameforge = "https://gameforge.multiplay.co.uk/cgi-adm/machines.pl?opt=MachinesAdminList;event=Online;MachinesFilter_filters=name%23%3A%23"+hostnames
    if(hostnames != ""){
        window.open(gameforge,'_blank');
    }
    else{
        alert("Type hostname");
    }

}

function gotogameforge_procurement()
{

    var hostnames = document.getElementsByTagName("TEXTAREA")[0].value;
    hostnames = hostnames.replace(/\n/g,",");
    var gameforge = "https://gameforge.multiplay.co.uk/cgi-adm/machines.pl?opt=MachineProcurementReport;event=Online;MachineProcurementReport_filters=name%23%3A%23"+hostnames
    if(hostnames!=""){
        window.open(gameforge,'_blank');
    }
    else{
        alert("Type hostname");
    }
}
