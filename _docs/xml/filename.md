---
layout: xml
title: filename
parent: XML View
---
Choose a field that gives files their filename on download.

{% highlight xml %}
    <table>
        <name>folder</name>
        <fields>docid,fileobject,doctitle</fields>
        <filename>doctitle</filename>
        <export>download</export>
{% endhighlight %}

In the example above, files downloaded will get the filename of the content within the 'doctitle' field from the same row.

This tag is especially useful when using `<export>download</export>`, because if no `<filename>` is specified, every file in the Zip-archive will default to the name of the field.


