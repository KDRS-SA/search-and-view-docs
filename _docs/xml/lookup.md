---
layout: xml
title: lookup
parent: XML View
---
Lookup an id in another table, and get one or more other values.

Example: For each `personid` in table `group`, lookup this person in table `people` to find his/her `firstname`, `lastname`, `phone` and `nationality_code`. Do another lookup to expand the `nationality_code` into text. Repeat as many times as necessary to reach your goal.
{% highlight xml %}
    <table>
        <name>group</name>
        <fields>personid</fields>
        <lookup>
            <foreignkey>personid</foreignkey>
            <table>people</table> 
            <primarykey>id</primarykey>
            <fields>firstname,lastname,phone,nationality_code</fields>
        </lookup>
        <lookup>
            <foreignkey>nationality_code</foreignkey>
            <table>nationalities</table>
            <primarykey>id</primarykey> 
            <fields>text</fields>
        </lookup>
    </table>

{% endhighlight %}

The resulting table will expand with new columns. If the lookup table have multiple lines for the same person, also the number of rows will increase.
