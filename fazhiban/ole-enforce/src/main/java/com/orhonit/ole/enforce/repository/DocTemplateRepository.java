package com.orhonit.ole.enforce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.orhonit.ole.enforce.entity.DocTemplateEntity;

public interface DocTemplateRepository extends JpaRepository<DocTemplateEntity, String>, JpaSpecificationExecutor<DocTemplateEntity>{

	DocTemplateEntity findByCode(String tempCode);
	
	DocTemplateEntity findById(String id);
	
}
