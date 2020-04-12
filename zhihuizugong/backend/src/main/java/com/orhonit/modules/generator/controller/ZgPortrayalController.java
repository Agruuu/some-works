package com.orhonit.modules.generator.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.Map;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.orhonit.common.utils.PageUtils;
import com.orhonit.common.utils.R;
import com.orhonit.modules.generator.entity.ZgPortrayalEntity;
import com.orhonit.modules.generator.service.WywNoteService;
import com.orhonit.modules.generator.service.ZgPortrayalService;




/**
 * 组工画像
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-06-10 10:34:45
 */
@RestController
@RequestMapping("generator/zgportrayal")
public class ZgPortrayalController extends AbstractController{
    @Autowired
    private ZgPortrayalService zgPortrayalService;


    /**
     * 列表
     */
    @RequestMapping("/list")
    //@RequiresPermissions("generator:zgportrayal:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = zgPortrayalService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    //@RequiresPermissions("generator:zgportrayal:info")
    public R info(@PathVariable("id") String id){
		ZgPortrayalEntity zgPortrayal = zgPortrayalService.selectById(id);

        return R.ok().put("zgPortrayal", zgPortrayal);
    }

    /**
     * 保存
     */
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    //@RequiresPermissions("generator:zgportrayal:save")
    public R save(@RequestBody ZgPortrayalEntity zgPortrayal){
        Long userId = getUserId();
        zgPortrayal.setUserId(userId);
        zgPortrayalService.save(zgPortrayal);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update",method = RequestMethod.PUT)
    //@RequiresPermissions("generator:zgportrayal:update")
    public R update(@RequestBody ZgPortrayalEntity zgPortrayal){
		zgPortrayalService.updatePortrayal(zgPortrayal);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    //@RequiresPermissions("generator:zgportrayal:delete")
    public R delete(String id){
		zgPortrayalService.deleteById(id);

        return R.ok();
    }

}
