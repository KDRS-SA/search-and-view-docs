---
layout: default
title: examples
parent: Ruby View
---

# Examples
These are som frequently used code snippets for the custom view.
{: .fs-6 .fw-300 }

# Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Display the main table
{% highlight erb %}
<%= render 'table' %>
{% endhighlight %}
- Will write the content of variable `@docs` that come from xml

## Add a new column for full name
Make a new column that combines first name and last name
{% highlight erb %}
<%
    @docs.each do |doc|
      doc["full name"] = doc["first name"] + " " + doc["last name"]
    end
    @show_fields << "full name"
%>
{% endhighlight %}

## Provide an alternative value
Show the student grade if it exists, or show a dashed line if its missing
{% highlight erb %}
<%
    @docs.each do |doc|
      doc["grade"] ||= "-----"
    end
    @show_fields << "full name"
%>
{% endhighlight %}

## Use the first part of the string
E.g. remove time from the string 12.02.2024 11:00
{% highlight erb %}
<%
    @docs.each do |doc|
      doc["date"] = doc["date"][0..9]
    end
%>
{% endhighlight %}

## Convert utc date to local time zone
We make a custom method, and use this in the documents loop.
{% highlight erb %}
def utc_to_local_time(date)
    Date.parse(date).in_time_zone('Europe/Oslo')
end
<%
    @docs.each do |doc|
      doc["date"] = utc_to_local_time(doc["date"])
    end
%>
{% endhighlight %}

## Make a custom method
Write out numbers e.g. 3 as "3 tre", D as "Deltatt"
Returns original string if not found
{% highlight erb %}
<% 
def write_out_grade(str)
  map = {
    "1" => "1 en", 
    "2" => "2 to",
    "3" => "3 tre", 
    "4" => "4 fire",
    "5" => "5 fem", 
    "6" => "6 seks", 
    "D" => "Deltatt", 
    "G" => "God", 
    "NG" => "Nokså god", 
    "LG" => "Lite god", 
    "FU" => "Fullført utdanning",
    "IM" => "Ikke møtt" }
  map[str] ? map[str] : str 
end
%>
{% endhighlight %}

## Merge columns
Example of merging two columns
{% highlight erb %}
<%
  @docs.each do |doc|
      doc["name"] = doc["first_name"] + doc["last_name"]
  show_fields << "name" # show_fields is an array of column names that will be displayed, so we need to add our new column "name"
  show_fields -= ["first_name", "last_name"] # Remove the columns for first and last name, so they will not be shown.
%>
<%= render 'table' %> 
{% endhighlight %}