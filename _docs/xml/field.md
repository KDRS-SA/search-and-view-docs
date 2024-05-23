---
layout: xml
title: field
parent: XML View
---
Specifies one field to be edited

Example:

{% highlight xml %}
    <table>
        <name>cities</name>
        <fields>name,date</fields>
        <edit>
            <field>name.capitalize</field> <!-- Like this -->
            <field>name.titleize</field> <!-- Like This -->
            <field>date[0..9]</field>
        </edit>
    </table>
{% endhighlight %}

You can use any Ruby string method here