---
layout: xml
title: edit
parent: XML View
---
Field values can be edited by using this tag. Any ruby function can be used, as long as its on the format field.ruby_method or field[0..3] etc. The edits will be done in the final table, after all the lookups (joins). Multiple methods can be chained, if needed. Sorting will be done after the edits.

Example:
{% highlight xml %}
    <table>
        <edit>
            <field>date[0..9]</field> <!-- extracts 2010-01-01 from 2010-01-01T18:00:00  -->
            <field>date[/\d*-\d*-\d*/]</field> <!-- extracts date based on pattern  -->
            <field>semester.gsub("s1","semester 1")</field> <!-- semester 1 instead of s1 -->
            <field>grade.gsub(/^.{0}$/,"---")</field> <!-- If no grade, draw a line -->
            <field>timer.gsub(".0","")</field> <!-- e.g. 5 instead of 5.0  -->
            <field>location.capitalize</field> <!-- Trondheim is a city in norway -->
            <field>location.titleize</field> <!-- Trondheim Is A City In Norway   -->
            <field>location.downcase</field> <!-- trondheim is a city in norway -->
            <field>location.upcase</field> <!-- TRONDHEIM IS A CITY IN NORWAY -->
        </edit>
{% endhighlight %}

Each table can have one edit tag, but many fields, as shown above.
Searching on edited fields will currently search in the original data.
