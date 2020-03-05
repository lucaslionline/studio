---
layout: post
title: "Group Posts by Year"
tags: Jekyll
---

Here is the code template I am using to make a chronological archive[^mik].

{% highlight html %}
{% raw %}

{% for post in site.categories.[page.category] %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}

{% if forloop.first %}
<p>{{ year }}</p><ul>
{% elsif year != nyear %}
</ul><p>{{ year }}</p><ul>
{% endif %}

<li><a href="{{site.baseurl}}{{post.url}}">{{ post.title }}</a>
{{ post.date | date: "%-m/%-d/%y" }}</li>
{% endfor %}
</ul>

{% endraw %}
{% endhighlight %}

[^mik]: ["Jekyll archives grouped by date"](http://mikerowecode.com/2010/08/jekyll_archives_grouped_by_year.html), mikerowecode.