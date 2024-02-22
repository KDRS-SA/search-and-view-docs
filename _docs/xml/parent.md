---
layout: xml
title: parent
parent: XML View
---
The table name of a parent table. This will make this table a child table, and they will be linked. Parents primary key will match the childs foreign key.

Example:
{% highlight xml %}
    <table>
        <parent>person</parent>
{% endhighlight %}

`Tip` 
Sometimes there are no parent table, but you still want to list tables side by side on the menu, as if they had a parent. You can fill out this tag with a common value, e.g. 'top'. Do this for multiple tables to give the user a multiple choice.

