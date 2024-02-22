---
layout: xml
title: header
parent: XML View
---
If all rows in a column share the same value, e.g. first name, its recommended to place the value in a header above the table. 

{% highlight xml %}
    <table>
        <fields>firstname</fields>
        <header>firstname</header>
{% endhighlight %}

If you rename a field, use the renamed value for header
{% highlight xml %}
    <table>
        <fields>fname as firstname</fields>
        <header>firstname</header>
{% endhighlight %}


If the data is of second nature, you can use a footer instead.
Make sure the data is really unique, because the column will be hidden.

The first letter will be capitalized.
