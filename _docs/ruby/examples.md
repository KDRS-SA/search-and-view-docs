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
  @show_fields << "full name"
{% endhighlight %}

## Use the first part of the string
E.g. remove time from the string 12.02.2024 11:00
{% highlight ruby %}
  @docs.each do |doc|
    doc["date"] = doc["date"][0..9]
  end
{% endhighlight %}

## Convert utc date to local time zone
{% highlight ruby %}
  @docs.each do |doc|
    doc["date"] = Time.zone.parse doc["date"]
  end
{% endhighlight %}
`Note` The date will be presented a little different. See next example for formatting.

## Convert utc date to local time zone
{% highlight ruby %}
  @docs.each do |doc|
    doc["date"] = Time.zone.parse doc["date"]
  end
{% endhighlight %}
`Note` The date will be presented a little different. See next example for formatting.

## Convert utc date to formatted local time
{% highlight ruby %}
  def utc_to_local_time(date)
    local_date = Time.zone.parse date
    local_time.strftime("%d.%m.%Y %H:%M")    
  end

  @docs.each do |doc|
    doc["date"] = utc_to_local_time doc["date"]
  end
{% endhighlight %}

## Make a custom method
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

## Show blank page
When no data, its good to exit early to avoid errors.
{% highlight ruby %}
  return if @docs.empty?
{% endhighlight %}

