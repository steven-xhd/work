


//菜单下拉
$(function(){
	var $describu_school = $('#describu_school')
var $student_work = $('#student_work')
var $recuit_student = $('#recuit_student')
var $public_service = $('#public_service')
var $change_language = $('#change_language')

$describu_school.mouseenter(function(){
    $('.describu_school').slideDown()
})
$('.describu_school').mouseleave(function(){
	$('.describu_school').slideUp()
})
$student_work .mouseenter(function(){
    $('.student_work').slideDown()
})
$('.student_work').mouseleave(function(){
	$('.student_work').slideUp()
})
$recuit_student .mouseenter(function(){
    $('.recuit_student').slideDown()
})
$('.recuit_student').mouseleave(function(){
	$('.recuit_student').slideUp()
})
$public_service .mouseenter(function(){
    $('.public_service').slideDown()
})
$('.public_service').mouseleave(function(){
	$('.public_service').slideUp()
})
$change_language.mouseenter(function(){
    $('.change_language').slideDown()
})
$('.change_language').mouseleave(function(){
	$('.change_language').slideUp()
})

})

/*图片滚动*/

$(function(){
			
			var PAGE_WIDTH = 1600
			var ITEM_TIME = 20
            var TOTAL_TIME = 400
            var $point = $('.div_pointer>span')
            var $pic = $('.pic')
            var $head = $('.head')
            var currpoint = 0 //当前point的下标
            var currLeft = $pic.position().left//当前图片位于父元素左边的距离
            //设置下标为0的point为初始值改变颜色
            $($point.get(currpoint)).css({"background":"orange","opacity":1})
           
           $point.click(function(){ //点击对应图标图片相应跳转
           	$($point.get(currpoint)).css({"background":"black","opacity":0.5})
           	currpoint = $(this).index()
           /*	currLeft = -PAGE_WIDTH*(currpoint+1)
            $pic.css('left',currLeft)*/
           
            	$pic.animate({
            		left:-PAGE_WIDTH*(currpoint+1)
            	},500)
            
            console.log(currLeft)
           	$($point.get(currpoint)).css({"background":"orange","opacity":1})        	
            })           
            //图片自动轮播           
            var intervalId = setInterval(function(){
            	$($point.get(currpoint)).css({"background":"black","opacity":0.5})
            	change_pic()          	
            	currpoint += 1
            	if(currpoint > 2){//如果超过图片数量，从图片下标0再次开始
            		currpoint = 0
            	}
                $($point.get(currpoint)).css({"background":"orange","opacity":1})
            },5000)
            //鼠标进入图片停止轮播,鼠标移出继续轮播
            $head.hover(function(){
            	clearInterval(intervalId)
            },function(){
            	intervalId = setInterval(function(){
            	$($point.get(currpoint)).css({"background":"black","opacity":0.5})
            	change_pic()           	
            	currpoint += 1
            	if(currpoint > 2){//如果超过图片数量，从图片下标0再次开始
            		currpoint = 0
            	}
                $($point.get(currpoint)).css({"background":"orange","opacity":1})
            },4000)
            })
                      
           //图片切换函数
            function change_pic(){
                var item_offset = -PAGE_WIDTH/(TOTAL_TIME/ITEM_TIME)//每次移动的距离           	
            	console.log(currLeft)
            	var targetLeft = currLeft - PAGE_WIDTH//目标距离
            	var imagecount = $point.length
            	var intervalId = setInterval(function(){
				      //计算最新的currleft
						currLeft += item_offset
						//到达目标位置
						if(currLeft===targetLeft){							
							clearInterval(intervalId)
							//到达最右边的图片pic1应该跳到最左边的pic1图片
							if(currLeft===-(imagecount+1)*PAGE_WIDTH){
								currLeft = -PAGE_WIDTH
							}
							/*//到达最左边的图片pic5应该跳到最右边的pic5图片
						    else if(currLeft===0){
						    	currLeft = -imagecount*PAGE_WIDTH
						    }*/
						}
						$pic.css('left',currLeft)
			},ITEM_TIME)
            }
			
			})