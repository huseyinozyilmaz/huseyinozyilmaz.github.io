---
layout: post
title:  "Oracle Database Cheatsheet"
date:   2011-09-01 08:00:00
categories: posts
---

How to Log in to Oracle as DBA
------------------------------
{% highlight bash %}
sqlplus / as sysdba
{% endhighlight %}
or 
{% highlight bash %}
sqlplus sys/password@schema as sysdba
sqlplus sys@tnsname as sysdba;
sqlplus "/as sysdba"
{% endhighlight %}

How to unlock an account in Oracle
----------------------------------
{% highlight sql %}
ALTER USER user ACCOUNT UNLOCK;
{% endhighlight %}

How to change a user's password in Oracle
-----------------------------------------
{% highlight sql %}
ALTER USER user IDENTIFIED BY password;
{% endhighlight %}

How to Export and Import Oracle Database
----------------------------------------
{% highlight bash %}
exp schemaname/password@192.168.1.55/databasename FILE=schemaname.dmp log=log.txt statistics=none
{% endhighlight %}
{% highlight bash %}
imp schemaname/password@databasename FILE=schemaname.dmp FROMUSER=fromuser TOUSER=touser log=implog.txt
{% endhighlight %}

if you importing only data then you can use `IGNORE=Y`

{% highlight bash %}
imp schemaname/password@databasename 
    tables=users 
    FILE=users.dmp 
    FROMUSER=fromuser TOUSER=touser 
    IGNORE=Y
{% endhighlight %}

How to use Oracle TO_DATE function
----------------------------------
{% highlight sql %}
to_date('10-12-06','MM-DD-YY')
to_date('jan 2007','MON YYYY')
to_date('2007/05/31','YYYY/MM/DD')
to_date('12-31-2007 12:15','MM-DD-YYYY HH:MI')
to_date('2006,091,00:00:00' , 'YYYY,DDD,HH24:MI:SS')
to_date('15-may-2006 06:00:01','dd-mon-yyyy hh24:mi:ss')
to_date('022002','mmyyyy')
to_date('12319999','MMDDYYYY')
to_date(substr( collection_started,1,12),'DD-MON-YY HH24')
to_date('2004/10/14 21', 'yyyy/mm/dd hh24')
TO_DATE(First_Load_Time, 'yyyy-mm-dd/hh24:mi:ss'))*24*60)
{% endhighlight %}

Create a new Schema in Oracle
-----------------------------
{% highlight sql %}
sqlplus sys/password@database as sysdba

CREATE USER newschema IDENTIFIED BY password;
GRANT CONNECT,RESOURCE,DBA TO newschema;
CREATE tablespace NEWSCHEMA_DATA datafile 'E:\app\oracle\tablespace\NEWSCHEMA_DATA.DBF' size 2048M extent management local;
ALTER USER newschema quota unlimited on NEWSCHEMA_DATA;
{% endhighlight %}


Oracle User Schema Sizes
------------------------
{% highlight sql %}
SELECT u.username, SUM(s.bytes/1024/1024) SIZE_IN_MB FROM all_users u, dba_segments s WHERE s.owner=u.username GROUP BY u.username ORDER BY SIZE_IN_MB DESC;
{% endhighlight %}

How to show who I am in Oracle
------------------------------
{% highlight sql %}
SHOW USER;
{% endhighlight %}


How to list created tablespaces in Oracle
-----------------------------------------
{% highlight sql %}
select tablespace_name from user_tablespaces;
{% endhighlight %}

How to list all users in an Oracle Database
-------------------------------------------
{% highlight sql %}
select * from all_users;
{% endhighlight %}


How to show schema details of a table in Oracle
-----------------------------------------------
{% highlight sql %}
DESC tablename;
{% endhighlight %}


Change Oracle Password Expiry Policy
------------------------------------
If you keep getting error messages like `ORA-28001`: the password has expired in your automated Jenkins build logs then that means oracle set to expire user passwords. 
This could be a good security measure for production databases but does not help in the Continuous Integration environment. Oracle 11g sets password expiry by default to 180 days.

This can be turned off or changed easily:

+ Password policies are registered under profiles, so first find out the active profile of the user:
{% highlight sql %}
    SELECT PROFILE FROM dba_users WHERE username = 'username'
{% endhighlight %}
+ Check the expiry limit in use in that profile
{% highlight sql %}
    SELECT resource_name, limit FROM dba_profiles WHERE profile='<profile>' AND resource_name = 'PASSWORD_LIFE_TIME';
{% endhighlight %}
+ You can set the limit to 'UNLIMITED' if you would like user's password to never expire:
{% highlight sql %}
    ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;
{% endhighlight %}

How to solve EXP-00003: no storage definition found for segment(0, 0) error in oracle
-------------------------------------------------------------------------------------
There is a bug in the export utility on version 11.2.0.1 when running against a 11.2.0.2 (and possiby 11.2.0.1) 
database that has tables without segments. Deferred segment creation was introduced as a smart feature in 11gR2, 
but this is causing error `EXP-00003` when running the old export utility from lower versions. This is reported on 
MOS for pre-11g clients, but right now I could not find any reports that this is also a problem with the 11.2.0.1 
version when this feature was introduced.

Solution: Upgrade client or allocate one extent for the table that fails:
{% highlight sql %}
alter table tableName allocate extent;
{% endhighlight %}
