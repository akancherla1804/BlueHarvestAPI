package com.bh.ui.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bh.ui.constants.Constants;
import com.bh.ui.dto.AddAccountRequest;
import com.bh.ui.dto.CustomerDetailsResponse;
import com.bh.ui.dto.TransactionRequest;
import com.bh.ui.service.ViewService;

@Controller
public class ViewController {

	@Autowired
	ViewService viewService;

	@GetMapping(Constants.URI_VIEW_CUSTOMER_DETAILS)
	public String showCustomerDetailsPage(ModelMap model) {
		model.addAttribute("customerIds", viewService.getCustomerIds());
		return "custDetails";
	}

	@GetMapping(Constants.URI_VIEW_ADD_SECONDARY_ACC)
	public String showAddSecAccPage(ModelMap model) {
		model.addAttribute("customerIds", viewService.getCustomerIds());
		return "addSecAccount";
	}

	@GetMapping(Constants.URI_VIEW_TRNSACTION)
	public String showAddTransactionPage(ModelMap model) {
		model.addAttribute("customerIds", viewService.getCustomerIds());
		return "transaction";
	}

	@GetMapping(Constants.URI_GET_CUSTOMER_DETAILS)
	@ResponseBody
	public CustomerDetailsResponse getCustomerDetails(@PathVariable String customerId) {
		return viewService.getCustomerDetails(customerId);
	}

	@PostMapping(Constants.URI_ADD_SECONDARY_ACCOUNT)
	@ResponseBody
	public CustomerDetailsResponse addAccount(@RequestBody AddAccountRequest addAccountRequest) {
		return viewService.addAccount(addAccountRequest);
	}

	@PostMapping(Constants.URI_ADD_TRANSACTION)
	@ResponseBody
	public CustomerDetailsResponse updateAccount(@RequestBody TransactionRequest transactionRequest) {
		return viewService.updateAccount(transactionRequest);
	}
}
