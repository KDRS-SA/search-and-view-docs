---
layout: xml
title: schema
parent: XML View
---
Some large databases are divided into parts called a schema. A table is uniquely referenced by using naming `schema.table`. To simplify table names, it is recommended to assign a default value for schema. This tag is not needed for simple databases with only one schema.

{% highlight xml %}
    <view>
        <name>karakterer</name>
        <schema>ist</schema>
{% endhighlight %}

## Supporting different siard files
If we have two siard files from the same system, we can experience that one has a schema, and the other not. Then enter a schema name in the xml, and the system will fall back to the first schema if not found. In this way we can keep using the same view configuration.