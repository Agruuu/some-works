package com.orhonit.ole.enforce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orhonit.ole.common.constants.CommonParameters;
import com.orhonit.ole.common.datatables.TableRequest;
import com.orhonit.ole.common.datatables.TableRequestHandler;
import com.orhonit.ole.common.datatables.TableRequestHandler.CountHandler;
import com.orhonit.ole.common.datatables.TableRequestHandler.ListHandler;
import com.orhonit.ole.common.datatables.TableResponse;
import com.orhonit.ole.enforce.dto.CaseListDTO;
import com.orhonit.ole.enforce.service.caseinfo.CaseService;
import com.orhonit.ole.sys.model.User;
import com.orhonit.ole.sys.utils.UserUtil;

/**
 * 听证受理控制器
 * @author liuzh
 *
 */
@RestController
@RequestMapping("/heartingAccept")
public class HeartingAcceptController{
	
	@Autowired
	private CaseService caseService;

	/**
	 * 听证受理案件列表
	 * @param request
	 * @return
	 */
	@GetMapping(value = "/list")
	public TableResponse<CaseListDTO> listCase(TableRequest request) {

		User user = UserUtil.getCurrentUser();
		request.getParams().put("typeValue",CommonParameters.DictType.CASE_RES);
		request.getParams().put("caseStatus", CommonParameters.CaseStatus.TZSL);
		request.getParams().put("deptId", user.getDept_id());
		return TableRequestHandler.<CaseListDTO> builder().countHandler(new CountHandler() {
			@Override
			public int count(TableRequest request) {
				return caseService.getCasecount(request.getParams());
			}
		}).listHandler(new ListHandler<CaseListDTO>() {
			@Override
			public List<CaseListDTO> list(TableRequest request) {
				List<CaseListDTO> list = caseService.getCaseList(request.getParams(), request.getStart(),
						request.getLength());
				return list;
			}
		}).build().handle(request);
	}
}