package com.orhonit.ole.enforce.dto.ps;

import lombok.Data;

@Data
public class PsDeptListDTO {
	
	private String id;
	
	private String code;
	
	private String name;
	
	private String legalPerson;
	
	private String areaId;
	
	private String nameSpell;
	
	private String shortName;
	
	private String address;
	
	private String parentId;
	
	private String tel;
	
	private String deptProperty;
	//执法人员总数
	private String personCount;
	//法律总数
	private String lawCount;
	//委托机构总数
	private String deptAgentCount;
	//权责总数
	private String potenceCount;
	//案件总数
	private String caseCount;
	
	private String deptShortNameMgl;
	
	private String deptNameMgl;
	
	private String legalPersonMgl;
	
	private String addressMgl;

}
