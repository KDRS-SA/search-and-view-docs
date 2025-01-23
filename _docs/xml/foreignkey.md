---
layout: xml
title: foreignkey
parent: XML View
---
If this is a child table, this key will match against the primary key of the parent table. This key is not needed for parent tables.
{% highlight xml %}
    <table>
        <foreignkey>fk_person</foreignkey>
{% endhighlight %}

In child tables, you can use multiple foreign keys to match against multiple primary keys. 
