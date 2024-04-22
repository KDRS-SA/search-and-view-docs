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
{% endhighlight %}

To do both:
{% highlight xml %}
    <table>
        <export>download,print</export>
{% endhighlight %}
