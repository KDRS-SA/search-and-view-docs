---
layout: default
title: XML View
nav_order: 3
has_children: true
has_toc: false
---
# XML View

KDRS Search & View can be configured using XML. Features can be extended by using a [Ruby View]({{ 'ruby' | relative_url }})
{: .fs-6 .fw-300 }


### XML displaying the example Sakila database. 
For an in-depth walkthrough of making this template and adding more features, see the [guide.]({{ 'guide' | relative_url }})

{% highlight xml %}
<views>
    <version>0.1.0</version>
    <description>sakila movie database</description>
    <view>
        <name>movies</name>
        <table>
            <name>film</name>
            <title>movies</title>
            <fields>title,description,release_year</fields>
            <primarykey>film_id</primarykey>
        </table>
    </view>
</views>
{% endhighlight %}

![](../assets/images/sakila-movies-simple.png)