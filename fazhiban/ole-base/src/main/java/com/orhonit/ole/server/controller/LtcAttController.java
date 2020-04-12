package com.orhonit.ole.server.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orhonit.ole.common.datatables.TableRequest;
import com.orhonit.ole.common.datatables.TableRequestHandler;
import com.orhonit.ole.common.datatables.TableResponse;
import com.orhonit.ole.common.datatables.TableRequestHandler.CountHandler;
import com.orhonit.ole.common.datatables.TableRequestHandler.ListHandler;
import com.orhonit.ole.common.utils.AppUtil;
import com.orhonit.ole.server.dao.LepDao;
import com.orhonit.ole.server.dao.LtcAttDao;
import com.orhonit.ole.server.model.LarAtt;
import com.orhonit.ole.server.model.LtcAtt;
import com.orhonit.ole.server.model.LtcConnAtt;
import com.orhonit.ole.sys.model.User;
import com.orhonit.ole.sys.utils.UserUtil;

import io.swagger.annotations.ApiOperation;
/**
 *执法主体列表控制器
 * 
 */
@RestController
@RequestMapping("/LtcAtts")
public class LtcAttController {

	@Autowired
	private LtcAttDao ltcAttDao;
	
	@Autowired
	private LepDao lepDao;

	@GetMapping
	@ApiOperation(value = "主体列表")
	public TableResponse<LtcAtt> list(TableRequest request) {
		User user = UserUtil.getCurrentUser();
		LtcAtt ltcAtt = ltcAttDao.getLtc(user.getDept_id());
		request.getParams().put("dept_id", user.getDept_id());
		if(ltcAtt != null && ltcAtt.getDept_property() == 3 && ltcAtt.getLaw_type().equals("2")){
			//法制办
			//如果是市本级的法制办则显示所有
			if(!user.getArea_id().equals("15")){
				request.getParams().put("lx_type", 1);
			}
		}else if(user.getUsername().equals("admin")){
			//管理员不过滤任何数据
		}else{
			//委办局
			request.getParams().put("lx_type", 2);
			request.getParams().put("deptIds", lepDao.execFunction(null, user.getDept_id()));
		}
		
		return TableRequestHandler.<LtcAtt> builder().countHandler(new CountHandler() {

		@Override
		public int count(TableRequest request) {
				int result=ltcAttDao.count(request.getParams());
				return result;
		}
		}).listHandler(new ListHandler<LtcAtt>() {

			@Override
			public List<LtcAtt> list(TableRequest request) {
				return ltcAttDao.list(request.getParams(), request.getStart(), request.getLength());
			}
		}).build().handle(request);
	}
	
	@GetMapping("/serconns")
	@ApiOperation(value = "主体列表")
	public TableResponse<LarAtt> conlist(TableRequest request) {

		return TableRequestHandler.<LarAtt> builder().countHandler(new CountHandler() {

			@Override
			public int count(TableRequest request) {
					return 1;
			}
			}).listHandler(new ListHandler<LarAtt>() {
				@Override
				public List<LarAtt> list(TableRequest request) {
					List<LarAtt> larlists=ltcAttDao.larlists(request.getParams());;
					return larlists;
				}
			}).build().handle(request);
		
	}
	
	@GetMapping("/coms")
	@ApiOperation(value = "主体列表")
	public TableResponse<LtcAtt> comlist(TableRequest request) {

		return TableRequestHandler.<LtcAtt> builder().countHandler(new CountHandler() {

			@Override
			public int count(TableRequest request) {
					return 1;
			}
			}).listHandler(new ListHandler<LtcAtt>() {
				@Override
				public List<LtcAtt> list(TableRequest request) {
					List<LtcAtt> larlists=ltcAttDao.comlists(request.getParams());;
					return larlists;
				}
			}).build().handle(request);
		
	}
	
	@GetMapping("/parents")
	@ApiOperation(value = "一级菜单")
	public List<Map<String, Object>> parentList() {
		List<LtcAtt> parents = ltcAttDao.getLtcs();
		List<Map<String,Object>> listMap=new ArrayList<>();
		Map<String,Object> map;
		for(LtcAtt per:parents){
			map=new HashMap<>();
			map.put("id",per.getId());
			map.put("name", per.getName());
			listMap.add(map);
		}
		return listMap;
	}
	
	@GetMapping("/ltcs")
	@ApiOperation(value = "区划")
	public List<Map<String, Object>> ltcAll() {
		List<LtcAtt> areaAll = ltcAttDao.getLtcs();
		List<Map<String,Object>> listMap=new ArrayList<>();
		Map<String,Object> map;
		for(LtcAtt per:areaAll){
			map=new HashMap<>();
			map.put("id",per.getId());
			map.put("parentId",per.getParent_id());
			map.put("text", per.getName());
			listMap.add(map);
		}
		List<Map<String,Object>> retMap=AppUtil.list2Tree(listMap, "parentId", "id",null);
		return retMap;
	}
	
	
	@GetMapping("/ltcsmgl")
	@ApiOperation(value = "主体蒙文树")
	public List<Map<String, Object>> ltcAllMgl() {
		List<LtcAtt> areaAll = ltcAttDao.getLtcs();
		List<Map<String,Object>> listMap=new ArrayList<>();
		Map<String,Object> map;
		for(LtcAtt per:areaAll){
			map=new HashMap<>();
			map.put("id",per.getId());
			map.put("parentId",per.getParent_id());
			map.put("text", per.getMgl_name());
			listMap.add(map);
		}
		List<Map<String,Object>> retMap=AppUtil.list2Tree(listMap, "parentId", "id",null);
		return retMap;
	}
	
	@ApiOperation(value = "")
	@GetMapping("/ltcss/{id}")
	public List<Map<String, Object>> getLtc(@PathVariable String id) {
		List<LtcAtt> areaAll = ltcAttDao.getLtcss(id);
		List<Map<String,Object>> listMap=new ArrayList<>();
		Map<String,Object> map;
		for(LtcAtt per:areaAll){
			map=new HashMap<>();
			map.put("id",per.getId());
			map.put("parentId",per.getParent_id());
			map.put("text", per.getName());
			listMap.add(map);
		}
		List<Map<String,Object>> retMap=AppUtil.list2Tree(listMap, "parentId", "id",null);
		return retMap;
	}
}