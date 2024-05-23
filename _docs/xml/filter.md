---
layout: xml
title: filter
parent: XML View
---
Data can be filtered. This will be sent as query to the database. \
solr syntax can be used, but use human display names for the fields. \

Please use `AND` or `OR` in uppercase to combine multiple criteria. \
Currently one pair of filter tags is supported.

Example: Show the subjects for a student that are related to his/her final year (type 's'). Also include exams (type 'e').
{% highlight xml %}
    <table>
        <name>activity</name>
        <filter>type:"s" OR type:"e"</filter>        
{% endhighlight %}

Example: Include all buildings that have the name `school`
{% highlight xml %}
    <table>
        <name>buildings</name>
        <filter>name:"school"</filter>        
{% endhighlight %}

`Note`
Best practice is to use " " for the filter values, so that special characters does not alter the query.