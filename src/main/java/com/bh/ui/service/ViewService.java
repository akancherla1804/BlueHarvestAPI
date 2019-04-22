package com.bh.ui.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bh.ui.constants.Constants;
import com.bh.ui.dto.AddAccountRequest;
import com.bh.ui.dto.CustomerDetailsResponse;
import com.bh.ui.dto.Customers;
import com.bh.ui.dto.TransactionRequest;

@Service
public class ViewService {

	private final Logger logger = LoggerFactory.getLogger(ViewService.class);

	@Autowired
	RestTemplate restTemplate;

	@Autowired
	private Environment environment;

	public Set<String> getCustomerIds() {
		logger.info("Start UIService.getCustomerIds() --> Get all Customer Ids in the system");
		Customers customers = restTemplate.getForObject(environment.getProperty("endpoint.gateway.customerIds"),
				Customers.class);
		return customers.getCustomerIds();
	}

	public CustomerDetailsResponse getCustomerDetails(String customerId) {
		logger.info("Start UIService.getCustomerDetails() --> Get Customer details for the selected customer Id");
		Map<String, String> uriVariables = new HashMap<>();
		uriVariables.put(Constants.CUSTOMER_ID, customerId);
		CustomerDetailsResponse customerDetailsResponse = restTemplate.getForObject(
				environment.getProperty("endpoint.gateway.customer.details"), CustomerDetailsResponse.class,
				uriVariables);
		return customerDetailsResponse;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public CustomerDetailsResponse addAccount(AddAccountRequest addAccountRequest) {
		logger.info("Start UIService.addAccount() --> To Add Seconday Current Account for the existing Customer");

		HttpHeaders headers = new HttpHeaders();
		headers.set(Constants.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
		headers.set(Constants.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
		HttpEntity entity = new HttpEntity(addAccountRequest, headers);
		CustomerDetailsResponse customerDetailsResponse = restTemplate.postForObject(
				environment.getProperty("endpoint.gateway.customer.addAccount"), entity, CustomerDetailsResponse.class);
		return customerDetailsResponse;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public CustomerDetailsResponse updateAccount(TransactionRequest transactionRequest) {
		logger.info("Start UIService.updateAccount() --> Update Account during transactions");

		HttpHeaders headers = new HttpHeaders();
		headers.set(Constants.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
		headers.set(Constants.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
		HttpEntity entity = new HttpEntity(transactionRequest, headers);
		CustomerDetailsResponse customerDetailsResponse = restTemplate.postForObject(
				environment.getProperty("endpoint.gateway.customer.addTransaction"), entity,
				CustomerDetailsResponse.class);
		return customerDetailsResponse;
	}
}
