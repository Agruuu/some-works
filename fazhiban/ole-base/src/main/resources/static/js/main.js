initMenu();
function initMenu(){
	
	var per=[{
		"css": "",
		"createTime": 1523537807821,
		"name": "ᠣᠷᠣᠨ ᠬᠡᠪᠴᠢᠶᠡᠨ ᠦ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ",
		"updateTime": 1523537807821,
		"permission": "sys:log:query",
		"id": 39,
		"href": "pages/lesmn/lesList.html",
		"sort": 1,
		"type": 1,
		"parentId": 45,
		"child": []
	},
	{
		"css": "",
		"createTime": 1523537807821,
		"name": "ᠬᠠᠤᠯᠢ ᠬᠡᠷᠡᠭᠵᠢᠭᠦᠯᠦᠭᠴᠢ ᠠᠵᠢᠯᠳᠠᠨ ᠦ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ",
		"updateTime": 1523537807821,
		"permission": "sys:log:query",
		"id": 29,
		"href": "pages/lepmn/lepList.html",
		"sort": 2,
		"type": 1,
		"parentId": 45,
		"child": []
	},
	{
		"css": "",
		"createTime": 1523537807821,
		"name": "ᠬᠠᠤᠯᠢ ᠬᠡᠷᠡᠭᠵᠢᠭᠦᠯᠬᠦ ᠭᠤᠤᠯ ᠴᠣᠭᠴᠠ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ",
		"updateTime": 1523537807821,
		"permission": "sys:log:query",
		"id": 27,
		"href": "pages/ltcmn/ltcList.html",
		"sort": 3,
		"type": 1,
		"parentId": 45,
		"child": []
	}, {
		"css": "",
		"createTime": 1523537807821,
		"name": "ᠡᠷᠬᠡ ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ   ᠶᠢᠨ ᠲᠣᠳᠣᠷᠬᠠᠶ ᠬᠠᠭᠤᠳᠠᠰᠤ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ",
		"updateTime": 1523537807821,
		"permission": "sys:log:query",
		"id": 33,
		"href": "pages/larmn/larList.html",
		"sort": 4,
		"type": 1,
		"parentId": 45,
		"child": []
	}, {
		"css": "",
		"createTime": 1523537807821,
		"name": "ᠬᠠᠤᠯᠢ ᠴᠠᠭᠠᠵᠠ ᠬᠠᠤᠯᠢ ᠳᠦᠷᠢᠮ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ",
		"updateTime": 1523537807821,
		"permission": "sys:log:query",
		"id": 31,
		"href": "pages/lrlmn/lrlList.html",
		"sort": 5,
		"type": 1,
		"parentId": 45,
		"child": []
	}, {
		"css": "",
		"createTime": 1523537807821,
		"name": "ᠬᠠᠤᠯᠢ ᠴᠠᠭᠠᠵᠠ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠦ ᠲᠡᠰ ᠤᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠲᠠ",
		"updateTime": 1523537807821,
		"permission": "",
		"id": 321,
		"href": "pages/lawLevelmn/lawLevelList.html",
		"sort": 6,
		"type": 1,
		"parentId": 45,
		"child": []
	}];
	
	if(localStorage.getItem("lang")&&localStorage.getItem("lang")=='mn'){
		$('#menu').addClass('_MnMenu');
		Menu(per)
	}else{
		 $.ajax({  
		     url:"/base/permissions/current/45",  
		     type:"get",  
		     async:false,
		     success:function(data){
		    	 	Menu(data)
		     	}
		     });
		}	
	}
	
	


function Menu(data){
	 if(!$.isArray(data)){
		 location.href='/base/login.html';
		 return;
	 }
	 
    var length = data.length;
    var menu = $("#menu");
    for(var i=0; i<length; i++){
        var p = data[i];
        var li = $("<li class='layui-nav-item'></li>");
        var a = $("<a href='javascript:;'></a>");
        
        var css = p['css'];
        if(css!=null && css!=""){
       	 a.append("<i aria-hidden='true' class='fa " + css +"'></i>");
        }
        a.append("<cite>"+p['name']+"</cite>");
        a.attr("lay-id", p['id']);
        
        var href = p['href'];
        if(href != null && href != ""){
           a.attr("data-url", href);
        }
        li.append(a);
        
        var child = p['child'];
        if(child != null && child.length > 0){
            var dl = $("<dl class='layui-nav-child'></dl>");
            var childSize = 0;
            for(var t=0; t<child.length; t++){
                var c = child[t];
                var ctype = c['type'];
                if(ctype == 1){ // 排除掉按钮
                    var dd = $("<dd class='layui-nav-child'></dd>");
                    var ca = $("<a href='javascript:;'></a>");
                    ca.attr("data-url", c['href']);
                    ca.attr("lay-id", c['id']);
                    
                    var css2 = c['css'];
                    if(css2!=null && css2!=""){
                   	 ca.append("<i aria-hidden='true' class='fa " + css2 +"'></i>");
                    }
                    
                    ca.append("<cite>"+c['name']+"</cite>");
                    dd.append(ca);
                    dl.append(dd);
                    childSize++;
                }
             }
                
            if(childSize > 0){
                li.append(dl);
            }
          }
            menu.append(li);
        }
    }

var active;

layui.use(['layer', 'element'], function() {
	var $ = layui.jquery,
	layer = layui.layer;
	var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    element.on('nav(demo)', function(elem){
      //layer.msg(elem.text());
    });
	
	  //触发事件  
	   active = {  
	       tabAdd: function(obj){
	    	 var lay_id = $(this).attr("lay-id");
	    	 var title = $(this).html() + '<i class="layui-icon" data-id="' + lay_id + '"></i>';
	         //新增一个Tab项  
	         element.tabAdd('admin-tab', {  
	           title: title,
	           content: '<iframe src="' + $(this).attr('data-url') + '"></iframe>',
	           id: lay_id
	         });  
	         element.tabChange("admin-tab", lay_id);    
	       }, 
	       tabDelete: function(lay_id){
    	      element.tabDelete("admin-tab", lay_id);
    	   },
	       tabChange: function(lay_id){
	         element.tabChange('admin-tab', lay_id);
	       }  
	   };  
	   //添加tab  
	   $(document).on('click','a',function(){  
	       if(!$(this)[0].hasAttribute('data-url') || $(this).attr('data-url')===''){
	    	   return;  
	       }
	       var tabs = $(".layui-tab-title").children();
	       var lay_id = $(this).attr("lay-id");

	       for(var i = 0; i < tabs.length; i++) {
	           if($(tabs).eq(i).attr("lay-id") == lay_id) { 
	        	   active.tabChange(lay_id);
	               return;  
	           }    
	       }  
	       active["tabAdd"].call(this);  
	       resize();  
	   });  
	     
	   //iframe自适应  
	   function resize(){  
	       var $content = $('.admin-nav-card .layui-tab-content');  
	       $content.height($(this).height() - 147);  
	       $content.find('iframe').each(function() {  
	           $(this).height($content.height());  
	       });  
	   }  
	   $(window).on('resize', function() {  
	       var $content = $('.admin-nav-card .layui-tab-content');  
	       $content.height($(this).height() - 147);  
	       $content.find('iframe').each(function() {  
	           $(this).height($content.height());  
	       });  
	   }).resize();  
	   
	   //toggle左侧菜单  
	   $('.admin-side-toggle').on('click', function() {
	       var sideWidth = $('#admin-side').width();  
	       if(sideWidth === 200) {  
	           $('#admin-body').animate({  
	               left: '0'  
	           });
	           $('#admin-footer').animate({  
	               left: '0'  
	           });  
	           $('#admin-side').animate({  
	               width: '0'  
	           });  
	       } else {  
	           $('#admin-body').animate({  
	               left: '200px'  
	           });  
	           $('#admin-footer').animate({  
	               left: '200px'  
	           });  
	           $('#admin-side').animate({  
	               width: '200px'  
	               });  
	           }  
	       });
});