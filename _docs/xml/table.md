---
layout: xml
title: table
parent: XML View
---
Marks the beginning of a new table configuration.\
Other fields must preceed this field as shown. \
If multiple tables, placed them on the same level, beneath each other. 

{% highlight xml %}
<views> 
    <version>0.1.0</version>
    <description>views for extens</description>
    <view>
        <name>grades</name>
        <table>
            <name>students</name>
            <title>students</title>
            <fields>students</fields>
            <primarykey>students</primarykey>
        </table>
    </view>
</views>
{% endhighlight %}

