---
layout: xml
title: table
parent: XML View
---
Marks the beginning of a new table configuration.\
Other fields must preceed this field as shown.

{% highlight xml %}
<views> 
    <version>0.1.0</version>
    <description>configuration for school system</description>
    <view>
        <name>grades</name>
        <schema>my_schema</schema> <!-- if multiple schemas  -->
        <table>
            <name>students</name>
            ...
{% endhighlight %}


Within the `<table>` tag, there are 4 required tags. These are:
- [`<name>`](../name)
- [`<title>`](../title)
- [`<primarykey>`](../primarykey)
- [`<fields>`](../fields)

