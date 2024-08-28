---
layout: default
title: examples
parent: Ruby View
---

# Examples
These are som frequently used code snippets for the ruby view.
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
{% highlight ruby %}
  @docs.each do |doc|
    doc["full name"] = doc["first name"] + " " + doc["last name"]
  end
  @show_fields << "full name"
{% endhighlight %}

## Provide an alternative value
Show the student grade if it exists, or show a dashed line if its missing
{% highlight ruby %}
  @docs.each do |doc|
    doc["grade"] ||= "-----"
  end
{% endhighlight %}

## Use first part of the string
E.g. remove time from the string 12.02.2024 11:00
{% highlight ruby %}
  @docs.each do |doc|
    doc["date"] = doc["date"][0..9]
  end
{% endhighlight %}

## Convert utc to local time
{% highlight ruby %}
  @docs.each do |doc|
    doc["date"] = doc["date"].in_time_zone
  end
{% endhighlight %}
`Note` The date will be presented a little different. See next example for formatting.

## Convert utc to formatted local time
If you want to format the result at the same time
{% highlight ruby %}

  @docs.each do |doc|
    doc["date"] = doc["date"].in_time_zone.strftime("%d.%m.%Y %H:%M")    
  end
{% endhighlight %}

## Custom method
Write out numbers e.g. 3 as "3 tre", D as "Deltatt"
Returns original string if not found
{% highlight ruby %}
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
{% endhighlight %}

## Show blank page if no data
When no data, its good to exit early to avoid errors.
{% highlight ruby %}
  return if @docs.empty?
{% endhighlight %}

