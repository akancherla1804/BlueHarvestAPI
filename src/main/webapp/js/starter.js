$(document).ready(
		function() {

//					$('#tabl1 a').click(function () {
//						 $('#tabsl1').removeClass('active');
//						 $('#tabsl2').removeClass('active');
//						 $('#tabsl3').removeClass('active');
//						 var id = $(this).parent('li').attr('id');
//						 $("#"+id).addClass("active");
//					});
//
//					$('#tabl2 a').click(function () {
//						 $('#tabsl1').removeClass('active');
//						 $('#tabsl2').removeClass('active');
//						 $('#tabsl3').removeClass('active');
//						 var id = $(this).parent('li').attr('id');
//						 $("#"+id).addClass("active");
//					});
//
//					$('#tabl3 a').click(function () {
//						 $('#tabsl1').removeClass('active');
//						 $('#tabsl2').removeClass('active');
//						 $('#tabsl3').removeClass('active');
//						 var id = $(this).parent('li').attr('id');
//						 $("#"+id).addClass("active");
//					});
					
			/*function getCustomerIds(){
				
				$.ajax({
					type: "GET",
					url: "/gateway-service/account/customers",
					beforeSend: function(){
						if ($('.errorMessageStyle').text() == "")  {
							blurDivForCountrySelect = document.createElement("container");
							blurDivForCountrySelect.id = "blurDivForCountrySelect";
							blurDivForCountrySelect.style.cssText = "position:absolute; top:0; right:0; width:100%; height:" + $(document).height() + "px; background-color: #C0C0C0; opacity:0.6";
						    document.getElementsByTagName("body")[0].appendChild(blurDivForCountrySelect);
//						    $("a").addClass("disabled");
//							$('#loadingImage').show();
						}
				    },
				    success:function(data){
//				    	var cDetails=getcDetails(data);
//				    	$("#AddSecAccDetails").html(cDetails);
				    	alert(data)
				    	
				    	
				    },
					complete: function(){
						document.getElementsByTagName("body")[0].removeChild(blurDivForCountrySelect);
//						$("a").removeClass("disabled");
//						$('#loadingImage').hide();
					},
					error:function(xhr){
						alert('unable to fetch the Customer Details');
						return;
					}
				})
				
			}	*/

			$("#secAccButton").click(function(){
				$("#AddSecAccDetails").html('');
				var cid = $("#addSecForCID").val();
				var initCred = $("#initCred").val();
				var errorMess = "";
				if(cid == ""){
					errorMess += '<span style="color:red;font-weight:bold">Please Select Customer Id to fetch the details</span><br />'
					$("#AddSecAccDetails").html('<span style="color:red;font-weight:bold">Please Select Customer Id to fetch the details</span>')
				}if(initCred == "" || initCred < 0 || isNaN(initCred)){
					errorMess += '<span style="color:red;font-weight:bold">Please enter Initial Credit value (greater than or equal to 0)</span><br />'
				}
				if (errorMess == ""){
					$.ajax({
						type: "GET",
						url: "/customer/addAccount",
						contentType:'application/json',
						type: "POST",
						data: JSON.stringify({ 'customerId': cid, 'initialCredit':initCred }),
						beforeSend: function(){
							if ($('.errorMessageStyle').text() == "")  {
								blurDivForCountrySelect = document.createElement("container");
								blurDivForCountrySelect.id = "blurDivForCountrySelect";
								blurDivForCountrySelect.style.cssText = "position:absolute; top:0; right:0; width:100%; height:" + $(document).height() + "px; background-color: #C0C0C0; opacity:0.6";
							    document.getElementsByTagName("body")[0].appendChild(blurDivForCountrySelect);
//							    $("a").addClass("disabled");
//								$('#loadingImage').show();
							}
					    },
					    success:function(data){
					    	var cDetails=getcDetails(data);
					    	$("#AddSecAccDetails").html(cDetails);
					    },
						complete: function(){
							document.getElementsByTagName("body")[0].removeChild(blurDivForCountrySelect);
//							$("a").removeClass("disabled");
//							$('#loadingImage').hide();
						},
						error:function(xhr){
							alert('unable to fetch the Customer Details');
							return;
						}
					})
					
				}
				if (errorMess != ""){
					$("#AddSecAccDetails").html(errorMess);
				}
				
			});	
			
			
			$("#transButton").click(function(){
				$("#TransactionDetails").html('');
				var cid = $("#CIDforAddTrans").val();
				var tamount = $("#tamount").val();
				var ttype = $("#ttype").val();
				var atype = $("#atype").val();
				var errorMess = "";
				if(cid == ""){
					errorMess += '<span style="color:red;font-weight:bold">Please Select Customer Id to fetch the details</span><br />'
					$("#AddSecAccDetails").html('<span style="color:red;font-weight:bold">Please Select Customer Id to fetch the details</span>')
				}if(tamount == "" || tamount <= 0 || isNaN(tamount)){
					errorMess += '<span style="color:red;font-weight:bold">Please enter Transaction Amount (greater than or equal to 0)</span><br />'
				}if(ttype == ""){
					errorMess += '<span style="color:red;font-weight:bold">Please Select Transaction Type</span><br />'
				}if(atype == ""){
					errorMess += '<span style="color:red;font-weight:bold">Please Select Account Type</span><br />'
				}
				if(errorMess == ""){
					$.ajax({
						type: "GET",
						url: "/customer/transaction",
						contentType:'application/json',
						type: "POST",
						data: JSON.stringify({ 'customerId': cid, 'transactionAmount':tamount, 'transactionType':ttype, 'accountType':atype }),
						beforeSend: function(){
							if ($('.errorMessageStyle').text() == "")  {
								blurDivForCountrySelect = document.createElement("container");
								blurDivForCountrySelect.id = "blurDivForCountrySelect";
								blurDivForCountrySelect.style.cssText = "position:absolute; top:0; right:0; width:100%; height:" + $(document).height() + "px; background-color: #C0C0C0; opacity:0.6";
							    document.getElementsByTagName("body")[0].appendChild(blurDivForCountrySelect);
//							    $("a").addClass("disabled");
//								$('#loadingImage').show();
							}
					    },
					    success:function(data){
					    	var cDetails=getcDetails(data);
				    		$("#TransactionDetails").html(cDetails);
					    },
						complete: function(){
							document.getElementsByTagName("body")[0].removeChild(blurDivForCountrySelect);
//							$("a").removeClass("disabled");
//							$('#loadingImage').hide();
						},
						error:function(xhr){
							alert('unable to fetch the Customer Details');
							return;
						}
					})
					
				}
				if (errorMess != ""){
					$("#AddSecAccDetails").html(errorMess);
				}
				
			});	
			
			$("#cidSelection").change(function(){
				$("#customerDetails").html('')
				var cid = $("#cidSelection").val();
				if(cid == ""){
					$("#customerDetails").html('<span style="color:red;font-weight:bold">Please Select Customer Id to fetch the details</span>')
				}else{
					$.ajax({
						type: "GET",
						url: "/customerDetails/"+cid,
						beforeSend: function(){
							if ($('.errorMessageStyle').text() == "")  {
								blurDivForCountrySelect = document.createElement("container");
								blurDivForCountrySelect.id = "blurDivForCountrySelect";
								blurDivForCountrySelect.style.cssText = "position:absolute; top:0; right:0; width:100%; height:" + $(document).height() + "px; background-color: #C0C0C0; opacity:0.6";
							    document.getElementsByTagName("body")[0].appendChild(blurDivForCountrySelect);
//							    $("a").addClass("disabled");
//								$('#loadingImage').show();
							}
					    },
					    success:function(data){
					    	var cDetails=getcDetails(data);
				    		$("#customerDetails").html(cDetails);
					    },
						complete: function(){
							document.getElementsByTagName("body")[0].removeChild(blurDivForCountrySelect);
//							$("a").removeClass("disabled");
//							$('#loadingImage').hide();
						},
						error:function(xhr){
							alert('unable to fetch the Customer Details');
							return;
						}
					})
				}
			});
			
			function getcDetails(data){
				var cDetails= "";
				if(data.errorMessage == null){
		    		cDetails += "<h2>Customer Details</h2>";
		    		cDetails += "<table><tr> <th>Customer Id :</th> <td>"+data.customerId+"</td></tr><tr> <th>Customer Name :</th> <td>"+data.name+"</td>";
		    		cDetails += "</tr><tr><th>Customer SurName :</th><td>"+data.surName+"</td></tr></table><br/>";
		    		
			    	if(data.accounts != null && data.accounts.length >0 ){
			    		cDetails += "<h2>Account and Transaction Details</h2>"
			    		for (var i=0;i<data.accounts.length;i++){
			    			cDetails +="<table><tr><th>Account Type:</th><td>"+data.accounts[i].accountType+"</td></tr>" +
			    					"<tr><th>Account Balance:</th><td>"+data.accounts[i].balance+"</td></tr>";
			    			if(data.accounts[i].transactions != null && data.accounts[i].transactions.length > 0){
			    				cDetails+="<tr><th>Trasnaction Date</th><th>Transaction Type</th><th>Transaction Amount</th></tr>"
			    				for(var j=0;j<data.accounts[i].transactions.length;j++){
			    					var trans = data.accounts[i].transactions[j];
			    					cDetails+="<tr><td>"+trans.transactionDate+"</td><td>"+trans.transactionDetail+"</td><td>"+trans.transactionAmount+"</td></tr>"
			    				}
			    			}
			    			cDetails+="</table>"
			    			cDetails+="<br /><br />";
			    		}
			    	}
			    		return cDetails;
			    	}else{
			    		cDetails+='<span style="color:red;font-weight:bold">'+data.errorMessage+'</span>';
			    		return cDetails;
			    	}
			};
//getCustomerIds();
		});
