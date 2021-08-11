// The following is for the code navigation purpose.
//
// function_assignWF() {
// function_sendWF() {
//function_getQs(queries, k) {
// disableButton__(id1)
// parse_pres__
// timeVal__
// get_querystring__
// processQS5__
// makeQueryStr__
// makeBrowserUrl__
// addDataList_(ID) {
// ajaxCall__

// ==url_classes
//

// ==url_classes
// urlDirect_() {
// urlYearMonthDay_() {
// urlYearMonth_() {
// urlEscape_() {
// url2escape_() {
// urlModel__() {
// urlMultiModel__() {
// urlpres_() {

// urlCheckbox_() {
// urlTime_() {
// urlRadioTwo_() {
// urlDataUrl_() {
// urlMonths_() {
// urlScale1_() {
// urlScale1a_() {
// urlScale2_() {
// urlScale3_() {
// urlNumber_() {
// urlNumberCheck_() {

var naValue = "-999999";

// function_assignWF() {
function assignWF() {

  WF = Number( Cookies.get('WF') );
  vueApp.WF = WF;
  if (WF==1) {
    vueApp.getPlotText='Finish Configuring Parameters';
    
  } else {
    vueApp.getPlotText=vueApp.getPlotText0;
  }
}

// function_sendWF() {
function sendWF() {
  var argList = makeQueryStr(true);
  var url = "http://" + window.location.hostname + ":" + window.location.port + "/svc/send2Wf";
  url = url + '?'+argList; 
  console.log("server url:");
  console.log(url);
  $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      data: null,
      success: function(data, textStatus, xhr) {
          if (data.success == false) {
            console.log( 'send to WF server failed.');
            return;
          }
          console.log( 'send to WF server ok.');
          enableButton("action1"); 
      },
      error: function(xhr, textStatus, errorThrown) {
          console.log('success is error');
          enableButton("action1"); 
      },
      complete: function(xhr, textStatus) {
          console.log("complete status: "+textStatus);
          enableButton("action1"); 
      },
  });
}

//function_getQs(queries, k) {
function getQs(queries, k) {
  if (queries.hasOwnProperty(k)) {
    return queries[k];
  } else {
    return false;
  }
}


// test3__
function test3a() {
  vueApp.var1 = 'lai';
}

// disableButton__(id1)
function disableButton(id1)
{
  var x=document.getElementById(id1);
  x.disabled=true;
  x.style.background="#999999";
}

function enableButton(id1)
{
  var x=document.getElementById(id1);
  x.disabled=false;
  x.style.background="#4dffa6";
  //x.style.background="#ccff99";
}


// parse_pres__
function parse_pres(pres10) {
  var pres1 = "";

  if (pres10=="") {pres1 = naValue; }
  else {
    if (!(isNaN(Number(pres10)))) { 
      pres1 = pres10; 
    } else {
      var checkNan = 0;
      var pres2 = [];
      var temp1=pres10.split(",");
      //for (var i in temp1) {
      for (var i=0; i<temp1.length; i++) {
        if (isNaN(Number(temp1[i]))) {
          checkNan = 1; 
        } else {
          pres2.push(Number(temp1[i]));
        }
      }
      if (pres2.length>0) { pres1 = pres2.join(); }
      else { pres1 = naValue; }
    }
  }
  return pres1;
}

// timeVal__
function timeVal(timeStr) {
  var timeStr1 = timeStr.toString().split("-").join("");
  if (timeStr1.length==6) {timeStr1 = timeStr1 + '15'; }
  return parseInt(timeStr1);
}

// get_querystring__
function get_querystring() {
  var queries = {};
  //var temp1 = document.location.search.substr(1).split('&');
  //alert(temp1.length);
  $.each(document.location.search.substr(1).split('&'),function(c,q){
    var i = q.split('=');
    //alert(i.length);
    try { 
    //if (i.lengh==2) { 
      queries[i[0].toString()] = i[1].toString();
    //}
    } catch(err) {}
  });
  return queries;
}

function fetchQValue(queries, key0) {
  var vq;
  if (!queries.hasOwnProperty(key0)) { 
    return false; 

  } else {
    return queries[key0];
  }
}

// processQS5__
function processQS5() {
  var queries = get_querystring();
  if (queries.length<1) {return;}

  var key0, key1, vq, nVar;

  //if (queries.length==1 && queries.hasOwnProperty("userid")) {
  //if (queries.hasOwnProperty("userid")) {
  //  var userid = queries['userid'];
  //  Cookies.set('userid', userid, {expires:7});
  //  //return;
  //}

  // userId for opennex
  var userId='0';
  if (queries.hasOwnProperty("userId")) {
    userId = queries['userId'];
    Cookies.set('userId', userId, {expires:7});
    //return;
  }

  for (key0 in queries) {
    //if (key0 == 'userid') continue;
    //if (key0 == 'userId') continue;
    //if (key0 == 'wfId') continue;
    //if (key0 == 'wfRunId') continue;
    //if (key0 == 'versionId') continue;
    //if (key0 == 'serviceId') continue;

    vq = fetchQValue(queries, key0);
    if (vq ===false) { continue; }

    vq = vq.trim();
    mapping[key0].toHtml(vq);
  }
}

// makeQueryStr__
function makeQueryStr(toServer) {
  toServer = typeof toServer !== 'undefined' ? toServer:false;
  var temp1 = "";
  var temp3 = "";

  //if (typeof WF == 'undefined') { WF = 0};
  //if (WF==1) { 
  //  temp1 += 'wfId=' + wfId + '&'; 
  //  temp1 += 'versionId=' + versionId + '&'; 
  //  temp1 += 'wfRunId=' + wfRunId + '&'; 
  //  temp1 += 'serviceId=' + serviceId + '&'; 
  //  temp1 += 'userId=' + userId1 + '&'; 
  //}

  var key0, key1;
  for (var key0 in mapping) {
    if (!mapping.hasOwnProperty(key0)) { continue; }

    if (toServer) { 
      if (key0 == 'plotUrl') continue;
      if (key0 == 'dataUrl') continue;
    }

    key1 = mapping[key0].key1;
    //temp3 += app[key1]; 
    vq = mapping[key0].fromHtml();
    temp1 += key0 + "=" + vq + "&";
  }
  temp1 = temp1.slice(0,-1);

  //var userId = Cookies.get('userId');
  if (toServer) { 
    temp1 += "&fromPage=" + document.location.href.split('?')[0] ;
  }

  return temp1;
}

// makeBrowserUrl__
function makeBrowserUrl() {
  vueApp.browserUrl = document.location.href.split('?')[0] + "?" + makeQueryStr();
}

// copyBrowserUrl__
function copyBrowserUrl() {
  vueApp.browserUrl = document.location.href.split('?')[0] + "?" + makeQueryStr();
  try {
    $("#browserUrl").select();
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    //console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}

// why this here?
function timeFullRange() {
  if (vueApp.timeELim>= vueApp.timeSLim) {
    vueApp.timeS = this.timeDash(vueApp.timeSLim);
    vueApp.timeE = this.timeDash(vueApp.timeELim);
  }
}

function timeDash(t1) {
  var t2 = t1.toString();
  if (t2.length==6) {
    return t2.slice(0,4) + "-" + t2.slice(4,6) 
  }
  return t2.slice(0,4) + "-" + t2.slice(4,6) + "-" + t2.slice(6,8)

}

// addDataList_(ID) {
function addDataList(ID) {
  var list1=document.getElementById("data"+ID);

  for(var key in dataList) {
    if (key.slice(0,5)==="group") {
      var og = document.createElement("OPTGROUP");
      og.setAttribute('label', dataList[key][0]);
      list1.add(og);

    } else {
      var toAdd = true;

      // whether the dataset has only 2D or only 3D variables
      if   ( dList[ID-1]["only2D"] 
        ||  dList[ID-1]["only3D"] ) {
        var dims = "";
        var varList2 = dataList[key][1];  
        for(var i=0; i<varList2.length; i++)   
          dims += String(varList[ varList2[i] ][2]);

        if   ( dList[ID-1]["only2D"] ) 
          if (dims.indexOf('2')==-1) toAdd = false;
        if   ( dList[ID-1]["only3D"] ) 
          if (dims.indexOf('3')==-1) toAdd = false;
      }
  
      // add to the option group
      if (toAdd) og.appendChild(new Option(key,key));
    }
  }
}


// ajaxCall__
function ajaxCall(service) {
  vueApp.action1Disabled = true;
  vueApp.downloadDataDisabled = true;

//  if (typeof WF == 'undefined') { WF = 0};
//  if (WF==1) {
//    sendWF();
//    return;
//  }

  vueApp.responseHtml = "Calculating ...";
  vueApp.dataUrl = "Calculating ...";
  vueApp.plotUrl = "";
  //$("#image").html("Image will appear here.");

  //var url = "http://" + window.location.hostname + ":" + window.location.port + "/svc/" + service + "?";
  var url = "https://" + window.location.hostname + "/svc/" + service + "?";
  var argList = makeQueryStr(true);
  url = url + argList;
  console.log("server url:");
  console.log(url);

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    data: null,
    success: function(data, textStatus, xhr) {
      Response = data;
      if (data.success == false) {
        Response = null;
        var text = JSON.stringify(data, null, 4);

        if (text.indexOf("No Data") != -1) {
          $("#image").html("No Data.");
          vueApp.dataUrl = "No Data";
          vueApp.responseHtml = "No Data";
          vueApp.action1Disabled = false;
          return;
        }

        text = "Error in backend: <br>" + text; 
        text = "<span style='color:red'>" + text + "</span>";
        vueApp.responseHtml = text;
        vueApp.dataUrl = "No data file due to backend error.";
        vueApp.action1Disabled = false;
        return;
      }  // if (data.success == false)

      var text = JSON.stringify(data, null, 4);
      // alert(text);
      vueApp.responseHtml = "<pre>"+text+"</pre>";
      vueApp.plotUrl = data.url;
      //vueApp.insertImage();
      //var html = "<img src='"+data.url+"' width='820'/>";

      // post dataUrl to textarea and enable download button
      vueApp.dataUrl = data.dataUrl;
      vueApp.action1Disabled = false;
      vueApp.downloadDataDisabled = false;

      //displayUrl4a();

    }, // success: function(data, textStatus, xhr)
    error: function(xhr, textStatus, errorThrown) {
        vueApp.responseHtml = "<font color='red'>error!</font>";
        vueApp.dataUrl = "error!";
        vueApp.action1Disabled = false;
        // alert("xhr.status: "+xhr.status);
        // alert("error status: "+textStatus);
    },
    complete: function(xhr, textStatus) {
        //alert("complete status: "+textStatus);
    },
  }); // .ajax
} // action1.click


// urlDirect_() {
function urlDirect() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    return vueApp[this.key1];
  }
  this.toHtml = function(vq){
    vueApp[this.key1] = vq;
  }
}

// urlCheckbox_() {
// it is the same as checkbox2num()
function urlCheckbox() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    if ( document.getElementById(this.key1).checked ) {
      return 1;
    } else {
      return 0;
    }
  }
  this.toHtml = function(vq){
    if ( Number(vq)==1 ) {
      $("#"+this.key1).prop('checked', true);
      $("#"+this.key1).change();
    } else {
      $("#"+this.key1).prop('checked', false);
    }
  }
}

// urlYearMonthDay_() {
function urlYearMonthDay() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    vq = vq.split("-").join("");
    return vq;
  }
  this.toHtml = function(vq){
    if (vq.length>6) {
      vueApp[this.key1] = vq.slice(0,4) + "-" + vq.slice(4,6) + "-" + vq.slice(6,8);
    } else {
      vueApp[this.key1] = vq.slice(0,4) + "-" + vq.slice(4,6);
    }
  }
}

// urlYearMonth_() {
function urlYearMonth() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    vq = vq.split("-").join("");
    return vq;
  }
  this.toHtml = function(vq){
    vueApp[this.key1] = vq.slice(0,4) + "-" + vq.slice(4,6);
  }
}

// urlTime_() {
// {'timeS': ['timeS', 'timeFull', 'f', 'anomaly', 'a']}
function urlTime() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.toCheck = arg99.slice(2);
  this.fromHtml = function(){
    var vq = $("#"+this.key1).val();
    //vq = vq.replace("-", "");
    vq = vq.split("-").join("");
    //console.log(this.toCheck.length);
    if (this.toCheck.length>1) {
      if ($("#"+this.toCheck[0]).is(":checked")) { 
        vq = vq + "_" + this.toCheck[1];
      }
    }

    if (this.toCheck.length>3) {
      if ($("#"+this.toCheck[2]).is(":checked")) { 
        vq = vq + "_" + this.toCheck[3];
      }
    }

    return vq;
  }

  this.toHtml = function(vq){
    if (vq.length==6) {
      vq = vq.slice(0,4) + "-" + vq.slice(4,6);
    } else {
      vq = vq.slice(0,4) + "-" + vq.slice(4,6) + "-" + vq.slice(6,8);
    }
    $("#"+this.key1).val(vq);
    $("#"+this.key1).change();
  }
}

// urlDate_() {
// {'timeS': ['timeS', 'timeFull', 'f', 'anomaly', 'a']}
function urlDate() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.toCheck = arg99.slice(2);
  this.fromHtml = function(){
    var vq = $("#"+this.key1).val();
    vq = vq.replace("-", "");
    if ($("#"+this.toCheck[0]).is(":checked")) { 
      vq = vq + "_" + this.toCheck[1];
    }
    if ($("#"+this.toCheck[2]).is(":checked")) { 
      vq = vq + "_" + this.toCheck[3];
    }
    return vq;
  }

  this.toHtml = function(vq){
    vq = vq.slice(0,4) + "-" + vq.slice(4,6);
    $("#"+this.key1).val(vq);
    $("#"+this.key1).change();
  }
}

// urlEscape_() {
function urlEscape() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    return escape(vq);
  }
  this.toHtml = function(vq){
    vq = unescape(vq);
    vueApp[this.key1] = vq;
  }
}

// url2escape_() {
function url2escape() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    return escape(vq);
  }
  this.toHtml = function(vq){
    vq = unescape(vq);
    vq = unescape(vq);
    vueApp[this.key1] = vq;
  }
}

// urlModel__() {
function urlModel() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    return vq;
    //return vq.replace("/", "_");
  }
  this.toHtml = function(vq){
    //var vq1 = vq.replace("_", "/"); 
    var vq1 = vq;
    vueApp[this.key1] = vq1;
  }
}


// urlMultiModel__() {
function urlMultiModel() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    var str1 = '';
    for (var ii=0; ii<vq.length; ii++) {
      str1 += vq[ii].replace("/", "_") + ',';
    }
    return str1.slice(0, -1);
  }
  this.toHtml = function(vq){
    var vq1 = vq.split(",");
    for (var ii=0; ii<vq1.length; ii++) {
      vq1[ii] = vq1[ii].replace("_", "/"); 
    }
    vueApp[this.key1] = vq1;
  }
}

// urlRadioTwo_() {
function urlRadioTwo() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.radio1 = arg99[2];
  this.radio2 = arg99[3];
  this.fromHtml = function() {
    if ( document.getElementById(this.radio1).checked ) {
      return "1";
    } else { 
      return "0";
    }
  }
  this.toHtml = function(vq) {
    vq = Number(vq);
    //console.log(this.radio1);
    if (vq == 1) { 
      document.getElementById(this.radio1).checked = true;
      document.getElementById(this.radio2).checked = false;
    } else { 
      document.getElementById(this.radio1).checked = false;
      document.getElementById(this.radio2).checked = true;
    }
  }
}

// urlDataUrl_() {
function urlDataUrl() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    //console.log(document.getElementById("download_data").disabled);
    //if (document.getElementById("download_data").disabled == false) {
    if (includeDataUrl) {
      vq = dataUrl;
    } else {
      vq = "";
    }
    return vq;
  }

  this.toHtml = function(vq){
    vq = unescape(vq);
    $("#"+this.key1).val(vq);
    $("#"+this.key1).change();
  }
}

// urlMonths_() {
function urlMonths() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    vq = getMonthStr('');
    return vq;
  }

  this.toHtml = function(vq){
    select_months_from_str(vq, '');
  }
}

// urlScale1_() {
function urlScale1() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    return scale2num1();
  }

  this.toHtml = function(vq){
    var vq1 = Number(vq);
    num2scale1(vq1);
  }
}

// urlScale1a_() {
function urlScale1a() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    return scale2num1a();
  }

  this.toHtml = function(vq){
    var vq1 = Number(vq);
    num2scale1a(vq1);
  }
}

// urlScale2_() {
function urlScale2() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    return scale2num2();
  }

  this.toHtml = function(vq){
    var vq1 = Number(vq);
    num2scale2(vq1);
  }
}

// urlScale3_() {
function urlScale3() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    return scale2num3();
  }

  this.toHtml = function(vq){
    var vq1 = Number(vq);
    num2scale3(vq1);
  }
}

// urlNumber_() {
function urlNumber() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = $("#"+this.key1).val();
    vq = parseNum(vq);
    return vq;
  }

  this.toHtml = function(vq){
    $("#"+this.key1).val(vq);
    $("#"+this.key1).change();
  }
}

// urlNumberCheck_() {
function urlNumberCheck() {
  var vq;
  this.key0 = key99;
  this.key1 = arg99[0];
  this.check = arg99[2];
  if (arg99.length>3) {
    this.valueDf = arg99[3];
  } else {
    this.valueDf = "-999999";
  } 

  this.fromHtml = function(){
    var vq;
    if ( document.getElementById(this.check).checked ) {
      vq = $("#"+this.key1).val();
      vq = parseNum(vq);
    } else {
      vq = this.valueDf;
    }
    return vq;
  }

  this.toHtml = function(vq){
    $("#"+this.key1).val(vq);
    $("#"+this.key1).change();
  }
}


// urlpres_() {
function urlPres() {
  this.key0 = key99;
  this.key1 = arg99[0];
  this.fromHtml = function(){
    var vq = vueApp[this.key1];
    vq =  parse_pres(vq);
    //console.log(vq);
    //console.log(vueApp.is3d);
    return vueApp.is3d==1? vq : '-999999';
  }
  this.toHtml = function(vq){
    if (vq=="-999999") {
      vq = "500";
      vueApp.is3d = 0;
    }
    vueApp[this.key1] = vq;
  }
}
