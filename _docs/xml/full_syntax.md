---
layout: xml
title: Full Syntax Reference
parent: XML View
nav_order: -10
---
Test:
{{ site.baseurl }}


Below is an example of the syntax of every available XML tag. The tags can be clicked to view more detailed documentation.
{% highlight xml %}
<views>
    <description>Example template using all available tags.</description>
    <version>1.0.0</version>
    <view>
        <name>View name</name>    
        <schema>schemaname</schema>
        <table>
            <name>person</name>
            <fields>fname as first_name,persondob as birthdate,school,class,addressid,diplomapdf</fields>
            <title>Title to show</title>
            <primarykey>personid</primarykey>
            <edit>birthdate[0..9]</edit>
            <export>print</export>
            <filename>diplomapdf</filename>
            <filter>first_name:"Arild"</filter>
            <parent>schoolclasses</parent>
            <foreignkey>class</foreignkey>
            <header>school</header>
            <footer>class</footer>
            <lookup>
                <foreignkey>addressid</foreignkey>
                <table>addresses</table>
                <primarykey>id</primarykey>
                <fields>street,city,country</fields>
            </lookup>            
            <preview>true</preview>
            <rows>50</rows>
            <rubyview>schoolclassview</rubyview>
            <search>false</search>
            <sort>first_name</sort>
        </table>
    </view>
</views>
{% endhighlight %}