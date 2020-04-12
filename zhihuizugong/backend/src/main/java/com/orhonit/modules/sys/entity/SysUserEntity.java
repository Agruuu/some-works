package com.orhonit.modules.sys.entity;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.orhonit.common.validator.group.AddGroup;
import com.orhonit.common.validator.group.UpdateGroup;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 系统用户
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2016年9月18日 上午9:28:55
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@TableName("sys_user")
public class SysUserEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	/**
	 * 用户ID
	 */
	@TableId
	private Long userId;

	/**
	 * 用户名
	 */
	@NotBlank(message="用户名不能为空", groups = {AddGroup.class, UpdateGroup.class})
	private String username;
	
	/**
	 * 密码
	 */
	@NotBlank(message="密码不能为空", groups = AddGroup.class)
	private String password;

	/**
	 * 盐
	 */
	private String salt;

	/**
	 * 邮箱
	 */
	//@NotBlank(message="邮箱不能为空", groups = {AddGroup.class, UpdateGroup.class})
	@Email(message="邮箱格式不正确", groups = {AddGroup.class, UpdateGroup.class})
	private String email;

	/**
	 * 手机号
	 */
	private String mobile; 

	/**
	 * 状态  0：禁用   1：正常
	 */
	private Integer status;
	//真实姓名
	private String userTrueName; 
	//身份证号
	private String userNickname;
	//性别
	private Integer userSex;
	//名族
	private Integer userRace;
	//生日
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
	private Date userBirthday;
    //头像地址
	private String userHeadPicture;
	/**
	 * 所在支部
	 */
	private Integer userDept;
	/**
	 * 所在单位
	 */
	private Integer userOrg;
	/**
	 * 用户职务或退休前职务
	 */
	private String userWork;
	/**
	 * 是否是党员
	 */
	private Integer isPartyMember;
	/**
	 * 修改时间
	 */
	private Date updateTime;
	/**
	 * 用户所在地区编码
	 */
	private String userArea;
	/**
	 * 所在地x坐标
	 */
	private Double userAddressX;
	/**
	 * 所在地y坐标
	 */
	private Double userAddressY;
	/**
	 * 党支部
	 */
	private String userPartyPosts;
	

	/**
	 * 角色ID列表
	 */
	@TableField(exist=false)
	private List<Long> roleIdList;
	
	/**
	 * 创建者ID
	 */
	private Long createUserId;

	/**
	 * 创建时间
	 */
	private Date createTime;
	
	//新加字段 ----start
	/**
	 * 用户所属科室ID
	 */
	private Integer lowerId;
	
	/**
	 *  用户所属科室名称
	 */
	private String lowerName;
	
	/**
	 *  是否是领导
	 */
	private Integer isLeadership;
	
	/**
	 *  职务
	 */
	private String position;
	
	/**
	 *  是否科室负责人
	 */
	private Integer isHead;

	private Integer isCadres;
	/**
	 * 是否共用 1 组工用户 2 e家用户 3 共用用户
	 */
	private Integer isPublic;
	/**
	 * 是否单位领导 1 是 2 否  新加单位领导区分字段
	 */
	private Integer isUnitLeadership;
	/**
	 * 用户学习积分
	 */
	@TableField(exist = false)
	private Integer studyNumber;
	/**
	 * 任务完成量
	 */
	@TableField(exist = false)
	private Integer taskNumber;

	public Integer getStudyNumber() {
		return studyNumber;
	}

	public void setStudyNumber(Integer studyNumber) {
		this.studyNumber = studyNumber;
	}

	public Integer getTaskNumber() {
		return taskNumber;
	}

	public void setTaskNumber(Integer taskNumber) {
		this.taskNumber = taskNumber;
	}


	//------end

	public Integer getIsUnitLeadership() {
		return isUnitLeadership;
	}

	public void setIsUnitLeadership(Integer isUnitLeadership) {
		this.isUnitLeadership = isUnitLeadership;
	}
	public Integer getIsPublic() {
		return isPublic;
	}

	public void setIsPublic(Integer isPublic) {
		this.isPublic = isPublic;
	}
	public Integer getIsCadres() {
		return isCadres;
	}

	public void setIsCadres(Integer isCadres) {
		this.isCadres = isCadres;
	}

	public String getUserTrueName() {
		return userTrueName;
	}

	public void setUserTrueName(String userTrueName) {
		this.userTrueName = userTrueName;
	}

	public String getUserNickname() {
		return userNickname;
	}

	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}

	public Integer getUserSex() {
		return userSex;
	}

	public void setUserSex(Integer userSex) {
		this.userSex = userSex;
	}

	public Integer getUserRace() {
		return userRace;
	}

	public void setUserRace(Integer userRace) {
		this.userRace = userRace;
	}

	public Date getUserBirthday() {
		return userBirthday;
	}

	public void setUserBirthday(Date userBirthday) {
		this.userBirthday = userBirthday;
	}

	public String getUserHeadPicture() {
		return userHeadPicture;
	}

	public void setUserHeadPicture(String userHeadPicture) {
		this.userHeadPicture = userHeadPicture;
	}

	public Integer getUserDept() {
		return userDept;
	}

	public void setUserDept(Integer userDept) {
		this.userDept = userDept;
	}

	public Integer getUserOrg() {
		return userOrg;
	}

	public void setUserOrg(Integer userOrg) {
		this.userOrg = userOrg;
	}

	public String getUserWork() {
		return userWork;
	}

	public void setUserWork(String userWork) {
		this.userWork = userWork;
	}

	public Integer getIsPartyMember() {
		return isPartyMember;
	}

	public void setIsPartyMember(Integer isPartyMember) {
		this.isPartyMember = isPartyMember;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getUserArea() {
		return userArea;
	}

	public void setUserArea(String userArea) {
		this.userArea = userArea;
	}

	public Double getUserAddressX() {
		return userAddressX;
	}

	public void setUserAddressX(Double userAddressX) {
		this.userAddressX = userAddressX;
	}

	public Double getUserAddressY() {
		return userAddressY;
	}

	public void setUserAddressY(Double userAddressY) {
		this.userAddressY = userAddressY;
	}

	public String getUserPartyPosts() {
		return userPartyPosts;
	}

	public void setUserPartyPosts(String userPartyPosts) {
		this.userPartyPosts = userPartyPosts;
	}

	/**
	 * 设置：
	 * @param userId 
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}

	/**
	 * 获取：
	 * @return Long
	 */
	public Long getUserId() {
		return userId;
	}
	
	/**
	 * 设置：用户名
	 * @param username 用户名
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * 获取：用户名
	 * @return String
	 */
	public String getUsername() {
		return username;
	}
	
	/**
	 * 设置：密码
	 * @param password 密码
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * 获取：密码
	 * @return String
	 */
	public String getPassword() {
		return password;
	}
	
	/**
	 * 设置：邮箱
	 * @param email 邮箱
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * 获取：邮箱
	 * @return String
	 */
	public String getEmail() {
		return email;
	}
	
	/**
	 * 设置：手机号
	 * @param mobile 手机号
	 */
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	/**
	 * 获取：手机号
	 * @return String
	 */
	public String getMobile() {
		return mobile;
	}
	
	/**
	 * 设置：状态  0：禁用   1：正常
	 * @param status 状态  0：禁用   1：正常
	 */
	public void setStatus(Integer status) {
		this.status = status;
	}

	/**
	 * 获取：状态  0：禁用   1：正常
	 * @return Integer
	 */
	public Integer getStatus() {
		return status;
	}
	
	/**
	 * 设置：创建时间
	 * @param createTime 创建时间
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * 获取：创建时间
	 * @return Date
	 */
	public Date getCreateTime() {
		return createTime;
	}

	public List<Long> getRoleIdList() {
		return roleIdList;
	}

	public void setRoleIdList(List<Long> roleIdList) {
		this.roleIdList = roleIdList;
	}

	public Long getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(Long createUserId) {
		this.createUserId = createUserId;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public Integer getLowerId() {
		return lowerId;
	}

	public void setLowerId(Integer lowerId) {
		this.lowerId = lowerId;
	}

	public String getLowerName() {
		return lowerName;
	}

	public void setLowerName(String lowerName) {
		this.lowerName = lowerName;
	}

	public Integer getIsLeadership() {
		return isLeadership;
	}

	public void setIsLeadership(Integer isLeadership) {
		this.isLeadership = isLeadership;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Integer getIsHead() {
		return isHead;
	}

	public void setIsHead(Integer isHead) {
		this.isHead = isHead;
	}
	
}
