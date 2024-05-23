---
layout: xml
title: table
parent: XML View
---
Marks the beginning of a new table configuration.\
Other fields must preceed this field as shown.

{% highlight xml %}
<root>
    <meta>
        <version>0.1.0</version>
        <description>configuration for school system</description>
    </meta>
    <searches>
        <search>
            <name>grades</name>
            <schema>my_schema</schema> <!-- if multiple schemas  -->
              <tables>
                <table>
                    <name>students</name>
{% endhighlight %}


