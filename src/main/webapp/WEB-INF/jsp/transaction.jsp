<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>BlueHarvest Transactions</title>
<link rel="stylesheet" href="/css/style.css" type="text/css">
<script src="/js/jquery.min.js" type="text/javascript"></script>
<script src="/js/starter.js" type="text/javascript"></script>

</head>
<body>

	<a class="Top__logo active" aria-current="true" href="/"><img
		class="Top__logo-img" src="/img/blueharvest.png">
		<div class=" semi-bold Top_logo-title ">BLUE HARVEST</div></a>

	<ul id='tabs' class="tabss">
		<li id="tabl1"><a href='custDetails'>Customer Details</a></li>
		<li id="tabl2"><a href='addSecAccount'>Add Secondary Account</a></li>
		<li id="tabl3" class="active"><a href='addTransaction'>Customer
				Transactions</a></li>
	</ul>
	<div id='tab2' class="here">
		<c:if test="${not empty customerIds}">
		Select Customer Id:	<select name="customerSelect" id="CIDforAddTrans">
				<option value="">Select Customer Id</option>

				<c:forEach var="customerId" items="${customerIds}">
					<option value=${customerId}>${customerId}</option>
				</c:forEach>
			</select>
		</c:if>
		<br /> <br /> Transaction Amount: <input type="text"
			title="transactionAmount" id="tamount"> <br /> <br />
		Transaction Type: <select name="transtype" id="ttype">
			<option value="">Select Transaction Type</option>
			<option value="Credit">Credit</option>
			<option value="Debit">Debit</option>
		</select> <br /> <br /> Account Type: <select name="transtype" id="atype">
			<option value="">Select Account Type</option>
			<option value="Primary">Primary</option>
			<option value="Secondary">Secondary</option>
		</select> <br />
		<br /> <input type="button" value="Submit" id="transButton">

		<div id="TransactionDetails"></div>
	</div>
</body>
</html>