---
layout: post
title: "Pagination"
tags: Jekyll
---

With many websites, especially blogs, it's very common to break the main listing of posts up into smaller lists and display them over multiple pages. Jekyll offers a pagination plugin, so you can automatically generate the appropriate files and folders you need for paginated listings[^pag].

For Jekyll 3, include the `jekyll-paginate` plugin in your Gemfile and in your `_config.yml` under `gems`. For Jekyll 2, this is standard:

~~~
gems: [jekyll-paginate]
~~~

<!-- more -->

> Pagination does not work from within Markdown or Textile files from your Jekyll site. Pagination works when called from within the HTML file, named `index.html`, which optionally may reside in and produce pagination from within a subdirectory, via the `paginate_path` configuration value.

#### Enable pagination

To enable pagination for your blog, add a line to the `_config.yml` file that specifies how many items should be displayed per page. The number should be the maximum number of Posts you’d like to be displayed per-page in the generated site:

~~~
paginate: 5
~~~

You may also specify the destination of the pagination pages:

~~~
paginate_path: "/blog/page:num/"
~~~

This will read in `blog/index.html`, send it each pagination page in Liquid as `paginator` and write the output to `blog/page:num/`, where `:num` is the pagination page number, starting with `2`. If a site has 12 posts and specifies `paginate: 5`, Jekyll will write `blog/index.html` with the first 5 posts, `blog/page2/index.html` with the next 5 posts and `blog/page3/index.html` with the last 2 posts into the destination directory.

> __Pagination does not support tags or categories__
>
> Pagination pages through every post in the `posts` variable unless a post has `hidden: true` in its YAML Front Matter. It does not currently allow paging over groups of posts linked by a common tag or category. It cannot include any collection of documents because it is restricted to posts.


#### Render the paginated Posts

The next thing you need to do is to actually display your posts in a list using the `paginator` variable that will now be available to you. You’ll probably want to do this in one of the main pages of your site. Here’s one example of a simple way of rendering paginated Posts in a HTML file:



{% highlight html %}
{% raw %}

<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
<h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
<p class="author">
	<span class="date">{{ post.date }}</span>
</p>
<div class="content">
	{{ post.content }}
</div>
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
	{% if paginator.previous_page %}
	<a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
	{% else %}
	<span class="previous">Previous</span>
	{% endif %}
	<span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
	{% if paginator.next_page %}
	<a href="{{ paginator.next_page_path }}" class="next">Next</a>
	{% else %}
	<span class="next">Next</span>
	{% endif %}
</div>

{% endraw %}
{% endhighlight %}


> __Beware the page one edge-case__
>
> Jekyll does not generate a ‘page1’ folder, so the above code will not work when a `/page1` link is produced. See below for a way to handle this if it’s a problem for you.

The following HTML snippet should handle page one, and render a list of each page with links to all but the current page.



{% highlight html %}
{% raw %}

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
	{% if paginator.previous_page %}
	<a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
	{% else %}
	<span>&laquo; Prev</span>
	{% endif %}

	{% for page in (1..paginator.total_pages) %}
	{% if page == paginator.page %}
	<em>{{ page }}</em>
	{% elsif page == 1 %}
	<a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
	{% else %}
	<a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
	{% endif %}
	{% endfor %}

	{% if paginator.next_page %}
	<a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
	{% else %}
	<span>Next &raquo;</span>
	{% endif %}
</div>
{% endif %}

{% endraw %}
{% endhighlight %}


[^pag]: ["Pagination"](http://jekyllrb.com/docs/pagination/), Jekyll