---
layout: xml
title: edit
parent: XML View
---
Field values can be edited by using this tag. Any ruby function can be used, as long as its on the format `field.ruby_method` or `field[0..3]` etc. The edits will be done in the final table, after all the lookups (joins). Multiple methods can be chained, if needed. Sorting will be done after the edits.

Example:
{% highlight xml %}
    <table>
        ...
        <edit>date[0..9]</edit> <!-- extracts 2010-01-01 from 2010-01-01T18:00:00  -->
        <edit>date[/\d*-\d*-\d*/]</edit> <!-- extracts date based on pattern  -->
        <edit>semester.gsub("s1","semester 1")</edit> <!-- semester 1 instead of s1 -->
        <edit>grade.gsub(/^.{0}$/,"---")</edit> <!-- If no grade, draw a line -->
        <edit>timer.gsub(".0","")</edit> <!-- e.g. 5 instead of 5.0  -->
        <edit>location.capitalize</edit> <!-- Trondheim is a city in norway -->
        <edit>location.titleize</edit> <!-- Trondheim Is A City In Norway   -->
        <edit>location.downcase</edit> <!-- trondheim is a city in norway -->
        <edit>location.upcase</edit> <!-- TRONDHEIM IS A CITY IN NORWAY -->
        
{% endhighlight %}

Each table and field can have multiple edits, as shown above.
Searching on edited fields will currently search in the original data.
