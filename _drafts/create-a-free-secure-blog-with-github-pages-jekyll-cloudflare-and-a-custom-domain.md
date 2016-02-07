---
layout: post
title:  "Create a free secure blog with Github Pages, Jekyll, Cloudflare and a custom domain"
date:   2015-06-28 17:50:00
categories: web
---
I have been hosting my personal website in various hosting companies since 2003. I always wanted to have a busy website where I share my experince with technology, software development and similar topics. However, first, I have never managed to find enough spare time to fulfill this dream. Second, I am not a good writer at all. I like to talk about things rather than write about them. I always admired people who can seamlesly transform their thoughts into words and convert them to flowing narratives.

Nevertheless, having a personal website has given me an opportunity to experiment with different technologies and p;atforms. God knows how many times, I rewrote my website with different languages and framworks such as PHP (Codigniter, Slim), Java (Spring MVC, REST, JSP), Node.js and AngularJS. This kept me upto date with trending technologies and practices.

I rewroteng my website again. This time I am using Github Pages, Jekyll and CloudFlare.  and my custom domain.

Cloudflare configuration:
* add a cname record 
    @   huseyinozyilmaz.github.io ON
    www huseyinozyilmaz.github.io ON
Speed
    Auto Minify: ALL

Add Post Comments
Disqus is one of the most popular platform used in blogs. Once you signed up, go to the settings menu at the left top corner and select "Add Disqus To Site" option. Give your site details and register. There are number of settings available to customize Disqus to your preferences. Install section gives you a universal code snippet to be coppied to your website. I added disqus code to the bottom of the post layout. And that's it. That's all you need to do to add post comments and discussions to your blog posts.

Add Contact Form to your Github Pages
I wrote a seperate post about how to add contact form to 
