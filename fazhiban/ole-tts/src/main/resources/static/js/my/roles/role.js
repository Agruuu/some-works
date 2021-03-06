function initRoles() {

    $("#roles").combotree({
        required: false,
        multiple:true,
        cascadeCheck:false,
        onLoadSuccess:function(){

        }
    });


    $.ajax({
        type : 'get',
        url : '/tts/rule/listAllRole',
        async : false,
        success : function(data) {
            var treeData=[];
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                var id = d['id'];
                var name = d['name'];
                treeData[i]={id:id,text:name};
            }
            $("#roles").combotree('loadData',treeData);
        }
    });
}

function getCheckedRoleIds() {
	var ids = [];
	$("#roles input[type='checkbox']").each(function() {
		if ($(this).prop("checked")) {
			ids.push($(this).val());
		}
	});

	return ids;
}

function initRoleDatas(ruleId) {
	$.ajax({
		type : 'get',
		url : '/tts/rule/listRolesByRuleId?ruleId=' + ruleId,
		success : function(data) {
			var length = data.length;
			for (var i = 0; i < length; i++) {
				$("input[type='checkbox']").each(function() {
					var v = $(this).val();
					if (v == data[i]['id']) {
						$(this).attr("checked", true);
					}
				});
			}
		}
	});
}