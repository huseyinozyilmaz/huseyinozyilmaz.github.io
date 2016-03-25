---
layout: post
title:  "How to Upgrade MongoDB on Mac OS X"
date:   2016-03-25 23:06:00
categories: posts
---

If you are using MongoDB version 3.0.x and you would like to upgrate it to version 3.2 then:

{% highlight bash %}
brew update
brew upgrade mongodb
{% endhighlight %}

Check the version
{% highlight bash %}mongod --version{% endhighlight %}
