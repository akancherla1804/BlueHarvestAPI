package com.bh.ui.dto;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AccountDetailsResponse implements Serializable {

	private static final long serialVersionUID = -3203670408304550247L;
	public double balance;
	public String accountType;
	public List<TransactionDetailsResponse> transactions;
}
