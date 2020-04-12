package com.orhonit.modules.sys.controller;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.crypto.hash.Sha256Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.orhonit.common.utils.R;
import com.orhonit.modules.sys.entity.SysUserEntity;
import com.orhonit.modules.sys.form.SysLoginForm;
import com.orhonit.modules.sys.service.SysCaptchaService;
import com.orhonit.modules.sys.service.SysUserService;
import com.orhonit.modules.sys.service.SysUserTokenService;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * 登录相关
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2016年11月10日 下午1:15:31
 */
@RestController
public class SysLoginController extends AbstractController {
	@Autowired
	private SysUserService sysUserService;
	@Autowired
	private SysUserTokenService sysUserTokenService;
	@Autowired
	private SysCaptchaService sysCaptchaService;

	/**
	 * 验证码
	 */
	@GetMapping("captcha.jpg")
	public void captcha(HttpServletResponse response, String uuid)throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-store, no-cache");
		response.setContentType("image/jpeg");

		//获取图片验证码
		BufferedImage image = sysCaptchaService.getCaptcha(uuid);

		ServletOutputStream out = response.getOutputStream();
		ImageIO.write(image, "jpg", out);
		IOUtils.closeQuietly(out);
	}

	/**
	 * 登录
	 */
	@PostMapping("/sys/login")
	public Map<String, Object> login(@RequestBody SysLoginForm form)throws IOException {
//		boolean captcha = sysCaptchaService.validate(form.getUuid(), form.getCaptcha());
//		if(!captcha){
//			return R.error("验证码不正确");
//		}

		//用户信息
		//SysUserEntity user = sysUserService.queryByUserName(form.getUsername());
		if (form.getMobile() != null && StringUtils.isNotBlank(form.getMobile())){
			//SysUserEntity user = sysUserService.queryByMobile(form.getMobile());
			SysUserEntity user = null;
			List<SysUserEntity> us = sysUserService.queryMobile(form.getMobile());
			if (us != null && us.size() > 0){
				user = us.get(0);
			}
			//账号不存在、密码错误
			if(user == null || !user.getPassword().equals(new Sha256Hash(form.getPassword(), user.getSalt()).toHex())) {
				return R.error("账号或密码不正确");
			}

			//账号锁定
			if(user.getStatus() == 0){
				return R.error("账号已被锁定,请联系管理员");
			}

			//生成token，并保存到数据库
			R r = sysUserTokenService.createToken(user.getUserId());
			return r;
		}else if (form.getUserNickname() != null && StringUtils.isNotBlank(form.getUserNickname())){
			SysUserEntity user = sysUserService.queryByIdCard(form.getUserNickname());
			//账号不存在、密码错误
			if(user == null || !user.getPassword().equals(new Sha256Hash(form.getPassword(), user.getSalt()).toHex())) {
				return R.error("账号或密码不正确");
			}

			//账号锁定
			if(user.getStatus() == 0){
				return R.error("账号已被锁定,请联系管理员");
			}

			//生成token，并保存到数据库
			R r = sysUserTokenService.createToken(user.getUserId());
			return r;
		}
		return null;
	}


	/**
	 * 退出
	 */
	@PostMapping("/sys/logout")
	public R logout() {
		sysUserTokenService.logout(getUserId());
		return R.ok();
	}
	
}
