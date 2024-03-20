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
<%= render 'table'  %>
{% endhighlight %}
### Example - traversing the docs variable
{% highlight erb %}
<%
    @docs.each do |doc|
      doc["first name"] = doc["first name"].titleize
    end
%>
{% endhighlight %}

## @show_fields
Array of fields to present from the @docs variable
### Add field
{% highlight erb %}
<% 
  @show_fields += ["first name", "last name"] 
%>
{% endhighlight %}

### Quick add field
{% highlight erb %}
<% 
    @show_fields << "address"
%>
{% endhighlight %}

### Remove field
{% highlight erb %}
<%      
    @show_fields -= ["first name", "last name"]
%>
{% endhighlight %}

### Redefine order
Normally we define order in the fields tag when getting data, but we can also change order here
{% highlight erb %}
<%      
    @show_fields = ["first name", "last name"]    
%>
{% endhighlight %}
