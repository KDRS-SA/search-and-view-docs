---
layout: xml
title: parent
parent: XML View
---
The table name of a parent table. This will make this table a child table, and they will be linked. Parents primary key will match the childs foreign key.

{% highlight xml %}
    <table>
        <parent>person</parent>
{% endhighlight %}

## Showing parent tables side by side
Child tables that have the same parent will be listed side by side as tabs.
Sometimes you may want to do this for multiple parent tables as well.
You can use the `parent` tag with a dummy value like this:
{% highlight xml %}
    <table>
        <parent>top</parent>
{% endhighlight %}

