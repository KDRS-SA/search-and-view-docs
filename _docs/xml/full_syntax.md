---
layout: xml
title: Full Syntax Reference
parent: XML View
nav_order: -10
---
Index of every tag and its suggested order. Click a tag to learn more.
For a more basic example see [XML View]({{ 'xml' | relative_url }})
{% highlight xml %}
<views>
    <version>1.0.0</version>
    <description>example using all tags</description>
    <view>
        <name>diploma</name>    
        <schema>db1</schema>
        <table>
            <name>diploma</name>
            <title>diploma</title>
            <parent>person</parent>
            <fields>fname as first name,dob as birthdate,school,class,addressid,diploma_pdf</fields>
            <primarykey>diplomaid</primarykey>
            <foreignkey>personid</foreignkey>
            <filter>first name:"arild"</filter>
            <edit>birthdate[0..9]</edit>
            <sort>first name</sort>
            <header>school</header>
            <footer>class</footer>
            <export>print,download</export>
            <filename>diploma_pdf</filename>
            <preview>false</preview>
            <search>false</search>
            <rows>50</rows>
            <rubyview>diploma</rubyview>
            <lookup>
                <foreignkey>addressid</foreignkey>
                <table>address</table>
                <primarykey>id</primarykey>
                <fields>street,city,country</fields>
            </lookup>            
        </table>
    </view>
</views>
{% endhighlight %}