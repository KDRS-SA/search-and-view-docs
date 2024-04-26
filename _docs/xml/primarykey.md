---
layout: xml
title: primarykey
parent: XML View
---
The primary key for this table
{% highlight xml %}
    <table>
        <primarykey>person_id</primarykey>
{% endhighlight %}

Sometimes there are multiple candidates. Choose the one that the child tables will refer to. 

You can also send multiple keys, if the next table needs more parameters.

{% highlight xml %}
    <table>
        <primarykey>person_id,type</primarykey>
{% endhighlight %}

When selecting a table row, this value or values will be sent as a parameter to the next view. They will be matched against the foreign key in the child table.\
Se [foreignkey]({{ 'xml/foreignkey' | relative_url }}) for more info.