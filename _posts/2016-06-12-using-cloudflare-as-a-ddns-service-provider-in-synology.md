---
layout: post
title:  "Using CloudFlare as a DDNS Service Provider in Synology"
date:   2016-06-12 00:53:00
categories: posts
---

Synology supports a number of Dynamic DNS providers. Unfortunately, CloudFlare is still not supported in DSM 6.0. However, you can still use CloudFlare as a DDNS provider in Synology using **curl** command to call CloudFlare API in the Task Scheduler.

You need:

1. Your email address registered in CloudFlare
2. Global API Key from CloudFlare settings
3. Your domain name (ex: huseyin.org)
4. DNS record name (ex: nas.huseyin.org)

CloudFlare upgraded their API to v4 in 2015 and they are removing support for old API on November 9th, 2016. The following instructions are compatible with the new API. 

Using the API and **curl**, you need to find out both Zone Id and Record Id before you can update any DNS record. To get the Zone Id run the following command using your own domain name, email address and API key:

{% highlight bash %}
curl -s -X GET "https://api.cloudflare.com/client/v4/zones?name={DOMAIN_NAME}" -H "X-Auth-Email: {EMAIL}" -H "X-Auth-Key: {API_KEY}" -H "Content-Type: application/json"
{% endhighlight %}

JSON response includes Zone Id if your call is successful. To get the record id run the following command using your own Zone Id, email and API key. This call should return the Record Id that you can use to update with a new IP address.  

{% highlight bash %}
curl -s -X GET "https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records?name={RECORD_NAME}" -H "X-Auth-Email: {EMAIL}" -H "X-Auth-Key: {API_KEY}" -H "Content-Type: application/json"
{% endhighlight %}

Finally, run the following command to update the DNS record with your current IP address:

{% highlight bash %}
curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records/{RECORD_ID}" -H "X-Auth-Email: {EMAIL}" -H "X-Auth-Key: {API_KEY}" -H "Content-Type: application/json" --data "{\"id\":\"{ZONE_ID}\",\"type\":\"A\",\"name\":\"{RECORD_NAME}\",\"content\":\"`curl ifconfig.co`\"}"
{% endhighlight %}

You can create a scheduled task and add this command into the User-defined script area in the Task Scheduler. Set it to run every 5 minutes and you are done.


