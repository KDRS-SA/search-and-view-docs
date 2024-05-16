---
layout: xml
title: export
parent: XML View
---
Places a button in the view for easy printing or downloading multiple files in one Zip-archive.

To add a print button:
{% highlight xml %}
    <table>
        <export>print</export>
{% endhighlight %}

To add selection boxes and a button for downloading multiple files as a Zip-file:
{% highlight xml %}
    <table>
        <export>download</export>
        <filename>doctitle</filename>
{% endhighlight %}
`Note` When using the download export option, it is highly recommended to use the [`<filename>`]({{ 'xml/filename' | relative_url }}) tag to give the files in the Zip-archive meaningful names.

To do both:
{% highlight xml %}
    <table>
        <export>download,print</export>
{% endhighlight %}
