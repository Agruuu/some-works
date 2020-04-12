package com.orhonit.modules.generator.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import com.orhonit.common.utils.PageUtils;
import com.orhonit.common.utils.R;
import com.orhonit.modules.generator.dao.ZgMeetFlowDao;
import com.orhonit.modules.generator.entity.ZgMeetFlowEntity;
import com.orhonit.modules.generator.service.ZgMeetFlowService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * 会议流程
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-06-17 10:32:02
 */
@RestController
@RequestMapping("generator/zgmeetflow")
public class ZgMeetFlowController extends AbstractController{
    @Autowired
    private ZgMeetFlowService zgMeetFlowService;

    @Autowired
    private ZgMeetFlowDao zgMeetFlowDao;
    /**
     * 列表
     */
    @RequestMapping("/list")
    //@RequiresPermissions("generator:zgmeetflow:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = zgMeetFlowService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    //@RequiresPermissions("generator:zgmeetflow:info")
    public R info(@PathVariable("id") String id){
		ZgMeetFlowEntity zgMeetFlow = zgMeetFlowService.selectById(id);

        return R.ok().put("zgMeetFlow", zgMeetFlow);
    }

    /**
     * 保存
     */
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    //@RequiresPermissions("generator:zgmeetflow:save")
    public R save(@RequestBody ZgMeetFlowEntity zgMeetFlow){
        Long userId = getUserId();
        zgMeetFlow.setCreateUserId(userId);
        List<ZgMeetFlowEntity> list = zgMeetFlowDao.findFlow(zgMeetFlow.getMeetId());
        if (list != null && list.size() > 0){
            zgMeetFlowService.save(zgMeetFlow);
            return R.ok().put("status","已更新最新数据");
        }else {
            zgMeetFlowService.save(zgMeetFlow);
            return R.ok();
        }
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update",method = RequestMethod.PUT)
    //@RequiresPermissions("generator:zgmeetflow:update")
    public R update(@RequestBody ZgMeetFlowEntity zgMeetFlow){
		zgMeetFlowService.updateById(zgMeetFlow);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
   // @RequiresPermissions("generator:zgmeetflow:delete")
    public R delete(String id){
		zgMeetFlowService.deleteById(id);
        return R.ok();
    }

}
