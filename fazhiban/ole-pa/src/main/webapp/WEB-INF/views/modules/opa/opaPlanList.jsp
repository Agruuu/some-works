<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>考核计划管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
			
		});
		function page(n,s){
			$("#pageNo").val(n);
			$("#pageSize").val(s);
			$("#searchForm").submit();
        	return false;
        }
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li class="active"><a href="${ctx}/opa/opaPlan/index">考核计划管理</a></li>
		<shiro:hasPermission name="pa:opaPlan:edit"><li><a href="${ctx}/opa/opaPlan/form">考核计划添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="opaPlan" action="${ctx}/opa/opaPlan/index" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>考核对象：</label>
				<form:select path="objectType" class="input-mini">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictBlankList('opa_object_type')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li><label>父级部门：</label>
				<sys:treeselect id="officeParentId" name="officeParentId" value="${opaPlan.officeParentId}" labelName="" labelValue="${opaPlan.officeParentName}"
					title="部门" url="/sys/office/treeData?type=2" cssClass="input-small" allowClear="true"/>
			</li>
			<li><label>名称：</label>
				<form:input path="name" htmlEscape="false" maxlength="200" class="input-medium"/>
			</li>
			<li><label>考核年份：</label>
				<form:input path="year" htmlEscape="false" maxlength="4" class="input-mini"/>
			</li>
			<li><label>考核周期：</label>
				<form:select path="cycle" class="input-mini">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictBlankList('opa_cycle_type')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li><label>起始日期：</label>
				<input name="dateFrom" type="text" readonly="readonly" maxlength="20" class="input-medium Wdate"
					value="<fmt:formatDate value="${opaPlan.dateFrom}" pattern="yyyy-MM-dd"/>"
					onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',isShowClear:true});"/>
			</li>
			<li><label>截止日期：</label>
				<input name="dateTo" type="text" readonly="readonly" maxlength="20" class="input-medium Wdate"
					value="<fmt:formatDate value="${opaPlan.dateTo}" pattern="yyyy-MM-dd"/>"
					onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',isShowClear:true});"/>
			</li>
			<li><label>状态：</label>
				<form:select path="status" class="input-mini">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictBlankList('opa_plan_status')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li class="btns"><input id="btnSubmit" class="btn btn-primary" type="submit" value="查询"/></li>
			<li class="clearfix"></li>
		</ul>
	</form:form>
	<sys:message content="${message}"/>
	<table id="contentTable" class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>名称</th>
				<th>考核对象</th>
				<th>父级部门</th>
				<th>考核年份</th>
				<th>考核周期</th>
				<th>起始日期</th>
				<th>截止日期</th>
				<th>状态</th>
				<shiro:hasPermission name="pa:opaPlan:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="opaPlan">
			<tr>
				<td><a href="${ctx}/opa/opaPlan/form?id=${opaPlan.id}">
					${opaPlan.name}
				</a></td>
				<td>
					${fns:getDictLabel(opaPlan.objectType, 'opa_object_type', '')}
				</td>
				<td>
					${opaPlan.officeParentName}
				</td>
				<td>
					${opaPlan.year}
				</td>
				<td>
					${fns:getDictLabel(opaPlan.cycle, 'opa_cycle_type', '')}
				</td>
				<td>
					<fmt:formatDate value="${opaPlan.dateFrom}" pattern="yyyy-MM-dd"/>
				</td>
				<td>
					<fmt:formatDate value="${opaPlan.dateTo}" pattern="yyyy-MM-dd"/>
				</td>
				<td>
					${fns:getDictLabel(opaPlan.status,'opa_plan_status','')}
				</td>
				<td>
					<c:if test="${opaPlan.status eq fns:getDictValue('制定中','opa_plan_status','') or opaPlan.status eq fns:getDictValue('已退回','opa_plan_status','')}">
						<shiro:hasPermission name="pa:opaPlan:apply">
						<a href="${ctx}/opa/opaPlan/apply?id=${opaPlan.id}" onclick="return confirmx('确认要下发该考核计划吗？', this.href)">下发</a>
						</shiro:hasPermission>
						<shiro:hasPermission name="pa:opaPlan:edit">
						<a href="${ctx}/opa/opaPlan/form?id=${opaPlan.id}">修改</a>
						<a href="${ctx}/opa/opaPlan/delete?id=${opaPlan.id}" onclick="return confirmx('确认要删除该考核计划吗？', this.href)">删除</a>
						</shiro:hasPermission>
					</c:if>
					<c:if test="${opaPlan.status eq fns:getDictValue('待执行','opa_plan_status','')}">
						<shiro:hasPermission name="pa:opaPlan:excute">
						<a href="${ctx}/opa/opaPlan/excute?id=${opaPlan.id}" onclick="return confirmx('确认要执行该考核计划吗？', this.href)">开始执行</a>
						</shiro:hasPermission>
					</c:if>
					<c:if test="${opaPlan.status eq fns:getDictValue('执行中','opa_plan_status','')}">
						<shiro:hasPermission name="pa:opaPlan:excute">
						<a href="${ctx}/opa/opaPlan/summary?id=${opaPlan.id}" onclick="return confirmx('确认要完成该考核计划吗？', this.href)">完成</a>
						</shiro:hasPermission>
					</c:if>
				</td>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>