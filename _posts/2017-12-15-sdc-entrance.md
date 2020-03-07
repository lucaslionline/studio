---
layout: post
title: "2018中国国际太阳能十项全能竞赛入口设计"
subtitle: "Entrance Design for Solar Decathlon China 2018"
categories: design
tags: SDC
---


<img src="{{ site.baseurl }}/assets/img/sdc-entrance/s1.png" class="post-img">

2018中国国际太阳能十项全能竞赛场地位于山东省德州市，赛场坐北朝南，占地约240亩。主入口设计灵感源于槽式抛物面太阳能集热器，造型为开口向上的抛物线。抛物线弧度根据德州市的地理坐标确定，抛物线方程为x<sup>2</sup> = 116 (y - 8)，焦点为(0, 37)，完美契合德州经纬度(116E, 37N)。根据抛物线的光学性质，平行于对称轴的光线经抛物线反射后汇聚于焦点，寓意全球精英智慧齐聚德州，共襄盛举。

<!-- more -->

东、西入口的造型取自英文字母SD，代表Solar Decathlon，点明园区主题，展现大赛标识。三段抛物线构筑出整体框架曲线，造型简洁灵动，呼应主入口设计元素。

<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<!-- Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
		<li data-target="#myCarousel" data-slide-to="3"></li>
		<li data-target="#myCarousel" data-slide-to="4"></li>
		<li data-target="#myCarousel" data-slide-to="5"></li>
	</ol>


	<div class="carousel-inner" role="listbox">
		{% for slide in site.data.images.sdc-entrance %}
		<div class="item {% if forloop.first %}active{% endif %}">
			<img src="{{ site.baseurl }}/assets/img/sdc-entrance/{{ slide.src }}.png">
			<div class="container">
				<div class="carousel-caption">
					<p>
						{{ slide.txt }}
					</p>
				</div>
			</div>
		</div>
		{% endfor %}


		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</div>