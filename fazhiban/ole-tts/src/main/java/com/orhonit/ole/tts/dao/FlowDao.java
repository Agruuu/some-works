package com.orhonit.ole.tts.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.orhonit.ole.tts.dto.FlowCommentDTO;
import com.orhonit.ole.tts.dto.FlowTaskCommentDTO;
import com.orhonit.ole.tts.dto.NextOpinionDTO;
import com.orhonit.ole.tts.dto.TaskDTO;
import com.orhonit.ole.tts.dto.api.ApiCaseDealDTO;
import com.orhonit.ole.tts.dto.api.ApiCaseTaskDTO;
import com.orhonit.ole.tts.dto.api.ApiCheckTaskDTO;
import com.orhonit.ole.tts.entity.LssuedEntity;

@Mapper
public interface FlowDao {
	
	List<TaskDTO> getUserTask(@Param("assignee") String assignee, @Param("start") Integer start,@Param("length") Integer length);

	List<ApiCaseTaskDTO> getCaseTask(@Param("flowType")String flowType,@Param("caseStatus")String caseStatus,@Param("caseName")String caseName,@Param("assignee") String assignee,@Param("queryDate")Integer queryDate, @Param("start") Integer start,@Param("length") Integer length);
	
	List<ApiCheckTaskDTO> getCheckDailyTask(@Param("checkStatus")String checkStatus,@Param("checkTitle")String checkTitle,@Param("assignee") String assignee,@Param("queryDate")Integer queryDate, @Param("start") Integer start,@Param("length") Integer length);
	
	List<ApiCheckTaskDTO> getCheckTask(@Param("checkStatus")String checkStatus,@Param("checkTitle")String checkTitle,@Param("assignee") String assignee,@Param("queryDate")Integer queryDate, @Param("start") Integer start,@Param("length") Integer length);
	/**
	 * 获取dpetId下拥有roleId权限的人员列表
	 * @param deptId
	 * @param roleId
	 * @return
	 */
	List<NextOpinionDTO> getHaveRoleOpinionByDeptId(@Param("deptId") String deptId, @Param("roleId") Integer roleId);
	
	/**
	 * 获取deptId所在区域法制办中拥有roleId权限的人员列表
	 * @param deptId
	 * @param roleId
	 * @return
	 */
	List<NextOpinionDTO> getHaveRoleOpinionByDeptIdForFZB(@Param("deptId") String deptId, @Param("roleId") Integer roleId);
	
	/**
	 * 根据caseNum查询taskId
	 * @param caseId 案件ID
	 * @param caseStatus 案件状态
	 */
	String findTaskIdBycaseNum(@Param("caseNum") String caseNum);

	List<FlowCommentDTO> getCommentByBusikeyAndTaskName(@Param("busikey") String busikey, @Param("taskName") String taskName);

	/**
	 * 获取案件的所有历史审批记录
	 * @param pid
	 * @return
	 */
	List<FlowTaskCommentDTO> getHisCommentByProcInstId(@Param("pid") String pid);
	
	/**
	 * 获取某种状态专项检查待办事项
	 * */
	List<LssuedEntity> getPcCheckTask(@Param("params")Map<String, Object> params, @Param("start") Integer start,@Param("length") Integer length);

	/**
	 * 统计某种状态专项检查待办事项
	 * */
	int getPcCheckcount(@Param("params")Map<String, Object> params);
	
	List<Map<String,String>> getPersonByDeptId(@Param("deptId") String deptId);
}
