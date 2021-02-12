
  var script_url = "https://script.google.com/macros/s/AKfycbzXVrhWxGXD1xnHH2LgVb8ZYEObyVtQM3cNOEy_/exec";
  
  // Make an AJAX call to Google Script
  function insert_value() {
    
    $("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');
  
  var man= $("#man").val();
  var pc1= $("#pc").val();
  var pn= $("#pn").val();
  var ln= $("#ln").val();
  
    
    
      var url = script_url+"?callback=ctrlq&ln="+ln+"&pn="+pn+"&pc="+pc1+"&man="+man+"&action=insert";
    
  
      var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "jsonp"
      });
  
    }
  
  
    
    
    function delete_value(){
    $("#re").css("visibility","hidden");
       document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');
  
    var man= $("#man").val();
  var pc1= $("#pc").val();
  var pn= $("#pn").val();
  var ln= $("#ln").val();
  
    
    
      var url = script_url+"?callback=ctrlq&ln="+ln+"&pn="+pn+"&pc="+pc1+"&man="+man+"&action=delete";
    
  
      var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "jsonp"
      });
  
    }
  
  
    
    
    // print the returned data
    function ctrlq(e) {
    
    
    $("#re").html(e.result);
    $("#re").css("visibility","visible");
    read_value();
    
    }
    
    
  
    
  function read_value() {
  
  $("#re").css("visibility","hidden");
     
     document.getElementById("loader").style.visibility = "visible";
   var url = script_url+"?action=read";
  
  $.getJSON(url, function (json) {
  

    // Set the variables from the results array
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.setAttribute('class', 'table table-hover table-bordered');
       
        

    var header = table.createTHead();
      var row = header.insertRow(0);    
		  var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      
  
      
		cell1.innerHTML = "<b>Product Code</b>";
    cell2.innerHTML = "<b>Product Name</b>";
    cell3.innerHTML = "<b>Manufacturer</b>";
    cell4.innerHTML = "<b>Link</b>";
   

    var body = table.createTBody();
    body.setAttribute('id', 'myTable');
      var row = body.insertRow(0);
      
      

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
				var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].PC;
				    tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].PN;
            tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].MAN;
            tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].BTN;
            
            }

        //  ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		$("#re").css("visibility","visible");
    });
	};
  
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#togglerbtn").click(function(){
      $(this).toggleClass('far fa-caret-square-down fa-2x');
        $(this).toggleClass('far fa-caret-square-up fa-2x');
});
});

  