---
layout: xml
title: footer
parent: XML View
---
If all rows in a column share the same value, e.g. first name, its recommended to place the value in a header or a footer. 

{% highlight xml %}
    <table>
        <fields>diploma_id</fields>
        <footer>diploma_id</footer>
{% endhighlight %}

If you rename a field, use the renamed value for the footer
{% highlight xml %}
    <table>
        <fields>diploma_id as nr</fields>
        <header>nr</header>
{% endhighlight %}


If the data is of primary nature, you can use a header instead.
Make sure the data is really unique, because the column will be hidden.

The first letter will be capitalized.
