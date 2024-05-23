---
layout: default
title: merge columns
parent: examples
---

# Merge columns
Example of merging two columns
{: .fs-6 .fw-300 }

# Display the main table
version 1.5
{% highlight erb %}
docs.each do |doc|
    doc["name"] = doc["first_name] + doc["last_name]
show_fields << "name"
<%= render 'table' %> 
{% endhighlight %}

version 1.4
{% highlight erb %}
<%= render 'table', vi: @vi, ti: @ti %>
{% endhighlight %}


