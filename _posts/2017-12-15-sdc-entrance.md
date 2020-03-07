---
layout: post
title: "2018中国国际太阳能十项全能竞赛入口设计"
subtitle: "Entrance Design for Solar Decathlon China 2018"
categories: design
tags: SDC
---


<img src="{{ site.baseurl }}/assets/img/sdc-entrance/s1.png" class="post-img">




<!-- more -->

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