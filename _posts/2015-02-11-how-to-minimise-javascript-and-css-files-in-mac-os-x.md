---
layout: post
title:  "How to minimise JavaScript and CSS files in Mac OS X"
date:   2015-02-11 07:50:00
categories: posts
---

JavaScript task runners like [Grunt] or [Gulp] is a common tools to take care of tasks like minifiying CSS and JavaScript files using various plugins. However, if you do not want to set up any task runner, then you can use [YUI Compressor].

The YUI Compressor is a JavaScript and CSS minifier that removes comments, white-spaces and obfuscates local variables using the smallest possible variable names.

You can install it using [Homebrew] in mac:
{% highlight bash %}
brew install yuicompressor
{% endhighlight %}

Once it is installed, you should be able to just run yuicompressor from the terminal:

{% highlight bash %}
yuicompressor main.css > main.min.css
yuicompressor main.js > main.min.js
{% endhighlight %}

[YUI Compressor]: http://yui.github.io/yuicompressor/
[Homebrew]:       http://brew.sh/
[Grunt]:          http://gruntjs.com/
[Gulp]:           http://gulpjs.com/
