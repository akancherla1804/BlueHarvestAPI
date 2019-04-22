package com.bh.ui.dto;

import java.io.Serializable;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Customers implements Serializable {

	private static final long serialVersionUID = 4507088815341804389L;
	private Set<String> customerIds;

}
