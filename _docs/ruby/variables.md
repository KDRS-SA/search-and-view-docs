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
### Display the main table
{% highlight erb %}
  <%= render 'table' %>
{% endhighlight %}

### Change all rows in a table
{% highlight ruby %}
  @docs.each do |doc|
    doc["first name"] = doc["first name"].titleize
  end
{% endhighlight %}

## @show_fields
Array of fields to present from the @docs variable
### Add field
{% highlight ruby %}
  @show_fields += ["first name", "last name"] 
{% endhighlight %}

### Quick add field
{% highlight ruby %}
  @show_fields << "address"
{% endhighlight %}

### Remove field
{% highlight ruby %}
  @show_fields -= ["first name", "last name"]
{% endhighlight %}

### Redefine order
Normally we define order in the fields tag when getting data, but we can also change order here
{% highlight ruby %}
  @show_fields = ["first name", "last name"]    
{% endhighlight %}

## params
The primary key and search parameters from the parent will be put in the hash called `params`. Then the child view can use these values to fetch more data if needed, or do lookups.
{% highlight ruby %}
  params["person_id"]
{% endhighlight %}

