---
layout: xml
title: filter
parent: XML View
---
Data can be filtered. \
solr syntax can be used, but use human display names for the fields

Use `AND` or `OR` in uppercase to combine multiple criteria. \
Multiple filter tags are supported. They will be combined with AND.

The tag belongs inside a table tag or a lookup tag
{% highlight xml %}
    <table>
        <filter>
{% endhighlight %}
{% highlight xml %}
    <lookup>
        <filter>
{% endhighlight %}


## Example: One criteria
{% highlight xml %}
    <filter>name:"school"</filter>        
{% endhighlight %}

## Example: Criteria using OR

{% highlight xml %}
    <filter>type:"s" OR type:"e"</filter>        
{% endhighlight %}

## Example: Criteria using AND

{% highlight xml %}
    <filter>type:"documentary" AND release_year:"2006"</filter>
{% endhighlight %}

## Example: Criteria using AND - multi tag
This is equivalent to using 1 tag with AND:
{% highlight xml %}
    <filter>type:"documentary"</filter>
    <filter>release_year:"2006"</filter>
{% endhighlight %}

## Example: Find non value rows
Shorthand for finding rows that does not have any value for a field \
`Note` This is different from rows with an empty string. 
{% highlight xml %}
    <filter>personid:nil</filter>
{% endhighlight %}
<i>We insert the proper solr syntax for this</i>


`Note`
Best practice is to use " " for the filter values, so that special characters does not alter the query.