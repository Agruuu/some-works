<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>计划任务管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
	$(document).ready(function() {
		if(${opaTaskAppeal.ifNum != fns:getDictValue('非数值', 'opa_item_Num_type', '')}){
			$("#score").attr("readonly","readonly");
			$("#inputResult").show();
		}else{
			$("#score").removeAttr("readonly");		
			$("#result").val("");
			$("#inputResult").hide();
		}
		var ifUpload = true;
		if(${opaPlanTask.attachedPath eq ''}||${opaPlanTask.attachedPath eq null}){
			ifUpload = false;
			$("#uploadContent").show();
			$("#uploadedContent").hide();
		}else{
			$("#uploadContent").hide();
			$("#uploadedContent").show();
		}
		$("#inputForm").validate({
			submitHandler: function(form){
				if(!ifUpload){
					showTip('请先上传文件，再进行评分');
					return;
				}
				if($("#score").val() > ${opaPlanTask.value}){
					showTip('填写分值必须小于评分标准分值');
					return;
				}
				loading('正在提交，请稍等...');
				form.submit();
			},
			errorContainer: "#messageBox",
			errorPlacement: function(error, element) {
				$("#messageBox").text("输入有误，请先更正。");
				if (element.is(":checkbox")||element.is(":radio")||element.parent().is(".input-append")){
					error.appendTo(element.parent().parent());
				} else {
					error.insertAfter(element);
				}
			}
		});
		$("#uploadForm").validate({
			submitHandler: function(form){
				loading('文件上传中...');
				form.submit();
			},
			errorContainer: "#messageBox",
			errorPlacement: function(error, element) {
				$("#messageBox").text("输入有误，请先更正。");
				if (element.is(":checkbox")||element.is(":radio")||element.parent().is(".input-append")){
					error.appendTo(element.parent().parent());
				} else {
					error.insertAfter(element);
				}
			}
		});
	});
	function calScore(val){
		
		var value = ${opaTaskAppeal.value}+0;
		var count = ${opaTaskAppeal.count}+0;
		var rs = val/count*value;
		$("#score").val(rs.toFixed(2));
	}
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li></li>
	</ul><br/>                          
	   <form id="uploadForm" action="${ctx}/opa/opaTaskAppeal/uploadFile" method="post" enctype="multipart/form-data" class="form-horizontal">
		<sys:message content="${message}"/>
		<div id="uploadContent" class="form-search">
			<input type="hidden" name="id" value="${opaTaskAppeal.id}"/>
			<input type="file" name="file" id="myFile"/>   
	       <input type="submit" class="btn btn-primary" value="上 传"/>	
        </div>
        <div id="uploadedContent" class="form-search">
        </div>
	</form>  
	<form:form id="inputForm" modelAttribute="opaTaskAppeal" action="${ctx}/opa/opaTaskAppeal/saveInputScore" method="post" class="form-horizontal">
		<form:hidden path="id"/>
		<sys:message content="${message}"/>		
		
		<div id="content" class="form-search"  style="margin-top:15px;">
				<label id="inputScore">评分：<form:input path="score" htmlEscape="false" class="input-mini required number"/>${opaTaskAppeal.value}分</label>
				<label id="inputResult">完成数目：<form:input path="result" htmlEscape="false" class="input-mini required number" onblur="calScore(this.value);"/>${opaTaskAppeal.count}</label>
		</div>
		<%-- <div class="control-group">
			<label class="control-label">备注信息：</label>
			<div class="controls">
				<form:textarea path="remarks" htmlEscape="false" rows="4" maxlength="255" class="input-xxlarge "/>
			</div>
		</div> --%>
		<div class="form-actions">
			<shiro:hasPermission name="pa:opaTaskAppeal:excute:edit"><input id="btnSubmit" class="btn btn-primary" type="submit" value="保 存"/>&nbsp;</shiro:hasPermission>
		</div>
	</form:form>
</body>
</html>