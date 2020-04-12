$(document).ready(function(){
	//初始化对象
	var zztchart = echarts.init(document.getElementById('area1')); 
    var btchart = echarts.init(document.getElementById('area2')); 
    var btchart2 = echarts.init(document.getElementById('area6')); 
    var dtchart = echarts.init(document.getElementById('area3')); 
    var nsjzchart = echarts.init(document.getElementById('area4')); 
    var flsjzchart = echarts.init(document.getElementById('area5')); 
    
    //时间轴参数
    var categoryArr  = [];
    var yearArr = [];
    
    var dataUrlArr = ['areaCaseList','lawPersonNum','ReconsiderationCasesNum','personLawAvgNum'];


    //初始化时间轴数据
/*    $.ajax({
        type: "GET",
        url: "/report/areamap/areaMapInit",
        async : false,
        success: function(data){
        	categoryArr = data.category;
        	yearArr = data.year;
         },
         error : function(data){
        	 layer.msg(data);
         }
    });*/
    //默认柱状图参数
	zztoption = {
			title: {  
                text: '案件数量：',  
                x:'center',
                textStyle : {
                    color : '#7B8CA5'
                }  
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {
					type : 'shadow',
					label : {
						show : true,
						backgroundColor : '#333'
					}
				}
            },
            grid: [
    	        {width:'90%'},
    	    ],
			xAxis: [
                {
	    	        type: 'category',
	    	        data: ['呼和浩特市','玉泉区','赛罕区'],
	        	    axisLabel:{
		            	interval:0,
		            	rotate : 25,
	        	    },
	        	    axisLine : {
						lineStyle : {
							color : '#fff'
						}
					},
	        	    
                },
            ],
            yAxis: [
            	{
            		type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    axisLine : {
						lineStyle : {
							color : '#fff'
						}
					},
					splitLine: {
			            lineStyle: {
			                color: '#666'
			            }
			        }
                },
            ],
            series : [
            	{
                type: 'bar',
                data: [{name:'呼和浩特市',value:"300"},
								{name:'玉泉区',value:'245'},
								{name:'赛罕区',value:'378'}],
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                itemStyle : {
					normal : {
						barBorderRadius : 5,
						color : new echarts.graphic.LinearGradient(2,
								0, 0, 1, [ {
									offset : 0,
									color : '#0099FF'
								}, {
									offset : 1,
									color : '#0033FF'
								} ])
					}
				},
            },
            ]
	}
	
	
	//面积图默认值
	btoption = {
    title: {
        text: '请求数',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisTick: {
            show: false
        },

        position: 'bottom',
        offset: 20,
        data: ['', '', '', '', '', '', '', '', '', '', {
            value: '周六',
            textStyle: {
                align: 'left'
            }
        }, '周日']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    }, {
        name: '电信',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
    }, {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    }, ]
		};
	

//饼图默认值
bt2option = {
	    title : {
	        text: '每平方公里案件数量',
	        x:'center',
	        	textStyle : {
					color : '#fff'
				},
	    },
	    color : [ '#85b6b2', '#6d4f8d', '#cd5e7e', '#e38980', '#f7db88','#660066','#9900CC','#996633','#99FF33','#99FFFF' ],
	    tooltip : {
			show : true,
			trigger : 'item',
			formatter : "{b}: {c} ({d}%)"
		},
	    legend: {
	    	type: 'scroll',
	        orient: 'horizontal',
	        bottom:'1%',
	        textStyle : {
				color : '#fff'
			},
			pageIconColor : '#fff',
			pageIconInactiveColor : "#fff",
			pageTextStyle:{
				color : "#fff",
			},
	        data: ['1','2','3','4']
	    },
	    series : [
	        {
	            name: '每平方公里平均案件数：',
	            type: 'pie',
	            radius : '65%',
	            center: ['50%', '50%'],
	            data:[{name:'1',value:123},{name:'2',value:1233},{name:'3',value:323},{name:'4',value:723},],
	        }
	    ]
	};

	//hhht地圖json
	var hhht = {"type":"FeatureCollection","features":[{"type":"Feature","id":"150103","properties":{"name":"回民区","cp":[111.662162,40.815149],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IA@@@AKAADA@A@@@@@@@A@CAABB@@@AHA@C@@@C@AA@@A@AAAA@AA@@A@AA@AA@@AA@@@AB@@@@AAA@AA@CAC@E@@@@@A@@@@@AA@@@@C@E@GAE@@@@@A@C@A@@@C@EAGA@@EAC@@@A@A@EAW@@@@@@@A@@@@@EAC@E@I@BBD@@BBBDB@BB@BBBBBB@B@B@B@@@@ABABCBADA@ABABC@CBABA@A@@@AAAAACCAAAECCAA@CAA@ABA@CBA@A@ADABAFCFABA@A@C@CBABA@@@CF@BAB@B@@AB@@@BABEFGDEDAD@B@BAB@@AD@B@BAB@B@BADA@@B@D@BAB@@ABABCB@@GB@@@@ABABA@@BA@AB@@A@A@@@@A@@@@A@@@A@@@@@@AA@@BA@ABA@A@CBA@@BA@@@A@A@A@A@GDA@C@@@A@AAA@@@A@@@A@A@@@AA@AA@A@A@A@CBA@AB@@@@A@A@A@@@@@AD@B@@AB@@ABC@ABCBADA@CD@B@BAB@DAB@@@DBBAD@BABABA@AB@BBB@@BB@@@B@BA@AD@B@@A@@BB@@D@@AD@B@BBB@B@B@B@@@@BB@@BB@B@@@B@B@@BB@@@F@D@B@B@@@@@F@B@BBDDBDFBBBD@@@BA@AB@DAB@DBBB@@BB@HAB@@@B@BADCBAB@BAD@D@B@D@BBDAB@B@BABAB@B@BAB@DBB@B@@@BAB@B@B@B@@ABABA@C@AB@@AB@DAD@B@DADAB@B@B@@@BA@@B@BAD@BAD@B@DBB@B@D@D@D@D@F@B@D@B@B@BB@@B@B@BB@@BDB@@B@BA@@BAB@@AF@@BB@BDBBB@B@D@D@BBBBBBBDBB@B@B@@AB@@B@@@B@@BBB@B@BBB@@BB@F@D@D@B@B@BBBBBBB@B@DBB@B@BBB@@@B@BA@ABABABA@@@CB@BA@@BABABAB@BADABABAB@BABABAB@BAD@@@@C@ABC@AB@@A@@@AA@@A@@@@BA@ADAB@D@@AB@@ABADE@AB@BA@AB@BCBC@ABABC@@B@@ABA@A@ADABA@@@ABADABA@@@A@ABA@@BCBCBABCBE@ABADA@ABA@@BBB@B@@@@@@@BABC@A@A@C@CBA@C@CBC@ABA@A@@@A@@AA@@@@@@BA@@B@@A@A@A@C@ABA@@B@@@@@B@@@@@B@@@@@DE@ABCBC@ABA@ABC@@@@@AAG@A@@@@@@BGD@@@D@D@D@BBB@D@@EBC@@BCDEBEBCBABCBC@A@@"],"encodeOffsets":[[114356,41786]]}},{"type":"Feature","id":"150102","properties":{"name":"新城区","cp":[111.685964,40.826225],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABC@A@@BAD@BA@C@A@ECG@CACA@CAA@A@AB@@CBABA@EBE@ABA@CA@AB@BADA@@@AAC@A@AB@@A@A@C@AAAE@AA@@A@AB@AA@AC@AAA@@@ABAB@D@DADAHAF@BA@@@@AAAACAC@EAC@GAC@A@@A@G@E@AA@GECAAA@@AC@@ACAAA@CACAA@A@AAACAC@CA@A@A@C@EACAE@E@G@C@A@ABABABA@A@@@A@@@@@A@@@A@@@@@@AA@@@A@@@A@A@@A@@@@A@@@C@AAA@@AC@C@KBMBA@OAI@@@ACIBUA@@W@gAKAAFSAAXG@OB@NKEEECE@@@@AAKM@@GAGACAIABGBGOA@@@@@@C@@KBEMA@ABI@E@A@@@@DG@A@@EAC@AASGICOEEAAAE@A@CAQCC@AA@@E@AAG@CAMAQCGACAIAA@EAUCGAEA@@@@FMKC@@A@EA@@@@A@@@@@EAIA@@@@@@@@A@@@AA@@C@@AB@@@@@EA@@@@CA@@@@GAADAFCFAD@@AD@FC@A@AAC@C@C@@@C@AH@@@@@@@BBH@B@@@@AD@BAB@BADAD@BCF@@@@A@@@@@A@@@@@A@@@AB@B@D@B@B@BA@@@AB@@@@@@BB@@@B@@@BAB@BAD@D@DAB@D@D@B@BADAB@@@@@@A@A@AA@@AB@BCBAB@BAFADABADAD@@AB@B@B@@ABCBAB@B@@ABCB@B@BAB@BA@@@ADAB@BADADA@@BABA@@BCFAB@BA@@BC@A@CB@BAB@@@@@BB@@B@@@BA@@BAD@B@DB@DCD@B@B@D@B@HBH@FBF@F@DBB@F@DAD@F@J@H@F@J@B@FBHBFBFBH@B@BDFBDD@@B@BAD@D@BBBB@@BBB@DAF@DAD@B@D@D@DAD@DBD@@@@B@@ABCBABADABA@@BC@A@@@AB@BABABAB@@A@AB@@ABCBAB@@AB@@@@@BB@D@BB@@B@@@D@DAB@D@D@D@B@B@@ADAD@BAB@B@DBBB@B@B@D@BB@BB@B@B@@@BABABAD@BAD@@@BABAB@BBB@B@BA@@BA@ABA@A@A@A@@@A@A@@@@B@BAB@B@@@@B@DBB@D@BBDBDBB@BBDBBBDBD@BBB@@@BB@B@BB@B@@@BB@BAB@@@B@@@@BB@@A@AB@B@@BB@@B@B@BBBBB@@@@BBB@BB@DB@@B@BA@@B@B@@@BC@@B@@@@B@B@B@B@@@B@@B@BAB@@@@B@@@B@@@@B@B@@@@D@@B@BA@@@@@B@@AD@B@@B@BB@@D@B@@@BBB@BDBBB@@@B@B@@@BBDBBBBB@B@BB@@@D@B@DBDDFDDBB@DBFBHBF@B@B@@B@@@BAD@D@D@B@DBDBD@@@@B@D@BBD@BB@@@BB@@D@B@B@BB@@BAD@@@B@@BB@B@BAD@B@BAB@@@BB@@@@@B@B@@@@BBDBBBD@@@BB@@BA@@B@@ABC@ABC@@@ABCD@B@@D@BBBBD@DBBBB@@@@ABABAB@DAB@@@B@B@B@BBB@@BBB@B@B@BABAF@@@B@@B@@@FBF@D@BBDBBBFBBB@@B@@BBB@BBB@@@BB@@@@B@@A@@B@@@B@@BD@B@@@BB@@@@@BB@@B@B@BBB@@@@@@B@@BB@@@@@BDB@BB@@B@BBBBB@@B@@@@@@@B@@@DADAB@FAB@BABBB@@@B@@@B@B@B@@@B@@@D@DA@@BB@@@@@BB@@B@@@@B@@@@@@B@@BB@BBF@B@ADABABAD@FAD@LCD@F@LE@@B@HBDB@@BADAB@D@@A@@B@A@@AA@GBE@AAA@@@@@@AD@D@HAB@@@@@@A@@A@IACA@@@AAC@@BABABA@AB@DCDAB@@AB@@AB@BAB@@A@@@A@@BABABAD@DA@@B@@ABC@@BA@@B@F@BBB@B@B@@ADE@@DA@ABAB@FAH@F@B@@ADABA@AD@FCB@B@B@D@@@@@BABCB@@@DAD@@A@@@@@C@A@C@A@@B@DCD@@@DA@CB@BAB@@@BBDB@BB@@@B@@@@@BA@@D@B@DBB@BAB@BA@@@@D@B@BA@@D@DADA@A@@BE@@F@@AD@BABADA@ABCBA@@LCFAHAB@BCBA@C@I@G@AA@A@A@E@AA@@CACG@@AABE@@@A@@AACACA@@@AACCA@A@A@@DC@@AC@@@ABA@@CC@A@@BABADAHC@@DCBABCBABCDADCAA@A@ACA@@@@@A@@BA@AB@BA@@BABA@@DC@A@@@EB@BC@C@@B@"],"encodeOffsets":[[114732,41953]]}},{"type":"Feature","id":"150104","properties":{"name":"玉泉区","cp":[111.66543,40.799421],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@J@F@D@FB@@@@B@@@@@@@X@FBB@B@@@D@FB@@HBFBD@@@B@D@B@@@@@F@HBF@D@@@@@BB@@@@B@@@@@F@D@DBB@@BBB@B@@A@@B@@BB@@BBB@@B@BB@@BBBBBB@@@BBD@@@D@B@BG@@A@BADBB@@@@@@@B@B@BCLB@B@@JBDGBABEBA@IAABGB@@@@@@EHBDBD@B@DEBEIA@AC@DCDC@@@@DAHEFAGABEIAFKBA@@@A@A@A@A@@BA@BDBBBD@@@@CB@BBD@HGHCBEDABADABABAD@BABADABAB@D@FBDBDBDBB@FBBDB@DADCGAA@AA@@@SC@AAAA@C@C@@@A@@@ABA@@DC@@BABC@ABC@A@ABA@A@C@@AAACAAA@CCCCAA@@@E@@@@BA@E@I@C@@@A@@@@@@@AAA@@@@AC@@ACAAACAAAAAAAAEEOC@@DEBEDE@@BABEBE@@BCDEDIDG@@@@@ABAAB@@CB@@@@AB@B@BA@@BA@A@A@A@A@A@@@AA@@AA@AA@@AA@A@@@CB@@A@@@A@CAA@A@@B@@@B@@@B@@@BABABA@@@A@A@A@@@@@A@@@@@AB@@AAA@@B@@@@B@B@@@B@@B@@A@A@@BA@@@@B@@@B@@A@@@A@C@CAA@A@A@A@@AA@@@BA@@@A@@AA@@A@A@A@C@A@A@@@AA@@A@@@@@A@@B@@AB@@ABA@AB@@AB@@ABA@A@A@G@EAE@EAC@C@CAA@A@A@A@@A@@@@@ABA@A@@AAA@@@A@@@A@@A@@@A@@BA@@@AA@@@@@AA@@@AB@@@@A@@@@@@A@@@ABAB@@CBC@ABA@@@A@A@EAEAE@CA@@A@A@AA@@A@A@@@A@@@@BABABADABAD@BABADAB@@ABA@A@A@A@AA@@A@@@A@@@@BA@@@A@A@A@@@A@@@@@@@@B@BB@@B@@@@@@@@A@A@@AC@A@@AA@@@A@@B@@@B@B@B@B@@ABB@@@BBB@@BB@@@@B@BB@@BB@@@B@BBB@BBB@B@@@@AB@@A@@B@@@@B@@BB@@@@B@@AB@@A@@B@@BB@@B@@B@@BB@B@B@@@B@@B@@@B@@B@@@@@@@@A@@B@BB@@@@BB@@@@@BA@@@@B@@B@@BBA@@@@B@@@@B@@@@@@A@@B@@@D@B@BA@@@A@@@@DADC@AF@B@BDBBB@B@@@@ABAB@@A@A@@@@DA@A@AB@@@B@@@DD@D@@BDB@@@BBBBBBBBB@F@B@BHABDD@@BBBBD@BBBD@@B@B@F@BADEAECEAA@A@@@AD@B@BFDBBDDDDAB@BEACACAAFAACAGACABMA@C@KAE@@A@@@A@AD@@CBCKEIAI@E@C@EIA@@@@A@CBA@GBCBC@@A@A@C@C@CAEAE@A@ADABA@A@CA@B@BAD@BADECMEI@CACCCAEB@@AD@B@@A@C@AB@@@B@DABA@AB@@BDC@@@@A@@CB@AA@A@@@AD@@@B@@A@CBA@A@@@AB@@AA@@AB@@CD@BABAD@BD@@BAB@@@B@BBBBB@BB@B@@@@ABABB@BABDBBA@CD@DAB@BBDBDBDBB@@B@BA@@@AB@@BD@@B@DAB@DBBBBDB@D@D@D@BAB@B@B@BCFBD@B@@B@@@BABA@BB@BDBBB@B@D@BBBADCF@B@@@@B@BBAD@B@@BB@@BB@BFFCF@DJCJDB@BDFBFAFA@BHBB@BD@DBBDNBFBF@DCFBBAB@B@@A@AAA@@BAB@@ABABA@A@A@A@A@A@A@@@AB@@BBB@@B"],"encodeOffsets":[[114254,41769]]}},{"type":"Feature","id":"150122","properties":{"name":"托克托县","cp":[111.197317,40.276729],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@BCPYAGAEAC@AAEAA@AA@@AAAA@@@AAA@@AA@AAA@@A@@BADABCBA@@BABA@A@AA@AAAACCCC@CAC@EAC@A@@EBA@B@@C@G@GAA@CAE@C@A@@B@BBB@BA@@@ABC@CAE@EBE@AAG@CCCAAAACAA@CCCACCCAAACCC@CACAC@A@CAA@@A@@@A@C@E@G@ABCBI@C@C@C@CACACEEEGAACAAAGAKAGCEAOCEA@G@W@@@E@E@@B@DAD@F@L@HAB@@@DE@A@@JBFBD@BAD@@@FBBBBBD@@@DAB@B@B@BAHBBAB@@@B@B@NAD@BBB@@@D@B@@ABA@A@AB@F@@@EI@@@@GKAA@@G@I@G@A@@@BCFIBA@A@A@ABABADC@A@@BE@EAG@EAE@@C@A@A@@@@A@C@G@C@@AACACCGCGG@@@CBE@A@C@AB@DAB@BA@@@C@@B@B@BAD@BAFAB@B@BAB@BAB@D@B@BADAB@B@B@B@B@B@B@D@F@B@@@BA@@B@B@B@BAB@B@B@DADADADA@@BABA@A@C@C@AA@@AA@@AA@@A@A@AAA@AAA@@CCAAAA@@@@@A@ABADCDCDCBA@@BCBA@CBA@@BA@@@AAAAA@@A@@@A@A@A@@A@@@@@@@ADC@@BA@@@@AA@ACAAACAAAAC@A@@@@@@DAH@D@B@BAB@BA@ADCBA@@B@@AB@D@B@B@@@@@@@AA@@A@A@@AA@@@A@@@A@CAEAAACAC@A@A@@A@@AA@AAAA@@@@A@@B@@AB@@AB@@AAA@@@A@@@@C@EBC@CBABG@EBC@A@@@EBC@C@G@C@KAI@CAC@ABABABA@A@CAGAE@CAEBG@CAC@C@CB@BA@A@E@GAC@E@GAE@C@A@AAECAA@@AKAA@@@@@A@AAAAEAAACA@@C@AAC@A@EAGAC@ABG@@AAA@ECCAA@@A@A@AAE@SAK@E@@AA@@C@CBA@AACA@@C@C@CAA@A@A@@@CACCECCACAAAEACAECADABCDABCDCBCBCDCBABABA@CDCBABCDCDADABADABABABABABCBABABADABADAB@BADABADABADAB@BABABCBABABEBCBC@C@EBC@A@ABE@E@E@C@A@C@A@C@CBC@A@EBCBG@EBEBA@ABA@EBEBC@CBC@CBA@A@CBEBCBCBEDCBABCBCBCBCBABAB@BAF@FAFCFCDCDCDCDEDADABCDCDCBA@ABCBABABCBABCBCBABA@@BABABCBCBCDGDGDGDGDGDEDCBABCBCBCDCBCBA@CBABCBCBA@ABCBC@ABEBCBEBEBEBE@CBCBC@CBC@CBA@C@C@A@CBC@C@E@CBC@C@C@CBC@E@C@E@C@C@A@A@A@ABA@@BCBABABCBABAD@DBB@DBDDDDDBD@BBB@DBB@B@DADCBA@CAC@CAAAAACAAAAAAACA@T@D@B@D@BBB@@A@@@CBA@CBA@@@@@@B@@BB@@BB@BB@@BBBBBBB@@@@B@HBD@D@F@H@B@B@@@@@AB@D@@@@B@B@D@DBD@B@@@B@@BDBDBB@DBBBB@BBB@B@DBDBDBB@@@@@AB@@B@@@BB@@@@B@@BB@@@B@B@@@B@@@@@B@@@@@B@D@B@@@@@@B@B@B@@@@@@B@B@B@D@H@@@B@@@BA@ABA@@@@D@F@F@D@D@D@@@@@@BADABCDEF@@@BDBBDDB@@@HAD@D@BAFAJ@B@B@@B@D@F@D@F@F@B@B@@@AD@DAD@FAB@B@@@@BB@BDDBFBB@B@@@@CAK@GAI@E@A@@@@@A@@B@B@@ABCBABABA@@BABAB@BADAB@B@@A@@@@@A@@B@@@B@@@BCBADADA@@B@@@@@BB@@@@@@B@@ADAB@B@B@B@@@BA@@@@@AB@D@D@B@@@@A@@@A@@@@@@B@B@@@B@@A@@B@@@B@B@B@@@@@BA@A@@@DBBBDBHDDBB@BB@@@@B@@B@@@@B@BB@@BBB@@B@@B@@BB@@B@@BB@@@@@@@@B@DCDCFDDDFD@@B@@BCH@DC@@FAD@HAF@@@@@FBDBDDNFNBH@BD@@@@@@@@@@BB@@@@@@@@@@@@@@BBDHBAFAFAF@BBB@@@@B@@@@@@@@@@@@@@@@@@BPBPBBEF@F@BEF@@BDBFB@@@@@@AFB@AD@DB@CHF@@DB@@@@@@FFB@DD@@B@@@DAF@B@@@@@BAB@@@@@@@@@@B@@BD@B@BB@@B@@@BBB@@BB@@@@@B@@@@@D@@@F@D@D@B@@@B@BADBBCDA@@@@BADB@@B@@AB@@AF@HBBAB@DB@ABE@@D@@@B@@A@@@AB@@@@A@@@@@@@C@@@AFBH@@AE@@ABAFAF@@AC@BGFBB@FBBCB@F@@DA@@B@@ADB@F@@B@DG@C@@@@@@BB@B@@@@@B@@@ABH@AFB@ADF@BB@BDB@BAB@@@@@@@@@B@@@@@@BBBCDBHB@EDB@@@@@B@@@@@@@@@@@@B@@@@DF@BCDAAFFBBGD@@BB@B@@@DDBB@@BEHBBCF@AFHB@BJDD@DB@@FHA@A@A@A@CA@D@BFHBB@@ABCDA@@B@F@@@@C@C@ADF@@@B@@B@@AFABD@@@B@@BB@BABC@BB@BAB@@BJBBA@@B@B@@@@@@@@@B@@@@BB@B@@@@B@@BBB@BCD@DB@CB@@@B@@ADBB@@@@@@B@@@@@B@@@@@@BB@B@@BDDFBBD@D@@BD@@@B@BA@@F@@@D@@C@@@AC@@AF@B@@@D@@@@@D@@@@@@@D@@@B@@@BBB@@@@@B@@@BB@@BB@@B@@BB@BB@@@BBB@@@BB@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@A@@B@@@B@@@@@@@@@@@@@@@@@@A@@@@B@@@B@BBB@BCB@AB@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@AAC@BA@AD@BBBCBA@ABAD@FCA@@@BAB@@AB@@B@BH@ABD@@@@BABF@@BF@@@@BBDBD@@BADC@@DBD@BB@@B@@ADC@@BADBBCBC@CDDB@ADBBAD@B@@B@@@@@BADEBDD@D@AFF@@DBBB@D@@AF@D@@BB@@@BADD@@ADJB@D@BBBB@@CB@ADFBBAHB@AHBB@@ADB@@@A@@@@@@B@@AF@@@HBB@@@DB@ADBBDFBB@B@@@@@@@BB@@@@B@EFHBB@ABHBBC@@BB@@AD@BB@@BFBD@@ADB@CBEBBBC@ABABC@@@A@@@@@@@@@@@@@@@@AE@AH@@CB@@@@@B@@@@A@ADCEAGA@BA@@ACAB@@AB@@@B@B@D@@@BAG@@AE@CA@@@@@@@@@@@A@@AA@@@@@@@ABE@@EAB@C@A@@@@@ABEAE@@@F@@@@A@A@@A@BCBEA@@@C@@A@@@A@ABA@AC@@CB@@ABCEA@@@A@@BCDBFB@AB@@BD@HBB@D@@@D@@A@ALBBEB@@@@A@@BA@@@A@AA@BE@AD@@C@@@@D@@@FB@A@@BAB@@@F@BB@@B@@@B@HB@AB@@@@@D@"],"encodeOffsets":[[114183,41504]]}},{"type":"Feature","id":"150105","properties":{"name":"赛罕区","cp":[111.698463,40.807834],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HB@@@@DB@@@@FB@@@@A@@BD@@@BB@@B@@@@@@@@@JBFB@@@@B@@@@@FBB@@@LDEN@@@@FBHBVDFBB@JBDBHBRDNBDBH@BBF@@@BBD@RDDBB@F@BBFBPFJDTHBBD@FB@@@BCH@@@@@B@FAJ@BNBAF@LD@@@@@@@PBAHAHJBDBHBHB@@LNBB@@@@DFFFLF@MPAH@BWTBBELBhBX@@@VBJABD@@J@PBB@NALAD@D@@BB@BBD@@@B@@@@@@BB@B@@@B@@@B@@B@@@@B@@@B@@@@@B@@@B@B@BABABAB@D@H@F@F@DBFBD@B@B@B@@DBDBDBBB@B@DBDBB@BBBD@@BD@@BBDBHFB@@B@F@H@BB@D@HBD@FBD@DBBBBB@@@@ABE@GBCBCBC@A@AB@B@@BB@BBDB@@BBAB@@@BBF@BB@B@D@B@BA@@B@BBD@B@@CBABA@@BDBB@BAF@FAB@BADA@@BAB@B@DBB@BD@DDH@F@B@DABC@AB@@@BAD@B@@B@B@BAB@BAB@DAJ@B@D@DAFADALCB@BA@ABABABABAB@B@BAHCDAHCLAB@\\NXJBB@@D@B@FADGFA@@@ABA@AA@@ADE@A@AAAAA@@@AB@@@B@F@B@@@DA@@BC@@D@BAB@@@@AA@C@@A@A@@@A@A@AB@@A@C@C@AAABAAA@@@AB@@A@@@IAA@@@ABA@ABAHCFC@A@@@AACAAAAAA@@@A@@B@B@D@B@D@D@D@B@FBBBBA@@@@@A@ABC@C@@ACAACAAAAAAA@@CA@AAA@A@@CE@A@AB@@AD@FAB@@@@AB@@AB@@AB@B@FEBA@ABCBABCBCB@BABA@A@A@@BADAB@DEDA@ABADCD@@A@@@@C@AA@A@@@@@@DA@ABA@CBE@AA@@@E@@@AA@@@@@AAAAACAAA@@AAHEBA@@BABA@A@E@EAC@AA@@@@@@B@@@@A@A@C@A@@AAA@A@CBA@@B@DA@@AAE@CA@@EC@@AA@AAAAAA@@@AA@@A@AA@A@@A@ACA@EAA@AA@AA@BA@A@A@@AC@ACE@@CA@CA@@C@A@A@@DE@A@A@AAC@A@C@E@AAAAA@AGAA@CB@@@AC@@A@AIECACCAAA@IAcECAG@EAAACAGG@A@@@A@@BAB@FAB@@@BABA@AB@BABAB@@ABA@A@E@E@A@A@C@@B@BAH@B@FAH@B@@A@A@A@CBABABCBA@ABC@ABA@@B@B@BA@ABC@@@A@@ECAACCAAAA@AA@AAK@A@AAAA@AACBGBIDGDE@C@A@GAC@AABCBABE@A@ABABABAAA@IAC@CBGDABE@CBE@A@ECCAAAIAE@C@CCMCKCIA@@KBG@G@ABC@C@C@C@C@E@EBE@E@A@A@@@@BAD@DA@C@A@CBC@C@ABA@A@@@AAAAA@A@@@@@@@@@AB@BA@@BA@A@@BA@@B@@@B@@AB@DAB@BAB@B@DAB@BAB@B@BA@@BABABAB@@ABA@A@A@A@C@AAEAA@A@@@A@A@@@C@@@A@@@C@C@A@AD@BAB@BCBCAA@CA@AA@A@CAA@@AA@@@AAAA@@@@@C@A@C@A@A@A@A@@BA@A@AB@@A@ABA@ABA@@@ABA@A@@@A@A@AAA@CAA@A@AAA@@@ACAA@@AA@@@A@@B@BA@C@ABABA@C@E@EBA@A@@@ABA@A@@AC@A@ABA@A@CBEBA@ABC@A@A@CAA@CAABCBCDEBA@@@A@AAAAAAAAC@C@A@A@AACAACA@CCAAA@A@AAA@@@A@A@A@CA@@CAA@CACACAAAGCCAAAC@AACAA@AACACAA@CAA@AAA@AA@@@AA@@C@ABA@@@ABC@ABA@ABABA@ABABA@@BA@A@A@@BA@@@AB@@A@@@AAA@@A@AAA@A@A@AA@@A@A@A@@@ABA@AA@@@@A@@ACBA@@@BDBBABA@C@A@A@CAA@ABAB@BABABADABABABA@@BA@AB@BA@@BA@CBA@@BABABAB@@ABA@A@C@A@A@EA@@ABA@A@@@A@@AE@CAG@CAC@A@ABAAA@A@A@A@ABC@AB@@A@A@A@@@AAA@AB@@A@A@AAA@A@@@A@ABABCBAB@@ABA@A@AB@B@@@@CHCJCFAD@@AFAFAB@@CFAFCF@@PDFFBBBBBBBBBDBBBD@@BD@@@@BB@B@@@@@@@B@@@D@J@FAB@@@@@F@@BBDDDDB@BBBDBB@@@D@BAB@B@BAD@BADAB@@CD@@AB@B@@@B@@@D@DBBBBD@@T@@BBB@HBCDCBA@ACEAA@CACACAEAC@A@ABCBABABC@ABABCBABCBAFGDGHC@AAA@@D@@C@AACA@AAB@@@B@B@B@B@@ABELJBAFHBEBGFCB@@@@CDCDD@@BJBAFCFA@C@CAGA@F@@@@A@AHBB@JABAFABCH@@@BADADAB"],"encodeOffsets":[[114353,41792]]}},{"type":"Feature","id":"150121","properties":{"name":"土默特左旗","cp":[111.133615,40.720416],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@A@C@E@@AA@@@A@A@@@AAA@@AA@@@@@A@A@AAA@A@ABC@@@CA@@AB@@@@ABCB@@A@A@@AA@@AA@ABAB@BABA@ABCAA@C@@BA@CBA@A@ADCB@BCDABAD@BA@@BA@@@ABC@@@@B@B@B@@@@@BAB@DAB@B@B@B@@BBB@@B@B@@@B@@@B@BBB@@@D@B@HCB@B@B@B@@@B@@AB@DAB@B@BAB@@AB@@B@@@@B@@@B@@@@@@B@@B@B@@@BAB@@AB@BABA@@@@HA@@DABABA@@BA@A@C@AB@BC@A@ABA@A@ABC@@BA@A@ABCFCHCFEBA@A@@BA@@@ABA@ADE@@B@BADAD@B@B@BADEBEBABCB@B@DAB@BAB@DBB@DBFDBBDBBDBBBB@@B@B@BADAD@BABAB@BCDABABA@@@@@A@A@AAAAAAAA@@ACAAA@AC@AA@AA@AA@@BA@@B@B@B@B@B@B@B@BABA@@BA@AB@BBB@@@@ABAAADE@CAEAECMAA@CACA@GA@AEBEBEAACA@ICID@CDEEE@AAA@@AA@@@ABCAAA@@@@@@ADEBCAA@A@C@AAACA@AAAB@BA@A@@@AA@C@EAADA@A@A@ABC@C@C@A@ACAACAA@CBA@@@AC@@BA@@B@@A@AA@CACACAAAA@CBC@@DABCABA@AAAAB@B@@A@A@@AAAAA@A@A@@BA@AC@@ABCBA@ADC@@BA@@BB@@BA@@B@B@DAB@@@@A@@BC@@B@B@@BDA@@@B@@D@AC@@BAB@BA@C@A@@BAD@B@@@@ABC@@FADBDDDBJ@NFFDBC@ABC@A@ADBB@B@BABCB@F@FBDBD@D@B@B@@@ADAD@HAB@D@B@@B@FJD@F@J@JBLFAD@DC@@B@B@@@BF@LBD@B@ANDBHBDBBBBEDBDBFB@ABACCCCAAEC@A@ABC@@B@B@FBFDFBBC@A@E@A@AC@AA@AACAA@AC@ACGB@A@A@EAAAAAAAA@A@@CA@AC@C@@C@@@A@@BAB@B@@C@@B@B@@@BABA@@@@@AAACA@A@ABED@BC@C@@B@@@B@@A@A@C@@@AB@@@@@@@@A@@A@@@@@AB@AA@@@@A@@B@@A@@@@AA@@@@AAA@@@@B@@@@@@A@@@@A@@@AA@@@A@A@A@@AA@@@@AA@@AA@@@@BA@@BA@@@@@AA@@@A@@A@@@@BA@@B@@A@A@AAA@AAA@@@A@@AA@@A@A@@A@@AA@AA@@A@BA@@@A@A@A@A@@@AB@@@B@@BB@D@@BB@B@@@@@@@@@@AA@@A@A@@@@@@B@@@B@B@B@@@B@@A@@B@@@B@@@BBB@B@B@B@BA@@BABCBA@ABCBABCBABA@A@@B@@@B@B@@@BBB@B@@@DBF@FBFBB@B@@@B@BAD@DA@@BABA@@B@@@@@@@@B@@A@@B@@BB@@@@B@@B@@AB@@@B@@@BB@@@B@@@B@BB@@@BAB@B@@@@@BB@B@B@B@DBD@D@FBF@FBH@B@B@B@BA@@BA@@BAB@BA@@BA@@@AB@@@@@B@@@BB@@B@B@D@B@B@B@@@BB@@@B@@AB@@B@@BB@B@B@B@DBD@B@@@B@@@@A@@@A@@B@@AB@B@@@@AA@@@A@A@@@@@@AB@BB@@BA@@@@B@@@@@B@B@B@@@B@BABA@A@@@A@@@A@@@AB@B@DBB@@@B@@@DA@@B@B@@BB@@BBB@@BB@@B@B@B@B@B@B@@AB@@A@ABA@@@@DA@@BAB@B@BA@@BADABABAB@@@B@B@BBB@B@@@BAB@BB@@B@B@B@@@BAD@BAB@B@B@B@BBBAB@D@DBH@DBF@@BB@@@B@B@BA@@FBB@B@D@B@B@BA@@BABABA@AB@DAB@@AB@@ABAB@@AB@BABABABCBABA@ABABA@@C@AA@A@@DA@AB@ACCCAAC@E@C@A@CB@A@@@@AC@C@G@CAGAIAKAIAG@@A@A@C@@@A@@@@A@CBA@I@I@A@@@A@@B@BA@A@@@@@A@@A@@@@@@@@@@@AAB@A@@@@@@@@A@@@@@@@@A@@@@@@@@@@ABA@@@A@@@@@@A@@@@@BA@A@A@@@@@@@AB@@@@A@@@@@A@@@@AA@@@@@AB@@AB@@@B@B@D@B@D@@C@I@@@@@AB@NAHC@@B@DB@@BCBEBG@AA@A@AAA@@@AA@AAC@@AA@@AAA@@AC@CCAAC@CCCAGAECCAA@C@A@E@E@@@@@AAEAGC@@@@A@A@A@C@C@A@@@A@ABC@A@A@EB@@@@ABA@@@A@AB@@@@@@@@@BA@@B@BA@A@@A@@B@@A@@A@E@E@A@@AA@@@AACAA@AA@@A@ABCBCBA@@@@@@@A@@@@@A@@@A@@@A@@@A@@@@@CBA@ABA@ABCBABA@A@E@ABA@ABA@A@ABABA@A@AB@@A@@@A@A@@BCBKAC@@D@BA@AB@@A@A@@@A@@@@FC@G@KBG@CBA@ABCBEDA@@@A@C@EAE@C@A@C@EBC@AB@@@F@BABA@@@A@@@@@@C@@@AC@@@@A@@@A@@A@CBGAC@BHAFA@EAG@EAE@CBA@A@@BABABAD@@ABCBAB@DCFABAD@DAAC@AAA@A@AAA@A@CAA@BA@A@AB@G@EAI@EAG@CAABA@AB@BBB@BFDB@DB@BA@A@CBABA@C@C@E@CAAAIBGBEBCBAIE@C@@DADBB@B@DHBF@@DBB@BA@@@@@C@@@ABI@@A@AE@EAA@@A@ABCDCCBA@C@CBBE@CBCCCACAAAAGICEAAA@@A@A@@C@@@@@A@@BGAA@@@A@@@AAE@@@A@AB@@@BEA@@C@@@@@@DC@@BAFB@@B@B@@AB@@@B@@A@AFKA@B@BC@@@C@A@GAC@@AA@@BEACAAD@@@B@@FBAD@BA@@DD@@BAB@B@B@@@BD@@@B@AFADB@@@@B@B@@E@@@F@FBBA@@@@B@D@A@FB@@AF@B@@@@@@BB@@@B@@@@@@@@@@DBF@@BH@AB@@C@A@A@@@A@@BA@DB@BB@@AHBFBCD@B@B@@A@@@@@A@@DG@@BBF@@@@@@@@@@@@@@@@@B@@ADAB@BADAAAF@DCA@BC@EA@AA@@ABC@@AA@@ADGABAA@GAFEA@@@@@AA@@@@@@A@A@EAACCA@BCA@@A@GA@@E@@BA@@@@@@@@B@@CA@BA@GA@BGAABEABCA@@DA@AA@A@CIABC@@CCAB@@A@@AC@E@@BC@A@AA@CE@BEC@C@ACCFAB@@@@A@@@@ABCAABCA@CC@DADADCAAB@@CD@BA@@@AAC@CA@@CDAB@@ACAC@A@@E@@AE@BA@A@@C@BAG@@A@AA@@BA@AB@@B@EDC@AB@BABADAAC@@BABD@BB@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@BAA@ADA@AAA@@@A@@@@@@B@@@@@@@@@@@@@@@@A@@@A@@@@B@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@A@@AA@A@@AAA@@AA@@@AA@@AA@@A@@@@@A@AA@@A@@@C@@@@@@@C@@@@@C@@@A@E@@BD@@B@@@DC@@@E@@@ABA@@@C@@AC@C@AACEAC@@@AAA@@@@@@@A@@@@@A@@@@A@CA@BA@@@A@@DCAC@ADA@AA@@@A@@A@A@@A@@A@@@@@@@@@A@A@@@ABIA@AA@ABA@@AADABA@@AA@@@C@BABE@@@AA@@@E@BCD@D@@@@@@E@AB@DCBA@@AAEG@A@CDBB@B@B@B@EG@@CAC@IC@AGABEE@ADGAAF@@AACC@@A@A@@AC@AHEABECBADE@@C@@A@@@@@@@@@@@@@@A@@@@CA@FGACAADAA@@@@@@@A@@@@@@@@BA@ACA@AAAE@BCA@BEG@BA@@A@@@@@A@A@@A@@@@D@H@@C@AE@A@BC@@@AB@@CE@A@ADEAA@EAAHD@@BE@EBAB@BF@@BG@EA@B@@@D@@@@@@@B@@A@@B@@@BA@@@C@@@AF@BCAA@ABGAE@@BA@@BA@@@CAAB@@@@CBADCAABA@@@A@C@C@E@@@C@@@@@A@@@@@A@@AA@AA@@A@@@AAA@C@@AA@@@@@@@@@@@BA@A@@@@@ABE@C@@@AC@@CEA@E@@@@A@@CE@DGA@@CBCA@BE@@@@@@EACA@AE@AFE@E@AFOAOA@A@@@@@@@@@@@@@@@@A@@@@@AA@ABEBEBEGAAC@A@@@@@@@@@@@@A@@A@@@@@@@@C@@AAGEMCMACAC@E@@@@BE@GBC@ED@@CDG@AA@@@ECCCECCDCDA@@@@@@@@@AA@@@AA@@AA@@@@AA@AA@@AAA@@@@@@AA@@@@@AAA@CAGCCAAACAC@C@E@C@@@@@@DAB@@@@C@C@E@K@G@G@C@@@@ABA@C@@@A@@G@E@CAC@A@C@A@@@A@A@ABABADABAB@B@B@B@BBBBBDBBBDBBB@B@@BB@B@@@BA@@BA@ABABEFIJCDGH@@@@GAC@EAGA@@AA@@AAC@CAC@AAA@A@AB@@A@ADA@ADELELCFC@IAI@K@ERD@CLCNCHK@G@EDC@@@A@C@ACEIAACA@@AA@@A@KAGC[GA@A@MDA@IJEHCD@B@@BDAB@@A@@B@@@B@@@B@@@B@L@F@B@@C@IBI@@FI@EAABA@@@ABEDKJIHGFIHABFBHBHB@J@HAD@F@D@DAHRBHBHBH@HB@DAFAHAH@@@@DBJ@BB@@@@@@AH@F@BA@@@A@E@IAM@CLCHAFADCCAEGAMCGCMCEAKJONMLIHEHLDELA@CHCF@B@B@H@F@DAB@DCH@F@BAD@FAF@BAD@B@B@B@@AB@B@B@B@B@@@B@@AFCPALAH@BBB@@DB@@D@B@BB@B@D@@@BB@BA@@B@B@@@B@B@B@B@@@BB@B@B@@@BB@@BBBB@@D@B@@@BB@BBBB@BA@A@A@AB@@ABABCBABABCB@BA@ADAB@@@BABAB@@AB@B@BBB@@@BAB@B@@BBBB@B@@AB@BAB@D@@DD@@BB@@@BBB@BBDABABA@@B@BABABAB@BA@@@@BBBBD@BB@B@DBBB@BAB@BAB@@ABCB@B@B@B@BABABBBBBAB@DAFADABCDA@C@ABAB@@@D@BBBB@B@BB@B@@@@BBB@B@F@DAB@@@D@B@D@DBB@BBB@@@B@BB@@BBBBDB@BBBB@BAB@B@@@DD@BB@BBB@BBDD@@BBBBDBBBBBB@@@@B@BAB@BABAB@@AB@@@@BB@B@B@BBBB@FBBBD@B@BAB@B@@@D@D@D@B@B@B@DBDBD@DDBBDBBBB@D@B@B@B@B@@@BBBB@@B@BA@@BAB@B@BAB@BAF@BA@@BBDBBBB@DA@@BAB@@ABAB@@@BADBD@B@DBB@FBB@@BBB@BBBBB@BB@B@B@B@BBB@D@D@B@D@D@B@B@BAB@B@DA@@BA@@B@BA@AB@@@D@B@BBB@B@@@B@@@B@D@B@D@@@B@BA@@DABAB@B@B@@@B@@@DAD@DBB@@B@BBDB@DBD@D@B@BAB@@AB@@@DB@@D@B@DBB@B@B@D@B@B@B@B@B@B@D@FAB@BAD@DBB@@@B@B@BBB@B@B@B@@@@B@@B@@@B@B@BB@@BA@@B@B@@@@BB@@@BAB@@@BA@BB@BBB@@BB@@BB@BBBB@@@BBB@@@B@B@B@B@B@B@BA@@B@@@D@@@BAB@@@@@BA@@@@B@@@B@@@B@BB@@BB@@@BB@@BB@@@@BB@@BBBB@@@@@B@@B@@@B@BB@@@@BAB@@@B@B@B@@@B@@@BB@@D@B@B@B@BBB@@@@@B@@@B@@@DBB@B@B@@B@@BB@@BB@@BB@BB@B@@@B@B@DA@@@@B@BBBBB@@BB@B@B@B@B@B@@@B@@@DA@@B@@@@@BBB@@BB@@@@B@@@B@@BB@B@@@B@@@@A@@B@@@@@@@BBB@@BBB@@@BBB@@B@@BB@@@B@@@BAB@@@BAB@@@B@BA@@@@BA@@@@B@@@B@@A@@@@B@B@@@B@@@@AB@@A@@@@B@@@@@@BBB@BB@BB@@@B@@@B@@@B@@@@B@@BB@@@B@B@@@BB@@B@@BB@@@@B@BB@@B@@BB@@@B@@@B@B@@@BA@@BAB@@@@@B@DB@@B@@@BA@@B@B@B@B@D@BAB@BAB@BA@@BA@@D@@@D@B@D@B@B@B@B@B@@@B@@@BBB@@@BBB@B@BAB@B@B@B@DB@@B@BBBA@@B@BB@@B@@@B@BAB@@@B@B@BA@@@AB@@AB@@AB@B@B@B@B@BAD@B@@@BBB@BB@@@B@@B@@@B@B@@@B@B@B@BA@@@@B@@@BB@@@BAB@@@B@@BB@BB@BBBBB@@BBBB@@B@B@@@B@B@@@@@B@@BB@@BB@@@B@@BB@@@@BBB@@@BBA@@BA@@@@B@@@@A@@B@@@@BB@@B@B@@@B@@@B@@@BAB@@@B@@@B@@AB@B@@@B@@A@@BABABA@A@A@@BA@@BA@@BA@A@@@A@@@AB@@@B@B@@@B@B@B@BAB@BAD@@AB@@ABA@@BAB@B@BAB@B@@ABAB@@AB@B@@A@@B@@@@@B@B@B@@@@@BABA@AB@@AB@B@@@B@B@@@B@@@@BBA@@B@@@@@D@@@B@@@@@@@BBB@@@B@@@BAB@DA@@B@B@B@BAB@BA@@B@D@D@B@B@B@@@D@B@D@B@@@BBB@@@BB@BBBB@B@@BB@BB@@B@@B@@@@B@B@BBB@BB@BBBB@BB@@B@@@B@BAB@B@@BB@@BB@B@D@B@BABABAAA@A@@B@@@D@BBB@@@@@B@@A@A@@@AB@D@B@BA@@@AB@@AB@B@B@BBBBB@B@@@@A@ABAB@@@B@B@B@B@@@B@BBDBD@B@B@B@@AB@@A@AB@@@B@B@B@@CBABABABAB@@@@ABAB@BAD@B@DAB@@@B@B@B@B@B@BBB@BBD@DAF@DAB@D@D@BBD@B@B@B@@@DBDBF@D@DBBAB@B@B@B@B@BBBBDDBBBBBBB@DD@BB@B@D@DA@@BBB@@BA@ABA@@B@BB@D@B@B@D@BADADAB@B@B@D@D@DBB@BBDBDDBB@B@BBB@BBD@@BB@BBBB@B@D@D@D@@@@ABA@AB@BA@@B@"],"encodeOffsets":[[114122,41897]]}},{"type":"Feature","id":"150124","properties":{"name":"清水河县","cp":[111.67222,39.912479],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@@@AB@@AB@B@B@DAD@BBD@B@BBB@B@@@D@BAD@DADA@@BABAB@BA@@@AA@@@@@@AB@@@B@@A@@AA@A@@BA@AB@B@@@B@FDD@DBBBB@B@B@FADA@@B@BABABC@A@A@@@AAAA@AA@@@@@@@AB@@A@@@A@@CA@@A@C@@AAA@A@@@@@@B@BBB@DAB@@A@@AA@AAAB@@AB@DAFADABCDAB@B@B@B@B@F@BAB@B@@AB@D@B@BAB@D@D@BBD@@AD@D@B@D@BAB@BABA@@B@DAD@BAB@@@B@B@F@F@DAF@F@DAD@D@FABAB@@@@@BB@B@@AB@B@@B@FBD@DAB@@B@B@DBBBBB@BBB@BAF@D@B@@@BABADIGEAC@CBE@A@EAA@C@A@CBE@CAAAACAAACAE@CAEAACAAACAAF@BAFAB@D@B@B@BABAB@BBD@D@B@D@BAD@B@BB@DBBBAB@D@@@FAB@B@B@DDDBBBB@B@D@BCBAB@B@B@D@D@D@B@DBD@BBDBB@BAB@BADBDBBBFBD@B@DAB@DBB@B@B@BBFBDAB@D@FAF@HAB@B@FAD@DBB@B@@CFEB@B@D@@@B@@A@A@@DAB@B@DCDABAD@B@B@B@B@D@DBDBD@@@DBB@D@D@DAB@BDB@B@@BBBB@B@B@@AHC@@B@@@@B@F@BBBB@@@D@BB@@BBBDBBBBB@DADADAB@B@BBBBB@@@BB@@@@@D@@@BBB@@@@B@@@BA@@@AB@@@BDB@BB@@D@D@@@B@@BBB@BD@@BB@@BAB@@@@@BB@B@B@BBD@B@@AB@B@B@D@@@@B@@@@B@BA@@@@@@@@BB@@B@@@B@@@B@@A@@@@@@@@@AB@@B@B@@B@BAB@D@B@@@@A@ABCBA@@@@@@B@@B@@D@B@@B@@@@F@B@B@@BBB@@B@@ABAAA@A@@@@@@B@DDD@BBDABA@AB@DBB@BBB@B@B@B@B@BBDB@@@B@@@@DAB@B@@@@@@ABA@@D@B@B@B@@BBBB@DDB@@@BA@@D@B@@@BA@@D@@@B@BA@A@@@A@@B@@@@@B@BBDBB@B@B@B@@@@@BA@@BADCDA@@BABCB@DA@@BC@@@@BABAB@BA@C@@@A@A@@AAA@A@AAA@ACCAACAA@A@@@@@ABCB@DCBC@ABA@@DA@@BAB@BABAB@@@BABABAB@BABABABA@A@A@A@CBA@@@AAC@CACAA@A@C@ABABA@ADABA@@@ABA@A@ABC@CDCFCFCBABA@@@A@A@@@ABABABABADC@A@ABAB@B@FAB@BAB@B@DAB@BADADCB@B@BAB@DABADABADCBCBE@AFAFAJAF@HBF@FBJ@D@BAD@BADABCBA@CAEBEBAB@DAJHFDF@H@T@RCP@@@B@B@B@BACCACCACCACCCCCGICC@@CAAAAAAACCAE@AACAACEACACAACCACAE@A@AAA@AAC@AACAC@ACC@AAAACCCCCCACCEACAA@ECAAC@@AAACA@AAC@A@@CGAC@AA@AAAAA@A[ACAAAC@A@CAE@AACACAE@ACAIG@@@AAAAACCACCCCACEACACACCCAAGGACICCCCCECCACCECAA@CECECAAC@@@CCEAEA@AAA@CAA@C@C@CAE@EBC@CBC@CBE@C@AB@AMAAAAAA@C@CAA@CBC@CBC@C@C@AAC@@AEAC@GAE@CBC@CBABCBA@ABCB@ACScACCCACAACACAEAC@CACACCACCAECCACC@ACA@@ECACACBA@ABEBCDCDCFCDEBCDAAEAAAECCEC@EDAFADABC@C@A@CCCACAECEC@CCC@ABABCBCDABC@C@@AAAC@C@CBCBEBC@C@A@ECCAAAAAA@CDC@CA@AEA@ACA@AAA@AC@ADCBABCBABABC@GBA@CBE@CAEDGDCBCBEBE@CAC@C@AACAGCCEA@CAACAAAAECA@GCCAAACAACCCA@C@CACAAAEAAAECAAC@C@C@CBABABABABC@C@AAG@C@EBC@CBCBCBE@CBEDCBIDKBGBC@GBA@CB@BIFCDADCDCDCFCBCBCDEBCBEBEDOBCBCBEBEBGDGDGDE@E@C@A@CBABC@AB@@YCEAACEECEE@E@A@C@CBC@CBEBCBEDEDEBABGBEBE@CAC@I@CAE@E@ABABABABCFABADCBE@C@C@E@G@EBCBCBC@ABC@EDGBEDEBC@E@E@C@C@EAC@E@EAC@EAEAGAICIEGCICGCGCKAGCIAG@EBC@CHSVCDAD@FBFFBFAJCH@FBBFADGDOFGDEDCFEDODEBKJEL@DEFEDWFCBADAL@DCBABM@E@A@AD@HBL@HAHGJAH@D@DJJHLNPDF@D@DEJCF@FBDDDTHFBF@LDHFDD@F@D@@@@@@AFENCFBDBDF@F@HAH@D@FDDH@H@HADEHAD@DBFDH@F@H@DBFHTLRDHDBPDJBDFBB@DADEHADBFDDBBBDBH@DABABCFCD@DBJ@FADABIDGDEDCFATATGX@R@L@L@@@B@D@D@D@H@B@B@@ABABAB@B@B@BB@BBBB@@@B@@@BAB@BAB@BAB@BABABAB@BAD@B@F@B@BAD@BAB@BA@ABCBCBA@C@AAA@C@A@@BABABCDADABADABADABADAB@BAB@DADADADADABABADCBABABAD@BABAB@BAD@B@BABAB@@EDFDDBFBBBDBDBFDDDDB@@B@B@B@DBD@D@@@DBBBB@DAD@@@BB@@@FBL@TBF@B@B@BB@DBFDB@BB@@AH@BBDBH@F@BBD@B@DB@BDBBBFBB@B@B@@@@BBBL@@BBFDBBB@D@F@HBF@D@HBF@B@B@@ADAD@D@DBH@FADBF@HBDBB@B@BABABAD@DBJ@LBD@H@D@D@FA@@B@D@FAH@BADAD@FAD@@@"],"encodeOffsets":[[114204,41141]]}},{"type":"Feature","id":"150123","properties":{"name":"和林格尔县","cp":[111.824143,40.380288],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@C@A@CBIBCBAJED@DAB@BABAHCTKZQBAFMDOBADEBCBC@A@AAADCBC@C@EACECAAEACAACA@AAC@G@M@C@CBAD@D@D@BA@E@@@ABA@A@AAA@ABA@@ACA@A@ABA@A@AGG@@@A@ABAACAC@AB@@AACBE@ABAB@DAFAD@B@DADAB@@AAC@ABCBA@@DAD@@@FCBAD@FAB@B@BABABC@C@ABCDEBCDCBABAB@DAD@F@B@B@BAHMBCDGBABAD@D@D@BAD@DADBBBFF@BB@BABBB@@AB@B@B@DABAJCBA@A@CAA@@@ADA@AB@FADAFC@@DCBCFE@A@A@A@A@A@@BCB@BADCB@BA@@BABB@@BAB@BA@A@ABA@@BCBADAB@DCBA@@DCBAB@DCH@B@FADAB@BAB@DAJCHAJ@B@BAB@@@BABC@@BAB@B@BA@@@A@CCEAEAACCAA@A@A@I@A@ABA@@@@@@DCBAB@@@BAB@BCDCB@BABABAD@BAHCDA@@BC@@BA@@@ADA@@@ABA@@@C@ABC@ADCB@P@FAB@DAB@DCAC@A@AAAAAAAICC@@A@@@A@A@AA@@AIA@A@@@ABA@A@@AA@AEEAA@ABC@AA@@@C@A@AAKG@A@@@C@CB@B@B@DA@@DBFA@@DBB@DAJBFBBDD@BBNAB@BABCBE@AAAG@AA@AAI@C@A@A@AAABA@ABA@@@AAE@AFAB@FAD@DBFBB@B@B@@AA@@CBG@ADEBEJGDE@A@A@CAACG@AAA@@@A@AAAAAAAAABADA@@@C@AAG@ABA@ABABAJ@F@FAD@BABABAB@@CBC@CBC@A@CBE@C@ABCDCAEAE@@@AAA@@AA@@@@A@@A@@@@@AAA@AAA@@AA@A@@A@@AAC@A@A@@@AA@@@AAAAAAAAAACAAAAAAAAA@@@@BADABA@AD@@AB@@ABABC@ABC@@A@AAAA@@A@AAAAAA@@A@AAAA@A@@AAAAAA@A@@A@@A@@AAC@CA@@C@EAAA@@AA@@AA@A@AAA@@AA@@A@A@AAA@AA@@A@@@AA@@@@C@A@A@@@A@AAAA@@A@@@AA@@A@@@AA@@A@@A@@AA@@A@@AA@AA@@A@CAA@A@A@@AA@AA@@@@AA@@@@A@A@@AA@A@@AAA@@A@@AA@A@@@@A@@@A@@@@@A@@@@@AB@@AAA@A@@AA@@@AA@@A@@@AAA@@@A@@@AA@A@C@@@@@@A@@@@@A@@@A@@@@@@@AB@@@@@@A@@BABA@A@@@AA@@AAA@@@C@@D@BA@@@@@A@@@@AA@@A@@A@@B@BA@@@A@A@@@@@@BA@@B@@A@C@@@@A@AA@@C@@AA@@@AA@@AA@@A@A@@A@@A@@A@@@A@@AC@@AAAA@@AA@@@A@@@A@@@AA@@A@@A@@@@A@@AA@@@AA@@AA@@@AAA@@@AA@@A@@A@A@@BA@@@AA@@AA@@@@AA@A@@A@@A@@A@@A@AA@@@@@AA@@@AA@@A@@AA@@AB@@A@@@@@AB@@@@@@AA@@@@@AAA@A@@@AA@@A@@@@AA@A@AA@@@@AA@@@@A@@AA@@@@AA@@A@@@@AA@@A@AA@AA@AAAA@@@@@A@A@A@@@@@A@A@A@A@@AA@@AAA@@A@@@@@AB@@@BA@A@@@A@A@A@@@A@@@A@@@A@A@@@@@A@@@A@@@@@@@AA@@@A@@@@@AA@@@@AA@@@@AAA@@@@@@A@@@@@A@@@@BA@@AA@A@@@@@AA@@A@@A@A@A@A@A@A@C@A@@@@@@A@@AA@@@@@A@@@AA@@A@@AA@A@@@AA@@AA@@AA@AAA@@A@@AA@@@@A@@AA@@@CA@@@@AAA@@AA@AA@@AA@@@AA@AA@@A@@A@@C@@A@@AA@@AA@@@A@@@A@A@@@A@@AA@@@A@A@@@@AA@@@A@@AAAA@@@AA@AA@@A@@A@@@AAA@@@A@A@@AA@A@@@@@A@@@A@A@A@@@@@A@@@A@@@AA@@AAAACAAAA@@AACAAACCAAAAACAA@ECG@@ABA@A@A@@@O@QDS@G@E@ECIGCBA@ABAFBF@DABADCBABC@ABC@I@EAE@GAE@IBEBEB@BAFADCDABCBABCBA@ABA@A@CDCBABA@CBA@A@ABA@EBA@A@AB@B@BCDABABABAB@B@@@B@B@@ABABEDEDCD@DAD@B@BAB@B@@ABCB@BABAB@B@D@BBBBD@DBD@B@@AB@D@B@B@BABABABABA@ABABAB@@A@ABABA@AB@@CB@@AB@BADCDA@AD@B@@@@@BBBBDDBBDB@BBB@B@BB@@@B@B@@@DABA@ABAB@@@@AD@@CBA@ADAB@@CBCDAB@@AB@@@@A@A@A@A@CAAAA@@@@@A@@@@B@@@BABA@@@C@@@AB@@A@C@@@AB@@A@CCA@AA@AA@A@A@C@@@AB@B@@@@A@A@CB@@@@@A@@CAAAA@A@A@A@A@AAA@CAA@@BABCBAAC@CCA@@@@@@@@BBBAB@BA@@@AA@AA@A@E@@@@@@AA@C@@@@AA@@@@@@@ABAD@B@B@@A@C@A@ABA@@@@A@AA@@B@@@@@@@@@BA@@@A@@@A@@@AA@@@@@@@@ABA@@@@@@A@@C@A@A@A@@BA@C@AAA@A@A@@A@@@@BA@AA@@AC@@AAA@AA@@@C@C@@@AAA@AC@@A@@B@@AB@@A@@@@@AA@A@@@C@@@@AA@@A@AAAAA@A@CBCBCBA@AAAAACAA@@AAC@@@A@AA@A@E@A@@A@@@GD@BA@A@A@AA@AA@A@ACA@CBC@C@A@CA@@C@CACAC@A@A@A@A@C@ABCBCDA@A@CB@@@B@BA@@@C@A@A@EF@DA@A@CAC@EBA@A@GBE@EBC@A@CBEAAAA@A@A@CAA@CBA@C@EAAACACAABA@ABA@CAAAC@CAA@C@C@C@A@A@A@ABADC@A@A@AACACCA@A@A@EB@@C@A@ABAA@CAAA@C@ABC@A@C@C@AAA@ABABA@A@C@A@EBABE@BBBDBBBDFBDBF@DBBBDBBBBB@DAF@D@B@DBB@F@BAF@DBDHFCJABAB@@A@C@E@ABA@AAA@AAAA@C@A@AA@CBC@EAA@@@@ABA@@@AAA@@@@A@ABEBC@C@CBE@E@CBE@E@A@A@@@A@ABC@CBA@@@ABABA@ABC@A@C@C@@BC@AAC@C@A@ABA@C@A@@BA@A@ABE@A@A@A@A@A@CBADCBEBCBA@@BA@BB@BBB@@@BA@CBA@AAA@@@@@@@@BBB@BD@B@@@DB@@@B@@@BA@@B@@@@@@BBB@BB@B@@@B@BADABABA@@@CBEBA@A@A@AACAC@ECA@@@A@A@@BAB@@@BBB@@@BA@@@A@@B@@@@B@@B@@ABA@ABAB@@CBCBC@ABC@@@A@A@AAA@C@AAC@CBA@A@A@@BA@@B@@AB@@@B@@BB@BA@@BA@@BA@@@@B@@B@BB@BBB@@@BB@B@D@DBBBFBDBB@@@B@@@B@@BB@B@@@BB@@@@@@A@A@C@A@@BA@@@ABCD@BABA@ABA@C@G@CB@@@@@@@BBDBBDBBBDB@BBB@@@@AB@@CD@B@@@@@@@BB@B@B@@@B@@@BBBB@B@@AB@@AB@DABAD@@ABCDCDCDAB@B@B@@@@BBBBDD@@BB@BBB@B@B@BB@@BB@@BB@@B@D@D@BABAB@@CBCBCBCBA@A@A@ABA@A@A@@@AB@@A@E@C@A@A@A@A@A@A@A@CBABA@C@A@ABA@ABA@A@EBABC@ABA@A@@@@D@@ABA@CBA@@B@D@BAF@D@@HHHDDDDBBB@@@D@H@D@B@@B@B@D@@@BF@FBH@FAF@@@BCDABAB@B@B@BABEJAD@@B@H@J@H@@@BBHL@@@@FJ@@E@A@@B@BAB@BA@C@@@A@AAC@MBA@A@@@A@ABGAABA@A@A@CB@@C@AAAAEA@@C@ABC@EAIA@@@BCF@@A@GBK@E@C@CBA@@@@F@F@@@X@HFBPDFBHDLBHBBBDBBBFHFFBDBD@D@D@D@DAJAD@B@H@F@D@B@@@BB@DBB@D@DBDBD@DDBBDBDDDBDDB@DBBBBBDD@DBH@BAF@FBF@DAD@B@@ABA@AAA@@@@B@DBF@DBB@H@H@DA@B@FA@@@BBD@FBD@DDDDDBBBBB@@B@BABAB@@ABADCBAB@@@BB@BBB@@BB@BB@@B@BB@BB@@BBBBF@BBDBFBHOZAD@@A@@@@B@BB@BBDFHJBBBBBDDDAD@DAFDAD@B@DACDAD@B@BB@FBF@@B@BJ@BA@@D@@@@@B@@AAA@CE@GA@C@AAABC@CD@F@BJDAFAHAJABBDBF@D@D@B@BADAB@B@@ACAA@EC@AAA@ABAB@BADBH@FBJ@FBH@A@@B@BABB@DBB@B@BBB@B@BBD@BB@CBCBADE@CBADABA@@BCBABA@AB@B@DAF@FBH@FBB@BEAGD@HBDAB@@@@B@@@B@@D@@B@@@D@@@@B@@@B@BA@A@E@@BAD@FAD@B@D@F@FBD@B@@@B@FCDABAB@DAH@LAH@D@@E@@B@@@B@B@@@BAB@@A@CD@LBDA@AB@B@@@B@@@BAB@B@BABAB@B@BAB@BAF@B@B@BADABAB@BAB@DA@@@@B@@@B@@@B@@@B@@@@@B@@@@@@@B@DADABAB@@@BBB@DBBB@@B@@BB@F@F@B@@@@BA@@@@BB@B@@A@AB@@A@@@@@@@@BAB@@@B@BA@@@@FAB@B@D@BAB@@@B@D@D@B@B@B@@@@@HDFBBB@@@@F@F@B@D@B@DBFDHBDBDDD@BBDDD@@BB@BB@@BB@@BD@BBB@@B@BBB@B@@BAHAFAD@@CAA@@@GDMBA@@B@@@@@J@DC@A@C@A@A@@@A@@BA@@B@@@@BB@@@@@B@@@@@B@@A@@B@@@@@@@B@BAB@@@@B@@@@@@@@B@@AB@B@@@@@@@@B@@@@@@@@@@B@@@@@@B@A@BB@@@@@@@@@@B@@@@B@@@@@BABA@@@@B@@@B@J@JAB@D@B@@B@@@D@B@B@@@BHBJBLBJBH@D@H@DBD@@@@@BDAB@D@F@D@BBDDBDA@@BCB@@@BBBD@@@B@DBB@B@D@B@BAAAAC@@B@DA@BB@@@@@BBB@BA@@B@B@B@@@BBB@B@B@BBB@@@BB@B@@@BA@@B@@AB@@@B@BAB@@ABAB@BABAB@BAB@BAD@B@@AB@B@DB@@B@@BBB@BBB@DBB@DBDBBBB@DBBBD@BBDBHDBBDBDBDBB@DB@@DBB@B@B@@@B@BBB@B@BBDDB@BDDBBBB@B@D@D@BBBBBBBBB@@@B@FADCDABADBB@DBB@B@D@BAB@FADAB@B@BAB@D@@BB@B@BA@@B@B@FAF@D@B@BABAD@B@@A@AB@@@B@@BB@DB@B@@BB@B@BBB@DBB@B@B@B@@@BAB@B@@AB@BAB@B@BA@@B@BAB@@@B@B@B@B@D@B@D@@@@BBBB@@B@@BB@DBB@B@@BDBB@DBDA@ABA@ABCB@D@D@@@B@@@D@@@B@B@@@B@B@FBBBD@B@B@B@B@BA@@BABABA@AB@@A@ABA@ABA@C@ABA@ABA@CBA@@@A@@@AB@@AB@B@@AB@@ABA@@@@@@@@B@B@BBBB@@B@B@BAD@D@DAB@D@B@@CBC@A@@B@B@F@F@FAF@D@D@D@D@D@BAH@H@LA"],"encodeOffsets":[[114735,41632]]}},{"type":"Feature","id":"150125","properties":{"name":"武川县","cp":[111.456563,41.094483],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@B@FDB@@@B@B@@AB@@@B@B@BB@@B@BCDC@ABABADCBAD@F@BA@@@@@ABCBABADA@C@A@@BA@ABA@A@C@SFAlKNCD@BAD@FAJAB@D@B@B@DAF@NADB@@BBBBBFFRBHBFLEB@HAJ@BAB@@AAA@A@@@ADARGLEBA@@@CBA@ABA@@B@D@DAD@J@D@H@F@FAB@FCDADCDAFCJCBABAHEDAHCFE@@DALCDADAHCHCBAJCFABAB@BA@@B@@@@@@@BA@@FCFC@@BABA@@@AB@FADBD@DBB@BB@BBBFBDBF@D@B@@@B@BDBDAB@D@F@BABA@ABCDCD@B@@DDDDB@FHFDLLDDBBB@D@FBD@B@B@@BABABAB@B@B@B@@D@HBJBFBHBFBB@B@DBBBBBB@DB^HJYBC@AB@@@B@DBF@@@B@BB@@DBFFB@FF@BFD@@@BABCBFHDFDFDB^@PA^@F@B@DBNFBBFBFBF@JBF@DA@@B@B@FBB@B@DBDB@@@B@BBBBBFBDBB@BBB@@@D@FAFCF@LADADBF@D@B@BBHJDDB@BBH@FBL@D@@AB@BABA@@@C@ABABCBA@@B@FBB@B@B@D@@@FBB@D@BBBDBBD@FBF@H@LAB@FABABCAI@KF@@FJ@@E\\AAD@BBBBB@BT@LSCEJATATANA@AC@@ADBD@F@D@B@DBDBHBHBF@D@DAJELCBAB@@@BBB@D@B@@@@B@FN@BEVABBB@@JPBP@AG@@@GRDACHAFI`DIPK@CAA@AB@BBDBBD@B@B@BAB@@B@@@B@@B@FBH@DBB@D@B@B@H@B@BAFEAA@EAE@A@CBAFG@ABABA@C\\FJDF@D@D@@@AA@@BABAHC@@D@@AA@A@AAB@B@@A@@@@A@AAB@DCBABABABA@A@AB@D@DAFC@@@A@A@@HCDCBADCB@DAD@B@BAB@D@@AB@DA@@D@H@D@B@DB@@@@BCFB@@CB@@LBB@BAB@JAB@@@BABABAFCBABABA@ABE@E@AAAAA@@AC@A@C@C@@EBAACECIEI@ABA@C@ABABBFBHDB@B@@@DCD@J@@@B@BB@@@BBBDDB@@@B@DCDCBC@AFC@ABCDCFIBAA@@AAE@A@ACCCEAA@A@A@ABABADCBCDEBA@A@@@AA@@@CAAA@@@A@CBEBCDEFEB@@C@@BEB@AA@AAAC@A@@A@@BC@A@@@A@CBC@ABABA@ADGBC@AB@@A@@AA@AAE@AAA@@@A@@@@A@@@@@@AA@@A@@@@AA@@CBC@@@A@@@A@A@A@@@A@@@A@AAABA@EBA@CBCB@@A@@@@@@@A@@@AAAA@A@AA@@ACA@A@@@@AA@@@A@@@@A@AAA@A@@@AA@@@@A@@A@@@AAC@@@A@@@AB@@@@A@@A@@A@@AA@AAA@AA@@@AAEAAACAAAC@E@EA@@A@@@@A@@BEBA@A@A@AAA@AA@AAA@A@A@@@A@CBA@ABAB@B@@A@AACAC@AAAAC@@@@ADCBA@@D@BAD@BA@@@AB@@AA@@A@@ACAAAC@A@@A@A@@@@@A@@A@@BA@A@ABC@A@AAA@@@A@@BC@AA@@A@A@A@CA@@A@@AAC@AAC@A@@@@@ACAC@C@A@C@CBC@A@@@AA@A@E@GAEACAA@CAECCCCAA@C@@@A@@A@AAAAACAAA@@A@A@@@A@AAACA@AA@@A@C@@@AAA@@@@ABC@@@A@@@@ABA@@@@C@@A@A@@@@@@A@@@A@@A@ABA@@@@A@@@A@A@A@A@@A@@@AD@@A@A@@@ABA@@@CAA@@AAA@A@@A@AAAAA@A@@@AA@@@ABAB@@@AA@@@@@A@@BA@AAA@@A@A@@A@AAA@@A@AAC@CAAACAAAA@CACAAAC@A@CAA@@@@@@ABA@A@A@@B@B@@@B@B@B@B@BAB@@AB@@A@AAA@ABABA@A@@BC@ABCBABA@A@@@A@AAAA@@A@C@A@AAACAA@A@ABC@CB@BA@A@C@C@C@A@CBC@@@A@@@AAC@A@@A@@@@BA@@BADABA@@BAB@@@BABABA@ABA@@B@D@@AB@BABCBADABA@@@A@@C@CAC@CBC@C@A@C@CBE@CBA@AA@@AAAAC@C@ABA@@@CCEAACA@G@EAEAGAEAA@I@E@G@I@E@C@CBE@A@CAE@E@EAG@GAA@C@A@A@C@CDA@@@C@ABA@ABABABA@ABABCBABA@ABABAB@@ABA@@D@@ABABAB@BABA@@@A@AAA@A@CAA@A@AAAAAAA@A@C@C@E@A@@AA@AAA@A@AA@@@A@@@AA@@BA@A@A@CAAAAAAA@A@C@C@AAACA@AAA@@BE@@BA@AB@@A@AA@AC@@AAA@A@@@AAA@A@C@A@E@C@C@C@C@A@A@CAA@C@ABC@ABA@@@AB@@A@A@A@CBCBA@C@CBA@@BA@@B@DABAB@BA@A@A@A@AB@@A@A@CAA@ABA@A@ABABA@A@CBAAC@A@C@C@ABA@ABCDABA@@@A@GBA@@AA@AA@CBA@CBAB@@A@@ACAACECAAC@A@A@E@@@@A@@@ABA@@BAB@B@@C@C@C@A@A@AA@AAA@@AC@AAA@A@AAACCCAAAA@CAC@C@A@A@A@CBCBABC@A@A@C@A@@A@AB@BAB@@AA@AA@@CBC@A@A@@ACCA@AAAAAACCAAAAA@A@A@A@A@ABCAC@E@CACA@@A@A@A@C@AAC@C@A@CBE@CBC@AAA@AAA@A@A@A@A@@@A@CBA@C@ABA@AB@B@@A@ABABABAB@DA@A@A@@@A@@B@BA@@BA@A@A@C@CAAAA@@@A@A@A@A@@@A@AB@B@B@@A@A@AAAAA@A@A@@BA@@B@@ABA@C@A@@B@@@B@BA@@@@@A@AAC@@@A@@@@BBBABABABA@C@A@A@@AA@@AA@A@ABA@@@A@@@AAA@AA@AAAA@AAA@A@@@@@@AA@@@AAA@@AA@A@AA@AAA@@A@AA@@A@C@A@C@@@A@A@A@C@C@A@@@ABA@ABA@A@A@@@CBA@AB@@A@@@A@AA@@@@@@A@@@C@@@@@A@@@AB@A@@A@@@A@A@@@A@A@@BA@@BABAB@@@@A@A@A@@@@@A@@@@BA@A@@BA@AB@BA@A@ABA@A@AB@@AB@BA@@BC@ABA@ABA@A@A@@@A@A@@@A@@B@@@B@@@BAB@@AB@@AB@@@B@BABABAB@@@BA@@@A@A@@BA@@@A@@@A@AB@@A@@@A@@@A@A@@@AA@@@@@AB@@@@@@A@@B@@AB@AA@@A@AA@@@@AA@@@A@@AA@@AA@@@A@@@@@A@A@@@A@AA@AA@AA@AAAAA@@AAA@@@A@@BA@A@@AA@@A@@@@@ABA@A@A@@@A@A@@@A@@@@A@@AAA@AA@@A@C@ABA@A@A@A@A@@BA@@BA@@B@@ABA@A@@@A@ABA@@@A@@@AAA@@@ABAAA@@@CAA@A@A@A@ABA@A@AA@@A@AA@@A@@@A@A@A@A@A@C@A@C@@@C@@@AB@@ABA@ABA@ABC@A@A@A@A@@@AB@@A@@@CAA@@@@@A@AB@@AB@@A@A@@@A@@@A@@AA@@@AAA@@@@@AA@@@AA@@A@@@A@A@@AA@@@A@@A@@@A@@@A@@@A@@AAAA@AA@@@@@@@A@@B@@@BA@@@@@A@@@A@A@@B@@@@A@@@A@@B@@A@@B@@A@A@@BA@A@@BA@A@@@A@@AA@@@AA@AA@@A@AA@@AA@A@@@@@@@AB@@@@@@A@@@AAA@@@A@@@A@@A@@AA@AA@@@@A@@@CB@@A@@@A@A@A@A@A@A@@AA@AAAAA@@@@@CBA@A@@@A@A@@AAA@@AA@@AA@@@AA@A@A@CA@@A@@@A@@@@@A@AAA@A@A@C@@@AA@@A@@@A@A@A@@@A@AB@@@@AAA@@@A@@@@A@@@@AAAA@@AA@@@@AA@@AA@@A@@AA@@A@A@@@A@@@A@@B@@A@@@@BA@A@@@C@@@AB@@A@A@A@A@A@A@A@@AA@A@@AAAAA@@AA@@AA@AAA@@AAB@@A@AB@@A@@A@@A@A@@@AB@@AAA@A@@@A@@@@A@@A@A@A@A@AAA@A@@@A@CAC@ABA@EBC@A@A@A@A@A@A@C@A@A@A@CAA@C@@@CA@@A@@BA@ABA@C@C@CAA@AC@A@AA@CAC@CB@@A@@@A@A@A@ABCB@@ABA@@@C@A@C@A@@@A@@@A@A@AAA@C@@@A@@BABA@@@AB@@CBA@A@ABA@A@C@C@A@C@C@A@AAA@A@A@A@@AAAAA@AAA@AA@EAA@CAA@C@CAAB@@A@AB@BA@AB@@CBA@AACAAA@@ABE@ABA@ABA@A@AB@@ABA@@@AAAA@@A@A@A@A@C@A@AACAAACCC@CACAA@A@A@C@C@C@@@A@A@ABA@C@AAEAA@AA@A@A@AAA@@@@BA@@BABA@ABA@A@A@@A@AAAACAAAAA@@CCAAA@AAA@@ACC@@A@A@ABA@AA@ACAAAAA@@AAA@@@A@AAA@CAC@A@C@@@A@CBE@A@A@AA@@@@ABA@@B@@@@C@C@ABA@@@C@A@A@CB@AC@CAA@@@C@C@C@A@A@ABAB@@A@EF@@C@@@@A@A@AAAAAAACAAAA@ABA@@ACAACAACAC@CBCBCB@BA@A@A@A@@@@BABCB@BABAB@FADADCDABA@@@A@C@@@ABBBBBBDBDFDDD@@FDBDD@BBBB@BBBBBDBDBD@B@@@@BABCBCB@B@@@BBD@@@B@@@B@@BB@@@@@@@B@B@B@@DB@B@@@B@B@D@@@B@@AB@@@@@B@@B@@BB@@@@B@@@BA@@B@@@B@BBB@B@BABABA@ABA@@B@@A@CBABA@C@A@@@@BA@@@BB@@@BB@B@BBB@BB@DBB@B@D@BBB@B@B@B@D@@@B@@@@BBB@BBB@@@@B@@B@@@B@@@@@BBB@B@@@B@@B@@@B@@ABB@@B@@AB@@@@A@@B@@@HBB@BBBBBBBBBBBBBDD@@@B@@AB@@AB@DABABA@@@@BB@@BDD@B@B@@@B@@A@@B@@ABCBA@ABAAA@@@@BAB@BABABA@A@A@A@@@A@@@@BA@ABABCB@@@@@B@BBD@B@B@@@BA@E@CB@@A@A@A@@@A@@B@@@@A@A@@@AA@@@A@@@AAC@@@@@@A@A@A@A@AAAAAA@@@A@@@AAAA@@A@@A@A@@@A@A@CAA@C@AAABA@A@ABABC@A@@@A@A@@@A@A@@@@@@AA@A@AA@@@@@A@@@AAACA@AABA@@BA@@AC@@A@@A@A@A@A@C@AA@A@A@@@@A@@AA@@BEBABA@A@A@@@AAA@A@AAC@C@ABC@ABABAB@@ADADABABCBABAB@@@@@B@D@B@BAB@BED@D@@@D@@@B@B@@@@@@BB@BBB@@@B@BAB@BAB@B@@@B@@@@DB@BBBB@@B@D@B@BAD@BAB@BCBADCBABA@@B@D@D@B@B@@@BB@BB@B@@@B@@@BB@@B@B@@BB@@BBB@DBHBBBDBB@B@B@@@@@B@B@B@BDBBBBDDBBBB@@@@BDDDBDFBD@BB@BAB@@AB@@@BAD@DAB@B@D@BBBBB@BB@@@BB@@@BBF@BA@@@CBA@AB@@AB@BB@@B@@@D@B@BB@DBFDFBDDBB@BB@B@B@BBB@BBBB@DBBBB@@@BAB@BABAB@DABABC@A@C@ABA@ABAB@DADCDAD@B@BAB@BADADCHAD@BADBD@DBB@BA@AB@@@B@B@@@BA@@@C@EBC@AB@BBB@DBBBB@@@D@@ABADA@@B@@@B@@@B@B@BDD@DBD@DAD@D@D@B@B@B@B@D@B@FADAD@DBD@BB@BBB@BBDBB@BBBBD@@@@B@B@BAD@B@B@B@B@D@@@B@@A@C@EAA@A@A@A@C@ABC@K@I@C@A@C@@BA@@B@@@J@D@D@FAD@FABAHCHAFABABAD@BADAF@BADABEFCDABCDCBABABA@E@A@CAAAAAA@A@AB@@A@AA@@A@A@A@A@A@ABA@A@A@A@A@A@A@ABC@A@CBC@ABA@ABA@ABABABABAB@D@B@B@BBBBDBDDBBB@D@@BDDBDDB@@B@B@@ABABC@ABA@A@ABCB@BA@BBDBBDDBBD@B@@AB@@CBABC@AB@@ADABA@C@A@CBA@@BA@ABA@A@@@ABABABABA@C@ABA@ABA@C@A@CACDA@@B@BCDKFBBABABABBB@B@B@BB@@@D@B@D@DBBBBBB@@@D@BAF@BAD@D@B@B@D@BAB@BA@@BABCB@BAB@@@B@BBBBBB@BBBDBDDBBDB@BBB@BBBB@BBBD@B@@@D@B@B@D@@BBD@BAD@@BB@@@AB@@CBABCBA@@@@BB@B@B@B@B@BB@B@B@@@@ABEDCDCBABAB@@@B@@B@B@DABABAB@BAB@@@BB@BABCD@B@BB@B@DBB@BAB@BA@ADA@@BA@@B@@@@BAB@BB@@@B@B@DADABAB@B@B@@@@AB@B@D@BAB@BA@@BA@@LEBADAB@DA@@B@F@D@BBB@DAB@DAD@D@B@@@@A@A@A@AB@BAB@BAB@@@@@@D@F@@@BBDD@@BBB@@BBB@F@FBB@@@@BADBB@B@D@D@@BB@@D@B@@BB@@B@@@B@BBBDBFBBBB@B@D@B@BBB@BBB@BDDBBBB@DDDBB@BBBBBAB@B@B@@@BD@BBB@BBBB@BBDBFBDBDBBBB@@BDAF@N@@@@B@B@B@B@@@BAB@DAB@@ABA@AB@B@@@BBBB@DBF@DBDBD@@BBBBBBDBBD@BBD@B@D@AAAA@@@@FAD@D@BB@@BB@BBBB@B@B@B@@AB@AA@ACACC@@@AB@BBD@B@B@@A@@@A@@@@B@BAB@BA@AB@B@H@F@@@@@B@@@BAB@BAB@@@B@@@B@B@@@B@B@@B@@BB@@BB@@B@@@B@B@B@B@B@B@BB@@@@@BB@B@B@@BB@B@BAB@D@B@B@BABBB@B@@@@B@@BB@@@@@BB@BBB@@@B@B@B@FAD@B@B@@@D@B@B@DBB@DBBBBBB@@@B@@@BAB@BABAB@@@D@D@D@B@@@B@@AA@@A@@@A@@@A@A@A@@B@@A@@@A@@@AA@AAAC@AAAAACA@@AA@A@A@AAA@A@AA@@AB@@A@@B@BAB@B@FAD@F@DAD@D@B@D@B@D@D@B@B@B@B@@@B@B@BB@BFB@@BBD@B@D@B@B@D@B@BAD@B@DAB@BA@@B@@@@@@@@A@A@@@CA@@A@C@@AA@A@A@@@@BA@@B@B@D@F@B@D@@@B@B@BAB@DAACAA@C@A@A@@ACAANAdERADAD@LCTIFARCJFBBHFBBBH@B@FAB@BBBHVJ@DAF@D@B@D@B@D@@@@@@A@E@AB@D@B@DAB@DA@@BABAB@BCBA@@BA@@@A"],"encodeOffsets":[[113663,42326]]}}],"UTF8Encoding":true};
	
	//地图
	dtoption = {
		animation: false,
	    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
	        offset: 0,
	        color: 'rgba(0,55,205,0.8)'
	    }, {
	        offset: 1,
	        color: 'rgba(0,0,55,0.1)'
	    }]),
		title: {  
            text: '呼和浩特市分布图',  
            x:'center',
            textStyle : {
				color : '#fff'
			}
        }, 
        tooltip : {
            trigger: 'item',
            formatter: function(params){
            	return params.seriesName + '<br/>' + params.data.name + '   每平方公里数量：' + params.data.value;
            }
        },
        dataRange:{  
       show : true,
       min:0,  
       max:300,  
       text:['高','低'],  
       realtime:true,  
       calculable:true,  
            // color:['orangered','yellow','green'] 
            color:['rgba(0,44,144,0.3)','rgba(11, 0, 244, 0.3)','rgba(242,101,34,0.1)'] //区块颜色
        }, 
        visualMap: {
            min: 0,
            max: 300,
            calculable: true,
            // color: ['#d94e5d','#eac736','#50a3ba'],
            color: ['#000','#000','#000'],
            text: ['高', '低'],
            textStyle: {
                color: '#0c00ff'
            }
        },
        series:[  
        {  
            name:'犯罪数量',  
            type:'map',  
            map:'呼和浩特市', 
            zoom : 1.2,
            roam:true,

            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                         color: "rgb(249, 249, 249)"
                     }
                 },
                 borderColor: '#0012ff',//线条颜色
                 borderWidth: 0.5,//线条宽度
             },
             emphasis:{
                label:{show:true},
                areaColor:"#004efe"//鼠标移入背景颜色
            }
         },
         data:[  
         {name:'玉泉区',value:Math.round(Math.random()*500)},
         {name:'新城区',value:Math.round(Math.random()*500)},
         {name:'赛罕区',value:Math.round(Math.random()*500)},
         {name:'回民区',value:Math.round(Math.random()*500)},
         {name:'武川县',value:Math.round(Math.random()*500)},
         {name:'土默特左旗',value:Math.round(Math.random()*500)},
         {name:'托克托县',value:Math.round(Math.random()*500)},
         {name:'和林格尔县',value:Math.round(Math.random()*500)},
         {name:'清水河县',value:Math.round(Math.random()*500)}
         ],
     }  
     ], 
 };
	//获取地图数据参数
    echarts.registerMap('呼和浩特市', hhht);
    dtchart.setOption(dtoption);

	
	//年份时间轴数据
	var nsjzoption={
		    timeline:{
		        data: ['2018','2019','2020','2021',],
		        axisType : 'category',
		        playInterval:'3000',
		        autoPlay : true,
		        //currentIndex : 4,//默认年份下标
		        //orient : 'vertical',
		        //left : '10%',
		        label : {
		            formatter : function(s) {
		                return s.slice(0, 4);
		                },
		            normal :{
		            	color : '#fff',
		            	fontsize : 14,
		            },
		            emphasis :{
		            	color : '#fff',
		            	fontsize : 14,
			    	},
		        },
	            lineStyle:{
			    	color: '#fff',
			    	type : 'dotted',
			    },
			    itemStyle:{
			    	normal :{
			    		color : '#fff'
			    	},
			    	emphasis :{
			    		color : '#fff'
			    	},
			    	
			    },
			    checkpointStyle:{
			    	symbol : 'roundRect',
			    	color : '#0066FF',
			    	borderColor :'rgba(0,204,255,0.5)'
			    },
			    controlStyle:{
			    	normal :{
			    		color:'#fff',
			    		borderColor:'#fff',
			    	},
			    	emphasis :{
			    		color : '#fff',
			    		borderColor:'#fff',
			    	},
			    }
		    },
		    
		};
	//自动播放或点击年份时间轴查询图表数据
	nsjzchart.on("timelinechanged",function(param){
		var year = yearArr[param.currentIndex];
    });  
        
	//分类时间轴数据
	var flsjzoption={
		    timeline:{
		        data:['2018','2019','2020','2021',],
		        axisType : 'category',
		        playInterval:'3000',
		        label : {
		            formatter : function(s) {
		                return s.slice(0, 4);
		                },
		            normal :{
		            	color : '#fff',
		            	fontsize : 14,
		            },
		            emphasis :{
		            	color : '#fff',
		            	fontsize : 14,
			    	},
		        },
	            lineStyle:{
			    	color: '#fff',
			    	type : 'dotted',
			    },
			    itemStyle:{
			    	normal :{
			    		color : '#fff'
			    	},
			    	emphasis :{
			    		color : '#fff'
			    	},
			    	
			    },
			    checkpointStyle:{
			    	symbol : 'roundRect',
			    	color : '#0066FF',
			    	borderColor :'rgba(0,204,255,0.5)'
			    },
			    controlStyle:{
			    	normal :{
			    		color:'#fff',
			    		borderColor:'#fff',
			    	},
			    	emphasis :{
			    		color : '#fff',
			    		borderColor:'#fff',
			    	},
			    }
		    },
		};
	
	
	//自动播放点击分类时间轴查询图表数据
	flsjzchart.on("timelinechanged",function(param){
		var year = getCategoryName(nsjzchart,yearArr);;
		var categoryIndex = param.currentIndex;
		getAreaDailyFun(categoryIndex,yearArr[year]);
    });
	
	//设置初始数据
	zztchart.setOption(zztoption);
	btchart.setOption(btoption);
	btchart2.setOption(bt2option);
	dtchart.setOption(dtoption);
	nsjzchart.setOption(nsjzoption);
    flsjzchart.setOption(flsjzoption);
    
});

	
        
        