package com.orhon.smartcampus.modules.baseinfo.controller;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.orhon.smartcampus.framework.controller.ApiController;
import com.orhon.smartcampus.modules.baseinfo.entity.Holidays;
import com.orhon.smartcampus.modules.baseinfo.service.IHolidaysService;
import com.orhon.smartcampus.utils.PageDto;
import com.orhon.smartcampus.utils.R;

/**
 * <p>
 * 节假日管理 前端控制器
 * </p>
 *
 * @author Orhon
 */

@RestController
@RequestMapping(value = "/baseinfo/holidays", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class HolidaysRestController extends ApiController {
	
	@Autowired
	private IHolidaysService service;
	
	/**
	 * 条件加分页查询集合
	 * @param Holidays
	 * @param dto
	 * @return
	 */
	@GetMapping(value="/getList")
	@ResponseBody
	public R getList(Holidays holidays,PageDto dto) {
		IPage<Holidays> page = new Page<>(dto.getPage(),dto.getLimit());
		QueryWrapper<Holidays> queryWrapper = new QueryWrapper<>();
		queryWrapper.setEntity(holidays);
	    IPage<Holidays> pagelist = service.page(page, queryWrapper);
	    return R.ok().put("data", pagelist);
	}
	
	/**
	 * id查询一条数据
	 * @param Holidays
	 * @param dto
	 * @return
	 */
	@GetMapping(value="/getById/{id}")
	@ResponseBody
	public R getById(@PathVariable("id") Integer id) {
		Holidays byId = service.getById(id);
	    return R.ok().put("data", byId);
	}
	
	/**
	 * id删除数据
	 * @param Holidays
	 * @param dto
	 * @return
	 */
	@DeleteMapping(value="/delById/{id}")
	@ResponseBody
	public R delById(@PathVariable("id") Integer id) {
	    service.removeById(id);
	    return R.ok().put("msg", "删除成功");
	}
	
	/**
	 * 新增一条记录
	 * @param Holidays
	 * @param dto
	 * @return
	 */
	@PostMapping(value="/save")
	@ResponseBody
	public R save(@RequestBody HashMap<String, Object> maps) {
		Holidays holidays = JSONObject.parseObject(JSONObject.toJSONString(maps), Holidays.class);
	    boolean save = service.save(holidays);
	    if (save) {
			return R.ok().put("data",holidays);
		}
	    return R.error().put("msg" , service.getValidationData().iterator().next().getMessage());
	}
		
	/**
	 * id修改一条记录
	 * @param Holidays
	 * @param dto
	 * @return
	 */
	@PutMapping("/update")
	@ResponseBody
	public R update(@RequestBody HashMap<String, Object> maps) {
		Holidays holidays = JSONObject.parseObject(JSONObject.toJSONString(maps), Holidays.class);
		service.updateById(holidays);
		return R.ok().put("data",holidays);
	}
	

}
