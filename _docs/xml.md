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
            <fields>fname as first_name,persondob as birthdate,school,class,addressid</fields>
            <heading>heading</heading>
            <primarykey>personid</primarykey>
            <edit>
                <field>birthdate[0..9]</field>
            </edit>
            <export>print</export>
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
            <sort>fname</sort>
        </table>
    </view>
</views>
{% endhighlight %}

<!-- Script below makes XML tags above links to their doc pages. Done in javascript because it was hard to override the 'highlight' functionality -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('pre code.language-xml').forEach((block) => {
        block.innerHTML = block.innerHTML.replace(/&lt;(\w+)([^&gt;]*?)&gt;/g, function(match, p1, p2) {
            return `<a href="${p1}" class="xml-tag-link">&lt;${p1}${p2}&gt;</a>`;
        }).replace(/&lt;\/(\w+)&gt;/g, function(match, p1) {
            return `<a href="${p1}" class="xml-tag-link">&lt;/${p1}&gt;</a>`;
        });
    });
});
</script>
