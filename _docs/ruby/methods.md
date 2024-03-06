---
layout: default
title: methods
parent: Ruby View
---
# Methods
These are the available methods for use in Ruby Views.

## Get data

### Example: Get active customers
{% highlight erb %}
<% customers = table("customers", active:true, fields:"name, email") %>
{% endhighlight %}

### Parameters
{% highlight erb %}
<% table(table, criteria, fields:, filter:, rows:) %>
{% endhighlight %}
- table: table name
- criteria: Add criteria as needed e.g.: school:"fro", class:"3a", year:"2001"
    - if conflict with built in parameters, wrap them in one pair of curly braces {}
    - criteria can also be a set of space separated values, e.g. coursecode:"1 2 3" 
- fields: comma separated string of fields to retrive, e.g. fields:"first_name, last_name"
- filter: optional filter with solr syntax
- rows: if we want more than 20 records
- Returns empty array [] if no hits

## Lookup data
Lookup data in another table. This is similar to using the tag "lookup" in xml

{% highlight erb %}
<% lookup(main:, foreignkey, primarykey:, fields:, table:) %>
{% endhighlight %}
- main: the main table (hash) that you want to extend with more data
- foreignkey: the foreign key in the main document
- primarykey: the primary key in the lookup table
- table: the lookup table that has more info

### Example: Lookup address_id to find the city
{% highlight erb %}
<% customers = lookup(main:customers, foreignkey:"address_id", table:"address", primarykey:id", fields:"city") %>
{% endhighlight %}

