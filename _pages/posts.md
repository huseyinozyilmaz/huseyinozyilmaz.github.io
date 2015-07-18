---
layout: page
title: Posts
permalink: /posts/
categories: page
---
<ul class="post-box-list">
{% for post in site.posts %}
    <li class="post-box-list-item">
        <a href="{{post.url}}" title="Go to: {{post.title}}">{{post.title}}</a>
    </li>
{% endfor%}
</ul>