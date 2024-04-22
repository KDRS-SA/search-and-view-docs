---
layout: default
title: XML View
nav_order: 2
has_children: true
has_toc: false
---
# View Configuration

KDRS Search & View can be configured using XML. The currently available tags are described in this section.
{: .fs-6 .fw-300 }


XML displaying the example Sakila database. For an in-depth walkthrough of making this template and adding more features, see the [guide.]({{ 'guide' | relative_url }})

{% highlight xml %}
<views>
    <version>0.1.0</version>
    <description>views for sakila database, for tutorial purposes</description>
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