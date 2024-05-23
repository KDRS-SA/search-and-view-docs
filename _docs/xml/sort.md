---
layout: xml
title: sort
parent: XML View
---
Sort the current page based on the given column. Use the <rows> tag to get more data for the current page. If the values seem to be integers, the sort will be numeric. If not they will sort as string.

Example:
{% highlight xml %}
    <table>
        <sort>lastname</sort> <!-- sorts in ascending order  -->
{% endhighlight %}

Currently you can sort on one column, either in ascending or descending order.
