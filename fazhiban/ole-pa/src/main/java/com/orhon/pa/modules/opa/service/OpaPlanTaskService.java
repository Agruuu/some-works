/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.orhon.pa.modules.opa.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orhon.pa.common.persistence.BaseEntity;
import com.orhon.pa.common.persistence.Page;
import com.orhon.pa.common.service.CrudService;
import com.orhon.pa.common.utils.IdGen;
import com.orhon.pa.common.utils.Status;
import com.orhon.pa.modules.opa.dao.OpaPlanDao;
import com.orhon.pa.modules.opa.dao.OpaPlanTaskDao;
import com.orhon.pa.modules.opa.dao.OpaTaskAppealDao;
import com.orhon.pa.modules.opa.entity.OpaPlan;
import com.orhon.pa.modules.opa.entity.OpaPlanTask;
import com.orhon.pa.modules.opa.entity.OpaTaskAppeal;
import com.orhon.pa.modules.sys.entity.User;
import com.orhon.pa.modules.sys.utils.DictUtils;
import com.orhon.pa.modules.sys.utils.UserUtils;

/**
 * 计划任务模块Service
 * @author Shawn
 * @version 2017-04-26
 */
@Service
@Transactional(readOnly = true)
public class OpaPlanTaskService extends CrudService<OpaPlanTaskDao, OpaPlanTask> {
	
	@Autowired
	OpaPlanTaskDao opaPlanTaskDao;
	@Autowired
	OpaPlanDao opaPlanDao;
	@Autowired
	OpaTaskAppealDao opaTaskAppealDao;
	
	public OpaPlanTask get(String id) {
		OpaPlanTask opaPlanTask = super.get(id);
		return opaPlanTask;
	}
	
	public List<OpaPlanTask> findList(OpaPlanTask opaPlanTask) {
		return super.findList(opaPlanTask);
	}
	
	public Page<OpaPlanTask> findPage(Page<OpaPlanTask> page, OpaPlanTask opaPlanTask) {
		return super.findPage(page, opaPlanTask);
	}
	
	@Transactional(readOnly = false)
	public void save(OpaPlanTask opaPlanTask) {
		super.save(opaPlanTask);
	}
	
	@Transactional(readOnly = false)
	public void delete(OpaPlanTask opaPlanTask) {
		super.delete(opaPlanTask);
	}

	public List<Status> findListByStatus(Map<String, Object> param) {
		return opaPlanDao.findListByStatus(param);
	}
	
	public Double getChildSum(OpaPlanTask parent) {
		return opaPlanTaskDao.getChildSum(parent);
	}

	public boolean hasCommonChild(OpaPlanTask opt) {
		OpaPlanTask param = new OpaPlanTask();
		param.setPlanId(opt.getPlanId());
		param.setOffice(opt.getOffice());
		param.setItemId(opt.getItemId());
		param.setMethod(DictUtils.getDictValue("机器汇总", "opa_item_method", ""));
		boolean has = true;
		List<OpaPlanTask> list = opaPlanTaskDao.findCommonChild(param);
		if(list == null || list.isEmpty()){
			has = false;
		}
		return has;
	}

	public OpaPlanTask findParentTask(OpaPlanTask parent) {
		return opaPlanTaskDao.findParentTask(parent);
	}
	
	@Transactional(readOnly = false)
	public void applyAuditPass(OpaPlanTask opaPlanTask) {
		opaPlanTask = opaPlanTaskDao.get(opaPlanTask);
		opaPlanTask.setStatus(DictUtils.getDictValue("待审核", "opa_planTask_status", ""));
		super.save(opaPlanTask);
		
		//全部审核后更新状态为已审核
		String planId = opaPlanTask.getPlanId();
		OpaPlanTask param = new OpaPlanTask();
		param.setPlanId(planId);
		param.setStatus(DictUtils.getDictValue("待执行", "opa_planTask_status", ""));
		List<OpaPlanTask> list = opaPlanTaskDao.findNotPassList(param);
		if(null == list || list.isEmpty()){
			param.setStatus(DictUtils.getDictValue("待执行", "opa_planTask_status", ""));
			opaPlanTaskDao.setAllToStatus(param);
			OpaPlan opaPlan = opaPlanDao.get(planId);
			opaPlan.setStatus(DictUtils.getDictValue("待执行", "opa_plan_status", ""));
			opaPlanDao.update(opaPlan);
		}
		
	}
	
	@Transactional(readOnly = false)
	public void applyAuditPass1(OpaPlanTask opaPlanTask) {
		opaPlanTask = opaPlanTaskDao.get(opaPlanTask);
		opaPlanTask.setStatus(DictUtils.getDictValue("待执行", "opa_planTask_status", ""));
		super.save(opaPlanTask);
		
		//全部审核后更新状态为已审核
		String planId = opaPlanTask.getPlanId();
		OpaPlanTask param = new OpaPlanTask();
		param.setPlanId(planId);
		param.setStatus(DictUtils.getDictValue("待执行", "opa_planTask_status", ""));
		List<OpaPlanTask> list = opaPlanTaskDao.findNotPassList(param);
		opaPlanTaskDao.update(opaPlanTask);
		if(null == list || list.isEmpty()){
			param.setStatus(DictUtils.getDictValue("待评分", "opa_planTask_status", ""));
			opaPlanTaskDao.setAllToStatus(param);
			OpaPlan opaPlan = opaPlanDao.get(planId);
			opaPlan.setStatus(DictUtils.getDictValue("待执行", "opa_plan_status", ""));
			opaPlanDao.update(opaPlan);
		}
	}
	@Transactional(readOnly=false)
	public void appealatta(OpaPlanTask opaPlanTask) {
		User user = UserUtils.getUser();
		OpaTaskAppeal appeal = new OpaTaskAppeal();
		appeal.setId(IdGen.uuid());
		appeal.setPlanId(opaPlanTask.getId());
		appeal.setOffice(opaPlanTask.getOffice());
		appeal.setTaskId(opaPlanTask.getId());
		appeal.setName(opaPlanTask.getName());
		appeal.setType(opaPlanTask.getType());
		appeal.setMethod(opaPlanTask.getMethod());
		appeal.setIfNum(opaPlanTask.getIfNum());
		appeal.setValue(opaPlanTask.getValue());
		appeal.setScore(opaPlanTask.getScore());
		appeal.setCount(opaPlanTask.getCount());
		appeal.setCode(opaPlanTask.getCode());
		appeal.setAttachedPath(opaPlanTask.getAttachedPath());
		appeal.setCreateBy(user);
		appeal.setUpdateDate(opaPlanTask.getUpdateDate());
		appeal.setCreateDate(new Date());
		appeal.setRemarks(opaPlanTask.getRemarks());
		appeal.setUpdateBy(user);
		appeal.setAuditorOfficeId(opaPlanTask.getAuditorOfficeId());
		appeal.setDelFlag(BaseEntity.DEL_FLAG_NORMAL);
		appeal.setAuditorId(opaPlanTask.getAuditorId()); 
		opaTaskAppealDao.insert(appeal);
	}

	public int findListCount(OpaPlanTask opaPlanTask) {
		return opaPlanTaskDao.findListCount(opaPlanTask);
	}
}