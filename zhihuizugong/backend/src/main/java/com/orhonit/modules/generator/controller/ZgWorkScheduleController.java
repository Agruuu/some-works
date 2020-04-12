package com.orhonit.modules.generator.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.orhonit.common.utils.PageUtils;
import com.orhonit.common.utils.R;
import com.orhonit.modules.generator.entity.ZgWorkScheduleEntity;
import com.orhonit.modules.generator.service.ZgWorkScheduleService;




/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-05-05 17:52:46
 */
@RestController
@RequestMapping("generator/zgworkschedule")
public class ZgWorkScheduleController extends AbstractController{
    @Autowired
    private ZgWorkScheduleService zgWorkScheduleService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    //@RequiresPermissions("generator:zgworkschedule:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = zgWorkScheduleService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    //@RequiresPermissions("generator:zgworkschedule:info")
    public R info(@PathVariable("id") String id){
		ZgWorkScheduleEntity zgWorkSchedule = zgWorkScheduleService.selectById(id);

        return R.ok().put("zgWorkSchedule", zgWorkSchedule);
    }

    /**
     * 保存
     */
    @RequestMapping(value = "/save",method = RequestMethod.POST)
   // @RequiresPermissions("generator:zgworkschedule:save")
    public R save(@RequestBody ZgWorkScheduleEntity zgWorkSchedule){
        Long userId = getUserId();
        zgWorkSchedule.setUserId(userId);
        zgWorkScheduleService.save(zgWorkSchedule);
        System.out.println(zgWorkSchedule);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update",method = RequestMethod.PUT)
    //@RequiresPermissions("generator:zgworkschedule:update")
    public R update(@RequestBody ZgWorkScheduleEntity zgWorkSchedule){
		zgWorkScheduleService.updateById(zgWorkSchedule);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    //@RequiresPermissions("generator:zgworkschedule:delete")
    public R delete(String id){
		zgWorkScheduleService.deleteById(id);

        return R.ok();
    }

}
