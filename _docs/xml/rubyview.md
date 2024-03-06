---
layout: xml
title: rubyview
parent: XML View
---
You can make a Ruby View if you want advanced layout or features.
This is a HTML file with some embedded Ruby.
Make a file e.g. `vendor/school_app/_diploma.html.erb`
You can edit both the data and the presentation.
See section "Ruby View" in documentation.

{% highlight xml %}
    <table>
        <rubyview>diploma</rubyview>
{% endhighlight %}

Data from the xml file will be available in `@docs`