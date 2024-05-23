---
layout: default
title: variables
parent: Ruby View
---
# Variables
These are the available variables
{: .fs-6 .fw-300 }

## @docs
Hash containing the data from XML
### Example - display the @docs variable
{% highlight erb %}
<%= render 'table', vi: @vi, ti: @ti %>
{% endhighlight %}
### Example - traversing the docs variable
{% highlight erb %}
<%
    @docs.each do |doc|
      doc["first name"] = doc["first name"].titleize # your code here
    end
%>
{% endhighlight %}

## @show_fields
Array of fields to present in the table, and their order.
### Example - adding and removing fields
{% highlight erb %}
<%      
    @show_fields += ["first name", "last name"] # will add to the exising
    @show_fields -= ["first name", "last name"] # will remove these
    @show_fields = ["first name", "last name"] # will redefine all fields and their order
    @show_fields << "my column"  # a simple way to add just one field
%>
{% endhighlight %}
