---
layout: post
title: "Previous/Next Post within a Category"
tags: Jekyll
---

If your blog lists all posts in only one section, you can always use `{% raw %}{{post.previous.url}}{% endraw %}` and `{% raw %}{{post.next.url}}{% endraw %}` to make links to previous and next posts[^jek]. However, sometimes we group our posts in defferent sections by category. In this case, `post.previous` and `post.next` are no longer handy to navigate because they will link to posts in other categries which are not supposed to be shown in current section. To navigate previous/next post within one category, the following code template is presented[^tem].

<!-- more -->

{% highlight html %}
{% raw %}

{% if page.categories %}
    {% assign category = page.categories[0] %}
    {% assign posts = site.categories[category] %}

    {% for post in posts %}
        {% if post.url == page.url %}
            {% assign post_index0 = forloop.index0 %}
            {% assign post_index1 = forloop.index %}
        {% endif %}
    {% endfor %}

    {% for post in posts %}
        {% if post_index0 == forloop.index %}
            {% assign next_post = post %}
        {% endif %}
        {% if post_index1 == forloop.index0 %}
            {% assign prev_post = post %}
        {% endif %}
    {% endfor %}
{% endif %}

{% if next_post %}
    <a href="{{site.baseurl}}{{next_post.url}}" class="prev">&laquo; {{next_post.title}}</a>
{% endif %}

{% if prev_post %}
    <a href="{{site.baseurl}}{{prev_post.url}}" class="next">{{prev_post.title}} &raquo;</a>
{% endif %}

{% endraw %}
{% endhighlight %}

[^jek]: ["Jekyll – how to link to next/previous post on your blog"](http://david.elbe.me/jekyll/2015/06/20/how-to-link-to-next-and-previous-post-with-jekyll.html), David Elbe.
[^tem]: ["Template Variables for Next/Previous Posts Within a Category"](https://github.com/jekyll/jekyll/issues/260), surajram.