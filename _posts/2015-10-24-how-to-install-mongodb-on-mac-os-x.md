---
layout: post
title:  "How to install MongoDB on Mac OS X"
date:   2015-10-24 14:16:00
categories: posts
---

Steps to show how to install MongoDB on Mac OS X.

1. MongoDB 3.0.7
2. Mac OS X 10.11.1

The most straight forword way to install MongoDB is to use [HomeBrew]

####1. Install MongoDB with Homebrew
First update Homebrew’s packages
{% highlight bash %}brew update{% endhighlight %}

Install the MongoDB Binaries
{% highlight bash %}brew install mongodb{% endhighlight %}

####2. Create the data directory
By default, the mongod process uses the /data/db directory. Let's create it:
{% highlight bash %}sudo mkdir -p /data/db{% endhighlight %}

####3. Set permissions for the data directory for your current user
{% highlight bash %}sudo chown `id -un` /data/db{% endhighlight %}

####4. Start MongoDB
{% highlight bash %}mongod{% endhighlight %}

####5. Stop MongoDB
press **Control+C** in the terminal where the mongod instance is running.

[Homebrew]:       http://brew.sh/
