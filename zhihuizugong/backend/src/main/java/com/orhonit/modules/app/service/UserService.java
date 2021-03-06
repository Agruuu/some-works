package com.orhonit.modules.app.service;


import com.baomidou.mybatisplus.service.IService;
import com.orhonit.modules.app.entity.AppUserEntity;
import com.orhonit.modules.app.form.LoginForm;

import java.util.List;

/**
 * 用户
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2017-03-23 15:22:06
 */
public interface UserService extends IService<AppUserEntity> {

	AppUserEntity queryByMobile(String mobile);

	/**
	 * 用户登录
	 * @param form    登录表单
	 * @return        返回用户ID
	 */
	long login(LoginForm form);
}
