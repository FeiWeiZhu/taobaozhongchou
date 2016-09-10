function copy(origin){
	var result;
	if(typeof origin === "object"){
		if(origin instanceof Array){
			result = [];
			for(var i = 0, len = origin.length; i < len; i++){
				result[i] = copy(origin[i]);
			}
		}else{
			result = {};
			for(var i in origin){
				result[i] = copy(origin[i]);
			}
		}
	}else{
		result = origin;
	}
	return result;
}
var lc = [{fl : "1F",title : "科技",ID : "fund1"},
			{fl : "2F",title : "生活",ID : "fund2"},
			{fl : "3F",title : "设计",ID : "fund3"},
			{fl : "4F",title : "娱乐",ID : "fund4"},
			{fl : "5F",title : "农业",ID : "fund5"},
			{fl : "6F",title : "公益",ID : "fund6"}];
var a = 0;
var data = {"code":0,"data":[{"name":"魅族智能手表","label":[],"rate":"","sum":"1604849.00","amount":"","image":"https://img.alicdn.com/tps/TB1p.faNXXXXXcSXXXXXXXXXXXX-346-370.jpg_q90.jpg"},{"name":"F1F2秒睡枕-可以改善睡眠的多功能枕头","label":["定制","日常生活","家居"],"rate":"1881%","sum":"1881735.30","amount":"38833","image":"//img.alicdn.com/tfscom/TB1b.a0LXXXXXa_apXXSutbFXXX_300x300.jpg"},{"name":"时尚外观智能“芯”——终结腕上手机的轻智能腕表","label":["饰品","定制","正版授权"],"rate":"171%","sum":"1718387.00","amount":"730","image":"//img.alicdn.com/tfscom/TB12IAdMVXXXXaaXXXXSutbFXXX_300x300.jpg"},{"name":"TROZK特洛克 甜甜圈智能充电站 旅行搭讪神器","label":["家电","旅游","家居"],"rate":"1367%","sum":"1367621.00","amount":"1959","image":"//img.alicdn.com/tfscom/TB1dVBdLpXXXXaDXpXXSutbFXXX_300x300.jpg"},{"name":"明能移动电站 完美演绎多口充电器和移动电源的结合","label":["原创","移动储存","日常生活"],"rate":"1061%","sum":"1061210.00","amount":"8669","image":"//img.alicdn.com/tfscom/TB1MVhpLpXXXXaiXFXXSutbFXXX_300x300.jpg"},{"name":"终于·遇见你  nCHAO阳光智能双肩包","label":["箱包","穿戴设备","户外"],"rate":"1245%","sum":"1245266.00","amount":"3837","image":"//img.alicdn.com/tfscom/TB1N5W2NXXXXXbSXVXXXXXXXXXX_300x300.jpg"},{"name":"一款可以游泳的耳机  自游娱乐新玩法，你将泳不寂寞","label":["音乐","穿戴设备","户外"],"rate":"943%","sum":"943299.00","amount":"2710","image":"//img.alicdn.com/tfscom/TB1KyizLXXXXXXQXVXXSutbFXXX_300x300.jpg"},{"name":"放松，只要19分钟。回车智能眼罩易休iPhone版","label":["人文关怀","健康医疗","穿戴设备"],"rate":"920%","sum":"920752.00","amount":"1478","image":"//img.alicdn.com/tfscom/TB1O61jMVXXXXXzXVXXSutbFXXX_300x300.jpg"},{"name":"好玩智能三脚架","label":[],"rate":"","sum":"216600.00","amount":"","image":"https://img.alicdn.com/tps/TB15RjbNXXXXXb7XXXXXXXXXXXX-355-371.png_q90.jpg"},{"name":"阿里健康棒米智能备孕体温计—送给最爱的她「任性日」","label":["个人护理","健康医疗","家居"],"rate":"519%","sum":"519572.00","amount":"3229","image":"//img.alicdn.com/tfscom/TB1UeGBNXXXXXccapXXSutbFXXX_300x300.jpg"},{"name":"【智能掬月灯】让您的生活更有质感","label":["家电","日常生活","家居"],"rate":"737%","sum":"737088.00","amount":"2822","image":"//img.alicdn.com/tfscom/TB19EZHMVXXXXbKaXXXSutbFXXX_300x300.jpg"},{"name":"ViTUN超声波洗衣笔—污渍终结者!羡煞旁人！！","label":["家电","旅游","家居"],"rate":"731%","sum":"731854.00","amount":"1581","image":"//img.alicdn.com/tfscom/TB17OOCNXXXXXa6XVXXSutbFXXX_300x300.jpg"},{"name":"DSI  呼吸伴侣 改善儿童夜咳 尤为有效","label":["原创","日常生活","健康医疗"],"rate":"645%","sum":"645312.00","amount":"4577","image":"//img.alicdn.com/tfscom/TB1lwY1MVXXXXc5XVXXSutbFXXX_300x300.jpg"},{"name":"【升级运动版】蚁视手机VR眼镜 尽享赛事实境现场","label":["电影","游戏","穿戴设备"],"rate":"587%","sum":"587920.00","amount":"6532","image":"//img.alicdn.com/tfscom/TB1B6XPNXXXXXX2XXXXSutbFXXX_300x300.jpg"},{"name":"「原手机号，全球0漫游」出行上网通话神器—络漫宝","label":["网络设备","旅游","办公"],"rate":"553%","sum":"553213.43","amount":"13692","image":"//img.alicdn.com/tfscom/TB1BV7aLXXXXXczXpXXSutbFXXX_300x300.jpg"},{"name":"智能WIFI门窗报警器 防不关门防盗报警 手机推送","label":["网络设备","家庭安防","家居"],"rate":"859%","sum":"859029.00","amount":"58162","image":"//img.alicdn.com/tfscom/TB1L6ZoMVXXXXb_XXXXXXXXXXXX_300x300.jpg"},{"name":"中华魂宝寿山石","label":[],"rate":"","sum":"120106.00","amount":"","image":"https://img.alicdn.com/tps/TB157PrNXXXXXa1XpXXXXXXXXXX-346-370.png_q90.jpg"},{"name":"翡翠玉石与氧化锆精尖集合的新材料陶瓷刀具——玉刃","label":["原创","纯手工","厨房"],"rate":"2230%","sum":"1115403.00","amount":"2077","image":"//img.alicdn.com/tfscom/TB19k2cMVXXXXcfXXXX1rlbFXXX_300x300.jpg"},{"name":"东方普罗旺斯 薰衣草主题香旅典范之作","label":["日常生活","旅游","家居"],"rate":"989%","sum":"989899.80","amount":"55008","image":"//img.alicdn.com/tfscom/TB1xyBTLpXXXXXFapXXSutbFXXX_300x300.jpg"},{"name":"NONOO潮我看荧光杯,年轻就要自带光芒","label":["办公","户外"],"rate":"415%","sum":"415962.00","amount":"6785","image":"//img.alicdn.com/tfscom/TB13kb6MVXXXXcOXXXXSutbFXXX_300x300.jpg"},{"name":"真银纤维功能袜——从根本，让脚臭消失","label":["环境保护","健康医疗","健身"],"rate":"661%","sum":"661972.00","amount":"9620","image":"//img.alicdn.com/tfscom/TB1AALPNXXXXXXrXXXXSutbFXXX_300x300.jpg"},{"name":"铜师傅 劲爆新作 《大圣之叱咤风云》全黄铜 纯手绘","label":["摆件","原创","纯手工"],"rate":"750%","sum":"375134.00","amount":"189","image":"//img.alicdn.com/tfscom/TB1HgzrLXXXXXc8XXXXSutbFXXX_300x300.jpg"},{"name":"非遗手艺，江南古镇老底子蚕丝被，给你一”被“子呵护","label":["人文关怀","本地特色","家居"],"rate":"550%","sum":"275056.00","amount":"8855","image":"//img.alicdn.com/tfscom/TB1MmJzLpXXXXXWapXXXXXXXXXX_300x300.jpg"},{"name":"一缘斋——星月菩提小叶紫檀佛珠手串","label":["饰品","原创","纯手工"],"rate":"107%","sum":"107423.00","amount":"347","image":"//img.alicdn.com/tfscom/TB1UMPPNXXXXXXYXXXXSutbFXXX_300x300.jpg"},{"name":"星际迷航官方定制 新一代VR眼镜","label":[],"rate":"","sum":"370439.00","amount":"","image":"https://img.alicdn.com/tps/TB1zxXiNXXXXXbsXXXXXXXXXXXX-282-372.jpg_q90.jpg"},{"name":"星际迷航定制版机械键盘游戏耳机","label":["电影","正版授权","电脑硬件"],"rate":"3183%","sum":"1591565.70","amount":"24613","image":"//img.alicdn.com/tfscom/TB1oaIZMVXXXXX8apXXSutbFXXX_300x300.jpg"},{"name":"【幸运石 X 星际迷航3】正版周边众筹","label":["周边产品","电影","正版授权"],"rate":"509%","sum":"50932.41","amount":"352","image":"//img.alicdn.com/tfscom/TB19nm3NXXXXXaHXpXXXXXXXXXX_300x300.jpg"},{"name":"《星际迷航3:超越星辰》经典文具系列周边众筹","label":["周边产品","电影","原创"],"rate":"262%","sum":"26234.00","amount":"256","image":"//img.alicdn.com/tfscom/TB1WVYPMVXXXXbXaXXXSutbFXXX_300x300.jpg"},{"name":"《星际迷航3:超越星辰》趣味文具系列首发","label":["电影","原创","正版授权"],"rate":"125%","sum":"12571.00","amount":"169","image":"//img.alicdn.com/tfscom/TB101jLMVXXXXcvaXXXSutbFXXX_300x300.jpg"},{"name":"星际迷航系列衍生周边 手机支架 T恤 杯子 雨伞","label":["周边产品","电影","正版授权"],"rate":"1252%","sum":"25055.00","amount":"589","image":"//img.alicdn.com/tfscom/TB1yXvBMVXXXXbvaXXXSutbFXXX_300x300.jpg"},{"name":"卡西欧G-SHOCK星际迷航定制限量礼盒版","label":["电影","正版授权","穿戴设备"],"rate":"184%","sum":"18400.00","amount":"10","image":"//img.alicdn.com/tfscom/TB1rlbBMVXXXXXvXXXXSutbFXXX_300x300.jpg"},{"name":"阿里影业娱乐宝X星际迷航 定制苹果快充数据线","label":["周边产品","电影","正版授权"],"rate":"246%","sum":"12324.00","amount":"114","image":"//img.alicdn.com/tfscom/TB1V5OMNXXXXXcJaXXXXXXXXXXX_300x300.jpg"},{"name":"时尚公益竹艺品","label":[],"rate":"","sum":"11501.00","amount":"","image":"https://img.alicdn.com/tps/TB1dhLcKVXXXXa8XVXXXXXXXXXX-346-370.jpg_q90.jpg"},{"name":"八大主播爱心险，给环卫工人一份爱的保障","label":["人文关怀","原创"],"rate":"526%","sum":"52665.00","amount":"1239","image":"//img.alicdn.com/tfscom/TB1M_tMLXXXXXc5XVXXSutbFXXX_300x300.jpg"},{"name":"给流浪狗狗一次饱饭","label":["爱心义卖","动物保护","公仔"],"rate":"170%","sum":"17055.00","amount":"560","image":"//img.alicdn.com/tfscom/TB1SdZFMVXXXXXZXpXXSutbFXXX_300x300.jpg"},{"name":"画好月圆——带上爱心月饼过中秋","label":["爱心义卖","定制","纯手工"],"rate":"146%","sum":"14509.00","amount":"111","image":"//img.alicdn.com/tfscom/TB1VFHoMVXXXXaqXXXXSutbFXXX_300x300.jpg"},{"name":"为山区儿童筹梦想礼包","label":["人文关怀"],"rate":"127%","sum":"12730.00","amount":"283","image":"//img.alicdn.com/tfscom/TB1CSK.MVXXXXa5apXXSutbFXXX_300x300.jpg"},{"name":"开学季！中国第一本长江江豚科普摄影书《江豚淘淘》","label":["动物保护","周边产品","原创"],"rate":"14%","sum":"1127.00","amount":"41","image":"//img.alicdn.com/tfscom/TB1QhjRMVXXXXafXFXXSutbFXXX_300x300.jpg"},{"name":"眼盲心不盲，用行动传递爱","label":["扶贫"],"rate":"96%","sum":"10354.00","amount":"302","image":"//img.alicdn.com/tfscom/TB1ynucLpXXXXagXpXXSutbFXXX_300x300.jpg"},{"name":"上海根与芽·百万植树计划丨里约奥运纪念林","label":["环境保护"],"rate":"76%","sum":"3816.00","amount":"660","image":"//img.alicdn.com/tfscom/TB1oJSXLpXXXXabXFXXSutbFXXX_300x300.jpg"},{"name":"【颠覆传统模式】优质低价的私人定制浪漫海岛游来啦！","label":["定制","旅游","户外"],"rate":"29%","sum":"14880.00","amount":"6","image":"https://img.alicdn.com/tps/TB15RjbNXXXXXb7XXXXXXXXXXXX-355-371.png_q90.jpg"},{"name":"BeginONE智能混合动力折叠车，寻找时尚新生活","label":["日常生活","办公","户外"],"rate":"176%","sum":"176735.00","amount":"65","image":"//img.alicdn.com/tfscom/TB1BNAWMVXXXXXIapXXXXXXXXXX_300x300.jpg"},{"name":"FDY——壁挂式智能家居WI-FI音箱","label":["音乐","家庭影院","家居"],"rate":"13%","sum":"13965.00","amount":"35","image":"//img.alicdn.com/tfscom/TB1a_PwNXXXXXa3XFXXSutbFXXX_300x300.jpg"},{"name":"一群大学生的助学之路——传承湘西竹编工艺","label":["纯手工","本地特色","日常生活"],"rate":"0%","sum":"38.00","amount":"1","image":"//img.alicdn.com/tfscom/TB1AMqvMVXXXXb.XpXXSutbFXXX_300x300.jpg"},{"name":"悟空 创意马克杯","label":["原创","办公","家居"],"rate":"0%","sum":"288.00","amount":"9","image":"//img.alicdn.com/tfscom/TB1j94CLpXXXXXaXpXXwu0bFXXX_300x300.jpg"},{"name":"遂昌竹炭黑陶，以竹入陶——匠心三碗。","label":["纯手工","日常生活","家居"],"rate":"0%","sum":"272.00","amount":"4","image":"//img.alicdn.com/tfscom/TB1KIzvMVXXXXXyXXXXSutbFXXX_300x300.jpg"},{"name":"【兰贵人】不谈人生乌龙事,且喝人参乌龙茶","label":["纯手工","本地特色","产地直供"],"rate":"107%","sum":"53550.70","amount":"1240","image":"//img.alicdn.com/tfscom/TB1BZttNXXXXXXKaXXXwu0bFXXX_300x300.jpg"},{"name":"侗族古老植物染布——让您的爱巢添加一份清新的浪漫。","label":["原创","日常生活","家居"],"rate":"0%","sum":"0","amount":"0","image":"//img.alicdn.com/tfscom/TB1oc5MMVXXXXbNXFXXSutbFXXX_300x300.jpg"},{"name":"为千万滴滴车主众筹车主节","label":["爱心义卖","人文关怀","健康医疗"],"rate":"0%","sum":"454.00","amount":"227","image":"//img.alicdn.com/tfscom/TB12x2CNXXXXXbaXpXXSutbFXXX_300x300.jpg"},{"name":"房县椴木小花菇—<人工培植，手工采收>农家的味道","label":["纯手工","本地特色","产地直供"],"rate":"0%","sum":"28.00","amount":"1","image":"//img.alicdn.com/tfscom/TB1Rpj_MVXXXXa9aXXXSutbFXXX_300x300.jpg"},{"name":"9元，就能为藏区孤寡老人送一天的爱心餐","label":["爱心义卖","人文关怀","扶贫"],"rate":"25%","sum":"3090.00","amount":"111","image":"//img.alicdn.com/tfscom/TB1BcdoNXXXXXbUXXXX1rlbFXXX_300x300.jpg"},{"name":"七种巧木的有缘千里，简单中的不简单，智慧攒盘。","label":["原创","纯手工","家居"],"rate":"2%","sum":"888.00","amount":"1","image":"//img.alicdn.com/tfscom/TB1WnQuLXXXXXcMXXXXSutbFXXX_300x300.jpg"},{"name":"【颠覆传统模式】优质低价的私人定制浪漫海岛游来啦！","label":["定制","旅游","户外"],"rate":"29%","sum":"14880.00","amount":"6","image":"//izhongchou.taobao.com/dreamdetail.htm?spm=a215p.1596646.4.11.m7YmtC&id=20044204"},{"name":"BeginONE智能混合动力折叠车，寻找时尚新生活","label":["日常生活","办公","户外"],"rate":"176%","sum":"176735.00","amount":"65","image":"//img.alicdn.com/tfscom/TB1BNAWMVXXXXXIapXXXXXXXXXX_300x300.jpg"},{"name":"FDY——壁挂式智能家居WI-FI音箱","label":["音乐","家庭影院","家居"],"rate":"13%","sum":"13965.00","amount":"35","image":"//img.alicdn.com/tfscom/TB1a_PwNXXXXXa3XFXXSutbFXXX_300x300.jpg"},{"name":"一群大学生的助学之路——传承湘西竹编工艺","label":["纯手工","本地特色","日常生活"],"rate":"0%","sum":"38.00","amount":"1","image":"//img.alicdn.com/tfscom/TB1AMqvMVXXXXb.XpXXSutbFXXX_300x300.jpg"},{"name":"悟空 创意马克杯","label":["原创","办公","家居"],"rate":"0%","sum":"288.00","amount":"9","image":"//img.alicdn.com/tfscom/TB1j94CLpXXXXXaXpXXwu0bFXXX_300x300.jpg"},{"name":"遂昌竹炭黑陶，以竹入陶——匠心三碗。","label":["纯手工","日常生活","家居"],"rate":"0%","sum":"272.00","amount":"4","image":"//img.alicdn.com/tfscom/TB1KIzvMVXXXXXyXXXXSutbFXXX_300x300.jpg"},{"name":"【兰贵人】不谈人生乌龙事,且喝人参乌龙茶","label":["纯手工","本地特色","产地直供"],"rate":"107%","sum":"53550.70","amount":"1240","image":"//img.alicdn.com/tfscom/TB1BZttNXXXXXXKaXXXwu0bFXXX_300x300.jpg"},{"name":"侗族古老植物染布——让您的爱巢添加一份清新的浪漫。","label":["原创","日常生活","家居"],"rate":"0%","sum":"0","amount":"0","image":"//img.alicdn.com/tfscom/TB1oc5MMVXXXXbNXFXXSutbFXXX_300x300.jpg"}],"message":"success"};

var hot = [{"name":"1秒精准测温度计","label":"医疗级1秒精准测量温度，让宝宝、牛奶、环境、宠物等测温变简单。","title":"达成率",
				"value":"1078%","image":"https://img.alicdn.com/tps/TB17JgSKFXXXXc9XVXXXXXXXXXX-222-450.jpg_q90.jpg"},
			{"name":"大圣之大胜","label":"铜师傅力作，全黄铜，纯手绘","title":"达成率",
				"value":"18950%","image":"https://img.alicdn.com/tps/TB1KG4cKFXXXXcfaXXXXXXXXXXX-222-450.jpg_q90.jpg"},
			{"name":"kalar洗衣器","label":"智能无线超声波","title":"达成率",
				"value":"1447%","image":"https://img.alicdn.com/tps/TB1SOFwKFXXXXcaXpXXXXXXXXXX-222-450.jpg_q90.jpg"},
			{"name":"人脸加密U盘","label":"人脸加密U盘，用前 \"刷\" 脸，U盘无忧！保护你的隐私。","title":"达成率",
				"value":"5148%","image":"https://img.alicdn.com/tps/TB1aOocKFXXXXcAXFXXXXXXXXXX-222-450.jpg_q90.jpg"},
			{"name":"三体壁挂智能音箱","label":"FDY开启智能家居音箱壁挂时代.让你享受完美的家居音乐体验.","title":"达成率",
				"value":"1099%","image":"https://img.alicdn.com/tps/TB1g3MWKFXXXXaNXVXXXXXXXXXX-222-450.jpg_q90.jpg"}];
	for(var i = 0;i < data.data.length;i++){
		if(data.data[i].image.indexOf("http") < 0){
			data.data[i].image = "https:" + data.data[i].image;
			data.data[i].rate = parseInt(data.data[i].rate);
		}	
	}
	
function adad(data){
	var _data = copy(data.data);
	_data.splice(8, _data.length);
	$(".fundDiv1").append(template("tmpl1", {
		data : data.data,
		lc : lc,
		a : a
	}));
}
function coco(hot){	
	for(i = 0,hotLen = hot.length; i < hotLen; i++){
		$(".container").append("<div class=\'case\''>"
									+"<img src=\'"+hot[i].image+"\' />"
									+"<a class=\'link\'>"
										+"<p class=\'title\'>" + hot[i].name + "</p>"
										+"<p class=\'label\'>" + hot[i].label + "</p>"
										+"<div class=\'section\'>"
											+"<p class=\'title\'>" + hot[i].title + "</p>"
											+"<p class=\'value\'>" + hot[i].value + "</p>"
										+"</div>"	
									+"</a>"
								+"</div>")
	}
	
}
adad(data);
coco(hot);