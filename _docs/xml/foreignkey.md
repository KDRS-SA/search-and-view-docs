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

Multiple values are not supported for the foreign key. If the primary key has multiple keys, the match will be against the first key.